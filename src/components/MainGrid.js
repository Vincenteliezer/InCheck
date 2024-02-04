import React, { useState } from 'react'
import { BsGear, BsList, BsPencilSquare } from 'react-icons/bs'
import Avator from './reusable/Avator'
import SearchBar from './reusable/SearchBar'
import signImage from '/public/images/signImage.png'
import AntModal from './ui/AntModal'



export default function MainGrid() {
    const [openModalExpense, setOpenModalExpense] = useState(false);

    const handleCancel = () => {
        setOpenModalExpense(false);
    }
    const showModal = () => {
        setOpenModalExpense(true);
    }

    return (
        <>
            <AntModal title="New expense" onCancel={handleCancel} open={openModalExpense}>
                <p>Add here</p>
            </AntModal>
            <div className='grid grid-cols-12 gap-6 px-6 h-screen'>
                <div className='col-span-3 overflow-auto'>
                    <div className='flex items-center space-x-3 sticky top-0 bg-[#f6f8fc] z-50 py-2'>
                        <button className='h-30 w-30 hover:bg-gray-200 w-fit p-2 rounded-full'>
                            <BsList size={26} />
                        </button>
                        <div>
                            <h3 className='text-xl font-semibold'>InCheck</h3>
                        </div>
                    </div>

                    <button className='flex space-x-3 bg-white px-5 py-5 rounded-2xl hover:shadow-md mt-6 active:scale-95 sticky top-12' onClick={showModal}>
                        <BsPencilSquare size={20} color='gray' />
                        <div className='text-sm'>New Expense</div>
                    </button>

                    <div className='mt-4'>
                        <AntModal />
                    </div>
                </div>

                <div className='col-span-9  overflow-auto  scrollbar-hide'>
                    <div className='flex gap-6 sticky top-0 bg-[#f6f8fc] py-2'>
                        <div className='flex-1'>
                            <SearchBar />
                        </div>

                        <div className=' flex items-center space-x-4 justify-end'>
                            <div className='bg-[#eaf1fb] px-5 py-3 rounded-3xl'>
                                <h2 className='text-sm font-light'>Ksh 20,000</h2>
                            </div>
                            <div className='flex items-center justify-items-end space-x-6'>
                                <BsGear size={26} color='gray' />
                                <Avator src={signImage} alt="Profile Avator" />
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-3xl overflow-hidden mt-5 mb-4'>
                        <div className='px-8 py-6  bg-white '>
                            <h2 className='text-xl font-normal'>Home</h2>
                        </div>
                        <div className='px-6 pb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et impedit ad asperiores neque nam incidunt voluptas, aliquid eius quae placeat dolorem, consectetur cum possimus, corporis dolores distinctio illum quia perferendis porro in soluta. Excepturi quis possimus placeat et sint est commodi, earum amet aut, cupiditate vitae mollitia dolor rerum omnis eligendi reprehenderit minus. Voluptate consectetur sapiente tempore vitae enim minus, veniam repellendus? Ratione placeat rerum, voluptatum adipisci eaque eveniet tempora optio repellat illo consequatur aut aliquid labore accusantium velit nesciunt consectetur in. Deleniti soluta ipsa excepturi officiis sit qui suscipit asperiores voluptas. Eius provident harum distinctio est ipsam cumque suscipit eaque vero fugit cupiditate at explicabo iusto molestias, eum sunt similique maxime nihil. Assumenda nulla maiores earum illo illum. Totam hic veritatis adipisci qui iusto deleniti quidem, fugit libero porro excepturi? Ea deleniti cupiditate voluptate dolore cum quia eaque magnam ratione ipsum aperiam unde officiis mollitia blanditiis, incidunt veritatis! Veritatis, provident ab illum incidunt delectus voluptatum rerum blanditiis nesciunt aspernatur dolor minus tempora, perspiciatis, culpa suscipit excepturi illo laborum cupiditate iste obcaecati doloremque dolores beatae. Explicabo quis quam, sequi esse, facilis sapiente ab reprehenderit nesciunt tempora iure at in nemo nostrum eum. Reiciendis, voluptatibus facilis numquam corporis voluptatem doloremque nihil consequuntur earum esse quae debitis doloribus eveniet ipsa saepe voluptatum perferendis maiores officiis. Deserunt dolore aut ipsam, voluptatem perferendis accusamus nobis nihil enim animi. Voluptas explicabo mollitia beatae suscipit dolores enim ut minus dolor laudantium excepturi fugit, inventore alias eius laborum nesciunt est totam earum similique reiciendis quisquam in ducimus aspernatur ullam? Accusamus modi quas fugit totam quos quod nobis eius, itaque aspernatur neque eos rerum atque, distinctio reprehenderit autem voluptate culpa eligendi tenetur minus quam eveniet. Ipsum veritatis ab dicta. Laborum vero ratione enim repellendus assumenda. Excepturi eaque ipsum earum! Voluptas consequatur aperiam, cupiditate sunt, reprehenderit eum quos necessitatibus totam officia minima alias explicabo perspiciatis doloremque sapiente corporis quia. Quas dolore placeat, cupiditate sequi aspernatur, earum praesentium doloremque itaque dignissimos minima, rem fuga blanditiis nostrum. Corporis in architecto magni expedita voluptates molestias at pariatur laboriosam reiciendis, tempora optio dolorem eligendi assumenda quaerat. Aut, sunt. Eveniet perferendis, ad, adipisci esse assumenda maxime asperiores ea molestiae cumque, distinctio laboriosam quia eius? Sunt odit eum, ratione natus excepturi veritatis et, esse doloribus quod sapiente qui minima earum? Reprehenderit laborum neque, ipsam, nisi assumenda at dolores expedita accusantium dicta molestiae dolor alias eos vel quas repellat provident ut error, pariatur fuga consequatur odit atque aliquam excepturi quos! Voluptatem dolor temporibus aspernatur sed ea provident, quos sapiente asperiores aliquam, fugiat, necessitatibus sit eum adipisci mollitia aliquid? Dignissimos nulla labore eligendi voluptate tempora commodi quas, culpa ex quod sint in eius praesentium natus at ratione quibusdam tenetur suscipit eos cumque iure nisi nostrum et corrupti. Quo, voluptatibus totam quis ex distinctio impedit mollitia laboriosam alias quidem. Pariatur minima maiores sunt a molestiae id, ad cupiditate quo incidunt cum, voluptate suscipit accusantium earum non natus sint excepturi quae placeat. Ea rerum temporibus pariatur praesentium error, vitae explicabo iure ipsa atque deleniti culpa quod perspiciatis aliquid maiores repellat, autem repellendus sit aliquam. Fugit, animi. Officiis error ab impedit illum inventore distinctio blanditiis, minus praesentium quis dignissimos consectetur, velit quibusdam deserunt? Doloribus nesciunt harum corrupti quo cum tenetur porro modi iure perferendis, exercitationem libero illo, ullam nemo in nulla! Ea voluptates, asperiores ipsum aperiam ad eligendi nulla tenetur quasi quos facilis qui enim doloremque delectus blanditiis tempore aut eum autem reprehenderit minima voluptatum sit error dolores? Reiciendis excepturi, dolore tenetur numquam obcaecati aut quae odit deserunt distinctio facilis laborum quibusdam ut autem suscipit repellat dolores pariatur harum maxime. Illo error magnam, fuga reiciendis modi architecto quasi praesentium dignissimos. Incidunt, nisi commodi repellat molestiae voluptate voluptatibus officia quod veniam doloribus cum rerum dolore fuga soluta, ullam, dolores ea qui nostrum harum omnis modi quidem suscipit laborum. Laboriosam repudiandae ratione nesciunt et! Quasi accusamus quaerat beatae odit nesciunt id voluptates quas corrupti ut sequi debitis sapiente minima porro tenetur consequuntur sint, rerum nam aperiam voluptatibus delectus voluptatem repellendus veniam magnam dolore? Dicta, nulla ullam! Voluptatum mollitia quia explicabo nostrum repellat accusantium cupiditate ad sunt ut nam magni ullam quod incidunt possimus, hic atque nulla vitae expedita consequatur sit adipisci provident laboriosam vero pariatur! Animi officia, aliquid incidunt sunt consequatur repellendus soluta earum perferendis explicabo perspiciatis non a fugiat expedita. Iusto, ullam? Libero expedita doloribus dolor reiciendis fuga, eos ipsa corrupti provident fugit recusandae minus dolore doloremque exercitationem excepturi obcaecati quaerat consequatur veniam illum nisi sint rem ipsam! Odit voluptatibus enim ipsum facilis debitis, molestiae quaerat illum similique fugit vitae quidem excepturi, in, laudantium expedita. A quasi magnam quo est assumenda debitis nam ipsa voluptatum? Error delectus nulla ducimus praesentium? Temporibus nulla provident nobis, perferendis ullam obcaecati reiciendis, illum architecto quia, aperiam magnam doloremque et! Natus tenetur a provident quisquam architecto harum rerum necessitatibus fuga quibusdam. Accusantium, quos optio officiis dolore libero maxime? Dicta facere earum blanditiis voluptatem error dolor illum recusandae tenetur tempore sit. Natus eos molestias fugiat labore blanditiis, officiis consectetur impedit? Dignissimos tempora, illo consectetur adipisci fuga, dolor nemo, alias non nihil consequuntur perspiciatis minima. Natus, totam. Natus, corrupti. Illum minima laboriosam, adipisci pariatur voluptatum soluta cum eum, inventore sapiente reiciendis deleniti aspernatur nostrum labore incidunt, vero unde vel asperiores? Eligendi dicta sed voluptates incidunt dolore doloribus esse labore repellendus hic! Non nobis eius blanditiis! Ratione amet assumenda quod cum unde harum repellendus impedit, sed fugit necessitatibus temporibus, quia maxime quasi at perspiciatis blanditiis vero corporis quaerat culpa obcaecati reiciendis, sint minus eaque eius! Ratione enim hic, repellendus reprehenderit assumenda voluptatibus, deleniti consequuntur unde magni, pariatur voluptatum. Tenetur vero quaerat temporibus assumenda, odio aut aliquam harum, culpa mollitia quo fugiat eum numquam unde vitae consectetur facere voluptates sed laboriosam ab earum commodi quos autem molestias! Magni similique amet ex hic iste, repellendus, quia, corrupti accusantium eius quos quo! Perferendis quaerat accusantium incidunt repudiandae adipisci eaque sunt, corporis nobis consectetur esse, laborum beatae impedit doloribus dolorem obcaecati natus, sit facilis tempore. Iure eius officia recusandae magnam maiores beatae nisi amet voluptate. Unde accusantium quod deserunt, impedit doloremque eveniet.
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
