import {Chart, ArcElement} from 'chart.js/auto'
import { FC } from 'react';
import { Pie } from 'react-chartjs-2';
import GenerateRandomHex from '../../utils/GenerateRandomHex';
Chart.register(ArcElement);


const PieChart: FC<{languages: string[]}> = ({languages}) => {

    const countLanguage = languages.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {} as { [key: string]: number });
      
      const newLanguages = Object.keys(countLanguage).map(key => ({
        valeur: key,
        nombre: countLanguage[key],
        color: GenerateRandomHex()
      }));

      const data = {
        labels: newLanguages.map((i) => i.valeur),
        datasets: [
            {
                label: 'Summary',
                data: newLanguages.map((i) => i.nombre),
                backgroundColor: newLanguages.map((i) => i.color),
                hoverOffset: newLanguages?.length
            }
        ]
      }

    return(
        <>
            <Pie
                data={data}
            />
        </>
    )
    
}

export default PieChart