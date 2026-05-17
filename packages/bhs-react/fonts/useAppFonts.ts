import {
  JosefinSlab_100Thin,
  JosefinSlab_100Thin_Italic,
  JosefinSlab_200ExtraLight,
  JosefinSlab_200ExtraLight_Italic,
  JosefinSlab_300Light,
  JosefinSlab_300Light_Italic,
  JosefinSlab_400Regular,
  JosefinSlab_400Regular_Italic,
  JosefinSlab_500Medium,
  JosefinSlab_500Medium_Italic,
  JosefinSlab_600SemiBold,
  JosefinSlab_600SemiBold_Italic,
  JosefinSlab_700Bold,
  JosefinSlab_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/josefin-slab';

export default function useAppFonts(): [boolean, Error | null] {
  return useFonts({
    JosefinSlab_100Thin,
    JosefinSlab_100Thin_Italic,
    JosefinSlab_200ExtraLight,
    JosefinSlab_200ExtraLight_Italic,
    JosefinSlab_300Light,
    JosefinSlab_300Light_Italic,
    JosefinSlab_400Regular,
    JosefinSlab_400Regular_Italic,
    JosefinSlab_500Medium,
    JosefinSlab_500Medium_Italic,
    JosefinSlab_600SemiBold,
    JosefinSlab_600SemiBold_Italic,
    JosefinSlab_700Bold,
    JosefinSlab_700Bold_Italic,
  });
}
