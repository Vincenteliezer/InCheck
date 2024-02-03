import React from 'react'
import { BsPencilSquare } from 'react-icons/bs'


export default function MainGrid() {
    return (
        <>
            <div className='grid grid-cols-12 gap-6 px-6 sticky top-0 pb-6'>
                <div className='col-span-3'>
                    <button className='flex space-x-3 bg-white px-5 py-5 rounded-2xl hover:shadow-md mt-4 active:scale-95'>
                        <BsPencilSquare size={20} color='gray' />
                        <div className='text-sm'>New Expense</div>
                    </button>
                </div>
                <div className='col-span-9 bg-white rounded-3xl overflow-auto h-screen scrollbar-hide'>
                    <div className='px-8 py-6 sticky top-0 bg-white'>
                        <h2 className='text-xl font-normal'>Home</h2>
                    </div>
                    <div className='px-6 pb-6'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dolorum labore. Atque vel, numquam, eos nihil quasi, temporibus ab in quam tenetur doloremque nobis aperiam fugit eaque maiores facere? Ducimus totam in, aperiam explicabo, repudiandae omnis accusantium error quidem, reiciendis expedita pariatur blanditiis? Iure perspiciatis reiciendis nihil eaque, exercitationem at. Mollitia debitis blanditiis, facere eum ut impedit sequi asperiores nobis perspiciatis odit placeat dolorem beatae facilis labore nostrum, sunt voluptatibus laboriosam adipisci maxime quia! Voluptate, vel? Deleniti voluptatem iusto velit eius veritatis nemo, est non amet consectetur, aperiam, itaque ab aut officia necessitatibus ullam beatae doloribus. Iste est, nemo autem vero laboriosam veritatis deserunt dignissimos accusamus omnis voluptatum inventore ad eius facilis minus officia pariatur quae quam officiis! Provident deserunt cupiditate possimus vel excepturi.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dolorum labore. Atque vel, numquam, eos nihil quasi, temporibus ab in quam tenetur doloremque nobis aperiam fugit eaque maiores facere? Ducimus totam in, aperiam explicabo, repudiandae omnis accusantium error quidem, reiciendis expedita pariatur blanditiis? Iure perspiciatis reiciendis nihil eaque, exercitationem at. Mollitia debitis blanditiis, facere eum ut impedit sequi asperiores nobis perspiciatis odit placeat dolorem beatae facilis labore nostrum, sunt voluptatibus laboriosam adipisci maxime quia! Voluptate, vel? Deleniti voluptatem iusto velit eius veritatis nemo, est non amet consectetur, aperiam, itaque ab aut officia necessitatibus ullam beatae doloribus. Iste est, nemo autem vero laboriosam veritatis deserunt dignissimos accusamus omnis voluptatum inventore ad eius facilis minus officia pariatur quae quam officiis! Provident deserunt cupiditate possimus vel excepturi.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dolorum labore. Atque vel, numquam, eos nihil quasi, temporibus ab in quam tenetur doloremque nobis aperiam fugit eaque maiores facere? Ducimus totam in, aperiam explicabo, repudiandae omnis accusantium error quidem, reiciendis expedita pariatur blanditiis? Iure perspiciatis reiciendis nihil eaque, exercitationem at. Mollitia debitis blanditiis, facere eum ut impedit sequi asperiores nobis perspiciatis odit placeat dolorem beatae facilis labore nostrum, sunt voluptatibus laboriosam adipisci maxime quia! Voluptate, vel? Deleniti voluptatem iusto velit eius veritatis nemo, est non amet consectetur, aperiam, itaque ab aut officia necessitatibus ullam beatae doloribus. Iste est, nemo autem vero laboriosam veritatis deserunt dignissimos accusamus omnis voluptatum inventore ad eius facilis minus officia pariatur quae quam officiis! Provident deserunt cupiditate possimus vel excepturi.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dolorum labore. Atque vel, numquam, eos nihil quasi, temporibus ab in quam tenetur doloremque nobis aperiam fugit eaque maiores facere? Ducimus totam in, aperiam explicabo, repudiandae omnis accusantium error quidem, reiciendis expedita pariatur blanditiis? Iure perspiciatis reiciendis nihil eaque, exercitationem at. Mollitia debitis blanditiis, facere eum ut impedit sequi asperiores nobis perspiciatis odit placeat dolorem beatae facilis labore nostrum, sunt voluptatibus laboriosam adipisci maxime quia! Voluptate, vel? Deleniti voluptatem iusto velit eius veritatis nemo, est non amet consectetur, aperiam, itaque ab aut officia necessitatibus ullam beatae doloribus. Iste est, nemo autem vero laboriosam veritatis deserunt dignissimos accusamus omnis voluptatum inventore ad eius facilis minus officia pariatur quae quam officiis! Provident deserunt cupiditate possimus vel excepturi.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dolorum labore. Atque vel, numquam, eos nihil quasi, temporibus ab in quam tenetur doloremque nobis aperiam fugit eaque maiores facere? Ducimus totam in, aperiam explicabo, repudiandae omnis accusantium error quidem, reiciendis expedita pariatur blanditiis? Iure perspiciatis reiciendis nihil eaque, exercitationem at. Mollitia debitis blanditiis, facere eum ut impedit sequi asperiores nobis perspiciatis odit placeat dolorem beatae facilis labore nostrum, sunt voluptatibus laboriosam adipisci maxime quia! Voluptate, vel? Deleniti voluptatem iusto velit eius veritatis nemo, est non amet consectetur, aperiam, itaque ab aut officia necessitatibus ullam beatae doloribus. Iste est, nemo autem vero laboriosam veritatis deserunt dignissimos accusamus omnis voluptatum inventore ad eius facilis minus officia pariatur quae quam officiis! Provident deserunt cupiditate possimus vel excepturi.
                    </div>

                </div>
            </div>

        </>
    )
}
