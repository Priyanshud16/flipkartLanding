import React from 'react'
import './Categories.css'
import BasicUsage, { ElectronicsModal, FurnitureModal, ToysModal, TwoWhellerModal } from './Modal'
function Categories() {
  return (
    <div id='categoriesContainer' >
      <div>
        <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="" />
        <p>Grocery</p>
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="" />
        <p>Mobiles</p>
      </div>
      <div>
      <img width="75" height="75" src="https://img.icons8.com/color/48/try-on.png" alt="try-on"/>
         
        <div>
          
          <BasicUsage/>
          </div>
      </div>
      <div>
      <img width="75" height="75" src="https://img.icons8.com/bubbles/50/tv.png" alt="tv"/>
        <div>
          <ElectronicsModal/>
        </div>
      </div>
      <div>
      <img width="75" height="75" src="https://img.icons8.com/color-glass/48/furniture.png" alt="furniture"/>
        <div>
          <FurnitureModal/>
        </div>
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt="" />
        <p>Appliances</p>
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" />
        <p>Travel</p>
      </div>
      <div>
      <img width="65" height="65" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-toys-merchandising-flaticons-lineal-color-flat-icons.png" alt="external-toys-merchandising-flaticons-lineal-color-flat-icons"/>
        <div style={{marginTop:"10px"}}>
          <ToysModal/>
        </div>
      </div>
      <div>
      <img width="75" height="75" src="https://img.icons8.com/external-filled-outline-icons-pause-08/64/external-bike-transportation-filled-outline-icons-pause-08.png" alt="external-bike-transportation-filled-outline-icons-pause-08"/>
       <div>
        <TwoWhellerModal/>
       </div>
      </div>
    </div>
  )
}

export default Categories