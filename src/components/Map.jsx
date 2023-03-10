import MapNigeria from '../assets/Nigeria.png';
import {HiPlus, HiMinus} from 'react-icons/hi';
import { useFetch } from '../hooks/useFetch';
import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from '@tanstack/react-table';
import { ThreeDots } from 'react-loader-spinner';
import MapComponent from './MapComponent';
import NigeriaSvg from './NigeriaSvg';

const url = "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes";

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor('states', {
      cell: info => info.getValue(),
      header: () => <span>States</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('APC', {
      id: 'APC',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>APC</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('LP', {
      header: () => 'LP',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('PDP', {
      header: () => <span>PDP</span>,
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('leading', {
        id: 'leading',
        header: () => <span>Leading</span>,
        cell: info => info.getValue(),
        footer: info => info.column.id,
      }),
]


const Map = () => {
    const { data, isPending, error } = useFetch(url, {type: 'state_result'});
    let Abia = 0, Anambra = 0, Adamawa= 0, CrossRiver = 0, Lagos= 0, Rivers = 0;

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      });
    
    if(data) {
        for (let i = 0; i < data['Abia'].length; i++){
            Abia += data['Abia'][i].candidate_votes;
        };
        for (let i = 0; i < data['Adamawa'].length; i++){
            Adamawa += data['Adamawa'][i].candidate_votes;
        };
        for (let i = 0; i < data['Anambra'].length; i++){
            Anambra += data['Anambra'][i].candidate_votes;
        }
        for (let i = 0; i < data['Cross River'].length; i++){
            CrossRiver += data['Cross River'][i].candidate_votes;
        }
        for (let i = 0; i < data['Lagos'].length; i++){
            Lagos += data['Lagos'][i].candidate_votes;
        }
        for (let i = 0; i < data['Rivers'].length; i++){
            Rivers += data['Rivers'][i].candidate_votes;
        }
    }
 
    //data && console.log(Abia,Adamawa, Anambra, Rivers, CrossRiver, Lagos);


  return (
    <div>
        <div className='my-6'>
            <h2 className=' text-lg md:text-2xl font-medium my-3'>State Results</h2>
            <span className='border-[#393c4a] border-[0.5px] opacity-50 w-full flex my-4'></span>
            {!isPending && data &&
                <div> 
                <table className='border-[1px] border-[#d3d3d3]/[30%] w-full px-2'>
                    <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr className='bg-[#111421] md:bg-inherit' key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th className='md:border-b-[1px] md:border-r-[1px] border-[#d3d3d3]/[30%] p-1' key={header.id}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th>
                        ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                        <tr key='Abia'>
                            <td className='cell underline-offset-1 underline'>Abia</td>
                            <td className='cell'>{(data['Abia'][2].candidate_votes / Abia * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Abia'][0].candidate_votes / Abia * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Abia'][1].candidate_votes / Abia * 100).toFixed(1)}%</td>
                            <td className='bg-PeterObi cell font-medium'>LP</td>
                        </tr>
                        <tr key='Adamawa'>
                            <td className='cell underline-offset-1 underline'>Adamawa</td>
                            <td className='cell'>{(data['Adamawa'][2].candidate_votes / Adamawa * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Adamawa'][1].candidate_votes / Adamawa * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Adamawa'][0].candidate_votes / Adamawa * 100).toFixed(1)}%</td>
                            <td className='bg-Atiku cell font-medium'>PDP</td>
                        </tr>
                        <tr key='Anambra'>
                            <td className='cell underline-offset-1 underline'>Anambra</td>
                            <td className='cell'>{(data['Anambra'][1].candidate_votes / Anambra * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Anambra'][0].candidate_votes / Anambra * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Anambra'][2].candidate_votes / Anambra * 100).toFixed(1)}%</td>
                            <td className='bg-PeterObi cell font-medium'>LP</td>
                        </tr>
                        <tr key='CrossRiver'>
                            <td className='cell underline-offset-1 underline'>Cross River</td>
                            <td className='cell'>{(data['Cross River'][2].candidate_votes / CrossRiver * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Cross River'][0].candidate_votes / CrossRiver * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Cross River'][1].candidate_votes / CrossRiver * 100).toFixed(1)}%</td>
                            <td className='bg-PeterObi cell font-medium'>LP</td>
                        </tr>
                        <tr key='Lagos'>
                            <td className='cell underline-offset-1 underline'>Lagos</td>
                            <td className='cell'>{(data['Lagos'][1].candidate_votes / Lagos * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Lagos'][0].candidate_votes / Lagos * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Lagos'][2].candidate_votes / Lagos * 100).toFixed(1)}%</td>
                            <td className='bg-PeterObi cell font-medium'>LP</td>
                        </tr>
                        <tr key='Rivers'>
                            <td className='cell underline-offset-1 underline'>Rivers</td>
                            <td className='cell'>{(data['Rivers'][2].candidate_votes / Rivers * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Rivers'][0].candidate_votes / Rivers * 100).toFixed(1)}%</td>
                            <td className='cell'>{(data['Rivers'][1].candidate_votes / Rivers * 100).toFixed(1)}%</td>
                            <td className='bg-PeterObi cell font-medium'>LP</td>
                        </tr>

                        
                    </tbody>
                </table>
                </div>     
            }
            {isPending && <div className='flex h-full justify-center items-center'>
                <ThreeDots 
                            height="80" 
                            width="80" 
                            radius="9"
                            color="#fff" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                            />
                    </div>
            }
            {error && <span>{error.msg}</span>}

        </div>     
        <div className='relative mt-1 bg-[#1b1f30] border-[1px] border-[#393c4a] rounded'>
            <div className='w-[80%] py-8 px-2'>
                {/* <img src={MapNigeria} alt="map" /> */}
                <NigeriaSvg />
            </div>
            <div className='absolute top-10 right-5 lg:right-10 gap-2 flex flex-col'>
                <HiPlus className='bg-white text-[#777] text-lg lg:text-3xl rounded px-1'  />
                <HiMinus className='bg-white text-[#777] text-lg lg:text-3xl rounded px-1'  />
            </div>
            <div className='text-[#57656b] text-xs lg:text-base flex flex-col gap-2 absolute bottom-5 md:bottom-10 right-5 md:right-20'>
                <div className='flex gap-2'>
                    <span className='bg-[#64ccff] h-3 w-3 md:h-6 md:w-6'></span>
                    <p>APC</p>
                </div>
                <div className='flex gap-2'>
                    <span className='bg-[#0aa83f] h-3 w-3 md:h-6 md:w-6'></span>
                    <p>LP</p>
                </div>
                <div className='flex gap-2'>
                    <span className='bg-[#d62b3c] h-3 w-3 md:h-6 md:w-6'></span>
                    <p>PDP</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map