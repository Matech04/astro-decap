export default async function import_image(url){
  return (await import(/* @vite-ignore */ `/${url}`)).default;
}

