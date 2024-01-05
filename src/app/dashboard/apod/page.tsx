import { SimpleAPOD, APODResponse } from "@/app/apod";
import Image from "next/image";
import NasaImage from '/public/nasa.jpeg'


const getInfo = async( count = 20 ):Promise<SimpleAPOD[]> => {
    const data:APODResponse[] = await fetch(`https://api.nasa.gov/planetary/apod?api_key=MDgCgFa7t8VZ3d1HycYspkF12Ev8zc8O1NN1Tvb6&count=${count}`)
    .then(res => res.json());
    
   
    const mappedData: SimpleAPOD[] = data.map((item) => ({
        id: item.date, 
        name: item.title,
        image: item.url  
    }));

    console.log(mappedData);
    return mappedData;
}

export default async function APODPage() {

    const info = await getInfo();

  return (
    <div className="flex flex-col">
     <div className="flex flex-wrap gap-10 items-center justify-center">
        {
            info.map(element => (
                <Image
                    src={element.image.includes('apod.nasa.gov' || 'earth.nullschool.net') ? element.image : NasaImage}
                    alt={element.name}
                    key={element.id}
                    width={200}
                    height={200}
                    style={{
                        width: '10rem',
                        height: '10rem',
                      }}
                    className="object-cover"
                />
            ))
        }
     </div>
    </div>
  );
}
