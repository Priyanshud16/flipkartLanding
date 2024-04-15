import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Button
  } from '@chakra-ui/react'
  import './Modal.css'
  import React from 'react'



export function ElectronicsModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <div>
        <p style={{cursor:"pointer"}}  onMouseEnter={onOpen}>Electronics</p>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent mt={200} mr={400}>
            
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='0.5rem'>
                <div style={{display:"flex"}}>
                  <div>
                  <p>Audio</p>
                <br />
                <p>Electrinics GST Store</p>
                <br />
                 <p>Cameras & Accessories</p>
                 <br />
                 <p>Computer Peripherals</p>
                 <br />
                  <p>Gaming</p>
                  <br />
                   <p>Health & Personal Care</p>
                   <br />
                    <p>Laptop Accessories</p>
                    <br />
                     <p>Laptop and Desktop</p>
                     <br />
                        <p>Mobile Accessory</p>
                        <br />
                         <p>Powerbank</p>
                         <br />
                          <p>Storage</p>
                          <br />
                       <p>Smart Wearables</p>
                  </div>
                  <div id='ModalFaishonDiv' style={{marginLeft:"10px"}}>
                    <p> More in Men's top wear</p>
                     <br />
                    <p>All</p>
                    <br />
                <p>Bluetooth Headphones</p>
                <br />
                <p>Wired Headphones</p>
                <br />
                 <p>True Wireless Earbuds</p>
                 <br />
                  <p>Bluetooth Speakers</p>
                  <br />
                   <p>Soundbars</p>
                   <br />
                    <p>Home Theatres</p>
                    <br />
                    <p>TV Streaming Device</p>
                    <br />
                    <p>Remote Control</p>
                    <br />
                    <p>DTH Set top box</p>
                    <br />
                    <p>Headphones Pouch & Case Covers</p>
                  </div>
                </div>
                 
                   
              </Text>
             
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    )
  }

  export default BasicUsage



  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <div>
        <p style={{cursor:"pointer"}}  onMouseEnter={onOpen}>Fashion</p>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent mt={200} mr={400}>
            
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='0.5rem'>
                <div style={{display:"flex"}}>
                  <div>
                  <p>Men's Top Wear</p>
                <br />
                <p>Men's Bottom Wear</p>
                <br />
                 <p>Women Ethnic</p>
                 <br />
                 <p>Men's Footwear</p>
                 <br />
                  <p>Women's Footwear</p>
                  <br />
                   <p>Watches and Accessories</p>
                   <br />
                    <p>Women Western</p>
                    <br />
                     <p>Bags Suitcases & Luggage</p>
                     <br />
                        <p>Kids </p>
                        <br />
                         <p>Essentials</p>
                         <br />
                          <p>Winter</p>
                  </div>
                  <div id='ModalFaishonDiv' style={{marginLeft:"10px"}}>
                    <p> More in Men's top wear</p>
                     <br />
                    <p>All</p>
                    <br />
                <p>Men's T-shirts</p>
                <br />
                <p>Men's Casual Shirts</p>
                <br />
                 <p>Men's Formal Shirts</p>
                 <br />
                  <p>Men's Formal Kurtas</p>
                  <br />
                   <p>Men's Ethnics Sets</p>
                   <br />
                    <p>Men's Blazers</p>
                    <br />
                    <p>Men's RainCoat</p>
                    <br />
                    <p>Men's Wind Windcheaters</p>
                    <br />
                    <p>Men's Suit</p>
                    <br />
                    <p>Men's Fabrics</p>
                  </div>
                </div>
                 
                   
              </Text>
             
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    )
  }




  export function FurnitureModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <div>
        <p style={{cursor:"pointer"}}  onMouseEnter={onOpen}>Electronics</p>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent mt={200} mr={400}>
            
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='0.5rem'>
                <div style={{display:"flex"}}>
                  <div>
                  <p>Home Furnishings</p>
                <br />
                <p>Furniture Studio</p>
                <br />
                 <p>Living Room Furniture</p>
                 <br />
                 <p>Kitchen & Dining</p>
                 <br />
                  <p>Bedroom Furniture</p>
                  <br />
                   <p>Space Saving Furniture</p>
                   <br />
                    <p>Home Decor</p>
                    <br />
                     <p>Tools & Utility</p>
                     <br />
                        <p>Work Space Furniture</p>
                        <br />
                         <p>Kids Furniture</p>
                         <br />
                          <p>Lightings & Electricals</p>
                          <br />
                       <p>Cleaning & Bath</p>
                  </div>
                  <div id='ModalFaishonDiv' style={{marginLeft:"10px"}}>
                    <p> More in Men's top wear</p>
                     <br />
                    <p>All</p>
                    <br />
                <p>Bed Linens</p>
                <br />
                <p>Bed Linens</p>
                <br />
                 <p>Bedsheets</p>
                 <br />
                  <p>Blankets</p>
                  <br />
                   <p>Curtains & Accessories</p>
                   <br />
                    <p>Bath linen</p>
                    <br />
                    <p>Floor coverings</p>
                    <br />
                    <p>Covers & protectors</p>
                    <br />
                    <p>Cushions & Pillows</p>
                    <br />
                    <p>Kitchen Linen Sets</p>
                    <br />
                    <p>Sofa and curtain fabrics</p>
                  </div>
                </div>
                 
                   
              </Text>
             
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    )
  }


  
export function ToysModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <p style={{cursor:"pointer"}}  onMouseEnter={onOpen}>Beauty,Toys&More</p>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent mt={200} ml={700}>
          
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='0.5rem'>
              <div style={{display:"flex"}}>
                <div>
                <p>Beauty & Personal Care</p>
              <br />
              <p>Men's Grooming</p>
              <br />
               <p>Food & Drinks</p>
               <br />
               <p>Nutrition & Health Care</p>
               <br />
                <p>Baby Care</p>
                <br />
                 <p>Toys & School Supplies</p>
                 <br />
                  <p>Sports & Fitness</p>
                  <br />
                   <p>Books</p>
                   <br />
                      <p>Music</p>
                      <br />
                       <p>Stationery & Office Supplies</p>
                       <br />
                        <p>Auto Accessories</p>
                        <br />
                     <p>Safty & Hygine Essential</p>
                </div>
                <div id='ModalFaishonDiv' style={{marginLeft:"10px"}}>
                  <p> More in Beauty & Personal Care</p>
                   <br />
                  <p>View All</p>
                  <br />
              <p>Bath & Oral Care</p>
              <br />
              <p>Personal Hypgine</p>
              <br />
               <p>Eye Makeup</p>
               <br />
                <p>Face Makeup</p>
                <br />
                 <p>Lip Makeup</p>
                 <br />
                  <p>Hair Care</p>
                  <br />
                  <p>Bath Essentials</p>
                  <br />
                  <p>Women's Personal Hygiene</p>
                  <br />
                  <p>Body & Skin Care</p>
                  <br />
                  <p>Top Brand Deals</p>
                </div>
              </div>
               
                 
            </Text>
           
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}


export function TwoWhellerModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <p style={{cursor:"pointer"}} onMouseEnter={onOpen} >Beauty, Toys & More</p>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent mt={200} ml={1200} w={200}>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='0.5rem'>
              <div>
                <p>Petrol Vehicles</p>
                <p>Electric Vehicles</p>
              </div>  
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
