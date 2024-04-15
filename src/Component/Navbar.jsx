import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import './Navbar.css'
function Navbar() {
  return (
    <>
    <div id='NavbarContainer'>
     <div id='NavbarLogo'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" /></div>
     <div id='searchBar'><SearchIcon mt={2} mr={10} ml={5} boxSize={5}/>  <Input variant='unstyled' placeholder='Search for Products,Brands and More' /></div>
     <div id='NavbarLogin'>
     <Accordion allowToggle w={300} mt={15}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
            <div  style={{display:"flex"}} className='loginHover' >
        <img className='loginHover'  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"/> <div style={{marginLeft:"15px"}}>Login</div>
        </div>
        </Box>
        <AccordionIcon />
      </ AccordionButton>
    </h2>
    <AccordionPanel pb={4}  >
     <div id='AccordianNavbar'>
     <div style={{display:"flex"}}><div>New Customer?</div> <div style={{marginLeft:"50px",color:"blue"}}>Sign up</div></div>
     <hr/>
     <br/>
     <div style={{display:"flex"}}><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"/> <div style={{marginLeft:"10px"}}>My Profile</div></div>
     <br/>
     <div style={{display:"flex"}}>
     <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg"/>
     <div style={{marginLeft:"10px"}}>Flipkart Plus Zone</div>
     </div>
     <br/>
     <div style={{display:"flex"}}>
     <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg"/>
     <div style={{marginLeft:"10px"}}>Orders</div>
     </div>
     
     <br/>
     <div style={{display:"flex"}}>
     <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="/>
     <div style={{marginLeft:"10px"}}>Wish List</div>
     </div>
     <br/>
     <div style={{display:"flex"}}>
     <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg"/>
     <div style={{marginLeft:"10px"}}>Reward</div>
     </div>
    <br/>
    <div style={{display:"flex"}}>
    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg"/>
    <div style={{marginLeft:"10px"}}>Gift Cards</div>
    </div>
     </div>
    </AccordionPanel>
  </AccordionItem>

</Accordion>
     </div>
     <div className='navbarCart' style={{display:"flex",marginTop:"15px"}}>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" />
        <div>Cart</div>
     </div>
     <div style={{display:"flex",marginTop:"15px"}} className='navbarCart'>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" />
        <div>Become a seller</div>
     </div>
     <div>:</div>
    </div>
    
    </>
  )
}

export default Navbar