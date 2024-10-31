import supabase from './supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // ----- Create Edit Cabin ------
  let query = supabase.from('cabins');

  // ----- Create Cabin ------
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // ----- Edit Cabin ------
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created');
  }
  // ---------  Upload image -----------
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Cabins image could not be uploaded and the cabin was not created'
    );
  } else {
    // Handle success
  }

  return data;
}

export async function deleteCabin({ id, imagePath }) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .remove([imagePath.split('/').pop()]);

  if (storageError) {
    console.error(storageError);
    throw new Error('Image could not be deleted from storage');
  }
}
