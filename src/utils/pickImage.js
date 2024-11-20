import * as ImagePicker from 'expo-image-picker';
import { useConfig } from '../hooks/Config';
import * as FileSystem from 'expo-file-system';

export const usePickImage = () => {
  const { directory } = useConfig();

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect: [1, 1],
      });

      if (!result.canceled) {
        // console.log("pickImage", result.assets[0].uri);
    const localUri = result.assets[0].uri;
    const filename = localUri.split('/').pop(); //nome do arquivo
    const newPath = `${directory}/${filename}`;

    await FileSystem.moveAsync({
      from: localUri,
      to: newPath,
    });
    // console.log("newPath", newPath);
   //pega a pasta onde o arquivo está
    return filename;
      } else return ""
    } catch (error) {
      console.log("pickImage", error);
      throw error;
    }
  };

  return { pickImage };
};