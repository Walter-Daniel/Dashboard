import { SimpleAPOD, APODResponse } from "@/app/apod";


const getInfo = async( count = 20 ):Promise<SimpleAPOD[]> => {
    const data:APODResponse[] = await fetch(`https://api.nasa.gov/planetary/apod?api_key=MDgCgFa7t8VZ3d1HycYspkF12Ev8zc8O1NN1Tvb6&count=${count}`)
    .then(res => res.json());
    
   
    const mappedData: SimpleAPOD[] = data.map((item) => ({
        id: item.date, 
        name: item.title  
    }));

    console.log(mappedData);
    return mappedData;
}

export default async function APODPage() {

    const info = await getInfo();

  return (
    <div>
      {
        JSON.stringify(info)
      }
    </div>
  );
}
