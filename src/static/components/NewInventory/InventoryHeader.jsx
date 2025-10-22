import React, { useState } from 'react';
import "./InventoryHeader.css"
 import BoomTruckElf from '/src/assets/media/trucks/BoomTruckElf.74da8683cd0901f3d1d7.jpg'
 import CargoTruck from '/src/assets/media/trucks/CargoTruck.cd59ac59a76d31117d86.jpg'
 import ClosedVan10w from '/src/assets/media/trucks/ClosedVan10w.bbaf0a8e278d7131539a.jpg'
 import ClosedVanElf from '/src/assets/media/trucks/ClosedVanElf.1e34f9e38aa270bcd15b.jpg'
 import ClosedVanFwd from '/src/assets/media/trucks/ClosedVanFwd.0eefc548e291ab599ebb.jpg'
 import DropsideElf from '/src/assets/media/trucks/DropsideElf.3e6a56206759e9b1dedd.jpg'
 import DropsideFwd from '/src/assets/media/trucks/DropsideFwd.6faa03df42fd9a9ed555.jpg'
 import DumpTruck10w from '/src/assets/media/trucks/DumpTruck10w.aecea558be21db5a1638.jpg'
 import DumpTruckFwd from '/src/assets/media/trucks/DumpTruckFwd.8a827fcb629d1a7e0831.jpg'
 import FbType from '/src/assets/media/trucks/FbType.57a71b264f173edf337a.jpg'
 import FreezerVanElf from '/src/assets/media/trucks/FreezerVanElf.b03b392f281c34b49caa.jpg'
 import FreezerVanFwd from '/src/assets/media/trucks/FreezerVanFwd.5e79352c31422a4727fb.jpg'
 import GarbageCompactorElf from '/src/assets/media/trucks/GarbageCompactorElf.11de10a8c26c1487ced1.jpg'
 import ManlifterElf from '/src/assets/media/trucks/ManlifterElf.99342373b634e2967036.jpg'
 import MiniDumpElf from '/src/assets/media/trucks/MiniDumpElf.3fcb6277048a86b404c4.jpg'
 import TowTruckElf from '/src/assets/media/trucks/TowTruckElf.813274c4fe1561874ec6.jpg'
 import TractorHead from '/src/assets/media/trucks/TractorHead.b7d65cad4a654ff0a386.jpg'
 import WaterTanker from '/src/assets/media/trucks/WaterTanker.8c8d322e72a23f568303.jpg'
 import WingVan10w from '/src/assets/media/trucks/WingVan10w.5653032ddd9cd63121d7.jpg'
 import WingVanElf from '/src/assets/media/trucks/WingVanElf.3a85355d5f2dcd60b411.jpg'
 import WingVanFwd from '/src/assets/media/trucks/WingVanFwd.b5c426708e038d1a50c2.jpg'
 import BoomTruckElfIcon from '/src/assets/media/icons/BoomTruckElfIcon.jpg'
 import CargoTruckIcon from '/src/assets/media/icons/CargoTruckIcon.jpg'
 import ClosedVan10wIcon from '/src/assets/media/icons/ClosedVan10wIcon.jpg'
 import ClosedVanElfIcon from '/src/assets/media/icons/ClosedVanElfIcon.jpg'
 import ClosedVanFwdIcon from '/src/assets/media/icons/ClosedVanFwdIcon.jpg'
 import DropsideElfIcon from '/src/assets/media/icons/DropsideElfIcon.jpg'
 import DropsideFwdIcon from '/src/assets/media/icons/DropsideFwdIcon.jpg'
 import DumpTruck10wIcon from '/src/assets/media/icons/DumpTruck10wIcon.jpg'
 import DumpTruckFwdIcon from '/src/assets/media/icons/DumpTruckFwdIcon.jpg'
 import FbTypeIcon from '/src/assets/media/icons/FbTypeIcon.jpg'
 import FreezerVanElfIcon from '/src/assets/media/icons/FreezerVanElfIcon.jpg'
 import FreezerVanFwdIcon from '/src/assets/media/icons/FreezerVanFwdIcon.jpg'
 import GarbageCompactorElfIcon from '/src/assets/media/icons/GarbageCompactorElfIcon.jpg'
 import ManlifterElfIcon from '/src/assets/media/icons/ManlifterElfIcon.jpg'
 import MiniDumpElfIcon from '/src/assets/media/icons/MiniDumpElfIcon.jpg'
 import TowTruckElfIcon from '/src/assets/media/icons/TowTruckElfIcon.jpg'
 import TractorHeadIcon from '/src/assets/media/icons/TractorHeadIcon.jpg'
 import WaterTankerIcon from '/src/assets/media/icons/WaterTankerIcon.jpg'
 import WingVan10wIcon from '/src/assets/media/icons/WingVan10wIcon.jpg'
 import WingVanElfIcon from '/src/assets/media/icons/WingVanElfIcon.jpg'
 import WingVanFwdIcon from '/src/assets/media/icons/WingVanFwdIcon.jpg'  
 import ImageGallery from 'react-image-gallery';
 import 'react-image-gallery/styles/css/image-gallery.css';
 import buttonElf from '/src/assets/media/buttonElf.b82d068f22711d82e455.png'
 import buttonForward from '/src/assets/media/buttonForward.92971d3f261af45a7cc3.png'
 import buttonGiga from '/src/assets/media/buttonGiga.03387d589deaa17513bd.png'

const Header = () => {


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [truckMake, setTruckMake] = useState('');
  const [truckMake1, setTruckMake1] = useState('');
  const [truckMake2, setTruckMake2] = useState('');

const handleTruckMakeTriggerButton = (nameMake) => {
  setTruckMake(prev => (prev === nameMake ? '' : nameMake));
  // setTruckMake(nameMake);
  //   console.log(nameMake, 'setTruckMake');
};
  const handleTruckMakeTriggerButton1 = (nameMake1) => {
    setTruckMake1(prev => (prev === nameMake1 ? '' : nameMake1));
    // setTruckMake1(nameMake1);
    // console.log(nameMake1, 'setTruckMake1'); 
  };

  const handleTruckMakeTriggerButton2 = (nameMake2) => {
    setTruckMake2(prev => (prev === nameMake2 ? '' : nameMake2));
    // setTruckMake2(nameMake2);
    // console.log(nameMake2, 'setTruckMake2'); 
  };


  const images = [
    {
      original: BoomTruckElf ,
      thumbnail: BoomTruckElf,
      description: 'Boom Truck Elf',
      brandUnit: 'Isuzu Elf',
      icon: BoomTruckElfIcon,
      Details:'The Boom Truck Elf is a variant of the Elf series, designed for heavy-duty applications. With a rugged body and powerful engine, the Boom Truck Elf is equipped with a hydraulic boom crane, allowing it to lift and move heavy loads with precision and ease. Its compact size makes it ideal for navigating tight spaces, while its powerful engine provides sufficient torque for demanding tasks. With a range of attachments available, including cranes, winches, and hooks, the Boom Truck Elf is a reliable and versatile workhorse for various industries, from construction to manufacturing.',
      originalHeight:600,
      basePrice: 700000,
    },
    {
      original: ClosedVanElf,
      thumbnail: ClosedVanElf,
      description: 'Closed Van Elf',
      brandUnit: 'Isuzu Elf',
      icon: ClosedVanElfIcon,
      Details:'The Isuzu Closed Van Elf is a reliable and versatile enclosed van designed for work or passenger transport. With its compact size and agile handling, the Elf is perfect for navigating city streets and tight job sites, while its spacious interior offers ample room for equipment, tools, or passengers. The Closed Van Elf features a robust and fuel-efficient diesel engine, along with a range of convenient features like power windows, air conditioning, and Bluetooth connectivity. With a maximum load volume of 1,900 liters and a payload capacity of up to 1,200 kg, the Elf is an ideal choice for industries such as maintenance, repair, and delivery services, as well as small businesses and entrepreneurs.',
      originalHeight:600,
      basePrice: 725000,
    },
    {
      original: DropsideElf,
      thumbnail: DropsideElf,
      description: 'Dropside Elf',
      brandUnit: 'Isuzu Elf',
      icon: DropsideElfIcon,
      Details:'The Isuzu Dropside Elf is a versatile and rugged work truck designed for heavy-duty applications. With its dropside body, it offers a large open platform for carrying bulk materials, equipment, or tools, making it ideal for industries such as construction, landscaping, and agriculture. The Dropside Elf features a powerful diesel engine, a robust suspension system, and a maximum load capacity of 1,800 kg, ensuring reliable performance and durability in demanding work environments. Its dropside body can be customized with options like side rails, tie-downs, and shelving to meet specific needs, making it a highly versatile and efficient work vehicle.',
      originalHeight:600,
      basePrice: 750000,
    },
    {
      original: FreezerVanElf,
      thumbnail: FreezerVanElf,
      description: 'Freezer Van Elf',
      brandUnit: 'Isuzu Elf',
      icon: FreezerVanElfIcon,
      Details:`The Isuzu Freezer Van Elf is a purpose-built refrigerated van designed for temperature-controlled transportation and storage of perishable goods. Equipped with a powerful 2.5L diesel engine, this vehicle features a spacious interior with a large cargo capacity, making it ideal for delivering fresh produce, dairy products, and pharmaceuticals. The van's refrigeration system is designed to maintain precise temperature control, ensuring that goods are kept at the optimal temperature during transport. With its durable construction, reliable insulation, and advanced refrigeration technology, the Freezer Van Elf provides a consistent and controlled environment for the transportation of sensitive goods.`,
      originalHeight:600,
      basePrice: 775000,
    },
    {
      original: GarbageCompactorElf,
      thumbnail: GarbageCompactorElf,
      description: 'Garbage Compactor Elf',
      brandUnit: 'Isuzu Elf',
      icon: GarbageCompactorElfIcon,
      Details:'The Isuzu Garbage Compactor Elf is a purpose-built refuse collection vehicle designed for efficient and effective waste management. Based on the popular Elf van platform, this compact and maneuverable truck features a powerful 2.5L diesel engine and a ruggedized body design that can withstand the rigors of daily refuse collection. The compactor body is designed to reduce waste volume by up to 75%, allowing for more collections per day and reduced fuel consumption. With its compact size and tight turning radius, the Garbage Compactor Elf is ideal for navigating narrow streets and alleys, making it a popular choice for municipalities, waste management companies, and contractors. Its durable construction and low maintenance design ensure reliable performance and reduced downtime.',
      originalHeight:600,
      basePrice: 800000,
    },
    {
      original: ManlifterElf,
      thumbnail: ManlifterElf,
      description: 'Manlifter Elf',
      brandUnit: 'Isuzu Elf',
      icon: ManlifterElfIcon,
      Details:'The Isuzu Manlifter Elf is a versatile and reliable light-duty truck designed for heavy-duty applications such as construction, landscaping, and maintenance work. Built on the popular Elf van platform, this vehicle features a powerful 2.5L diesel engine and a robust 3-tonne lifting capacity, making it ideal for lifting and transporting heavy equipment, materials, and tools. The Manlifter Elf also boasts a range of features such as a tilting cab for easy maintenance, a durable ladder rack for convenient storage, and a wide range of transmission options to suit different operating environments. Its compact size and agility make it perfect for navigating tight job sites, while its rugged construction ensures reliable performance and durability in demanding conditions.',
      originalHeight:600,
      basePrice: 825000,
    },
    {
      original: MiniDumpElf,
      thumbnail: MiniDumpElf,
      description: 'Mini Dump Elf',
      brandUnit: 'Isuzu Elf',
      icon: MiniDumpElfIcon,
      Details:'The Isuzu Mini Dump Elf is a compact and versatile dump truck designed for small to medium-sized construction, landscaping, and agricultural applications. Based on the popular Elf van platform, this mini dump truck features a 1.5-tonne payload capacity and a compact dimensions of 4.95m in length and 1.85m in height, making it perfect for navigating tight job sites and narrow streets. The Mini Dump Elf is equipped with a hydraulic dump system and a tilting bed for easy dumping, as well as a range of transmission options to suit different operating conditions. Its lightweight design and agile handling make it ideal for transporting small loads of soil, aggregates, or other materials around construction sites, farms, or residential areas.',
      originalHeight:600,
      basePrice: 850000,
    },
    {
      original: TowTruckElf,
      thumbnail: TowTruckElf,
      description: 'Tow Truck Elf',
      brandUnit: 'Isuzu Elf',
      icon: TowTruckElfIcon,
      Details:'The Isuzu Tow Truck Elf is a reliable and versatile recovery vehicle designed for towing and transporting light to medium-sized vehicles, equipment, and materials. Built on the popular Elf van platform, this tow truck features a powerful 2.5L diesel engine, a 3-tonne towing capacity, and a range of transmission options to suit different operating conditions. The Tow Truck Elf is equipped with a hydraulic winch system, a boom arm with lifting capacity of up to 1.5 tons, and a steel tray for carrying equipment or supplies. Its compact size and maneuverability make it perfect for navigating tight spaces and narrow roads, while its rugged construction ensures reliable performance and durability in demanding recovery situations.',
      originalHeight:600,
      basePrice: 875000,
    },
    {
      original: WingVanElf,
      thumbnail: WingVanElf,
      description: 'Wing Van Elf',
      brandUnit: 'Isuzu Elf',
      icon: WingVanElfIcon,
      Details:'The Isuzu Wing Van Elf is a compact and agile light-duty van designed for urban delivery and logistics applications. With a payload capacity of 1 tonne and a gross vehicle mass of 3,500 kg, this van is ideal for navigating tight city streets and busy traffic. The Wing Van Elf features a spacious cargo area with sliding side doors and a rear lift-up door, providing ample storage space for goods and equipment. Powered by a fuel-efficient diesel engine, this van is perfect for daily delivery runs, catering services, and other applications where maneuverability and ease of use are essential. With its compact size and agile handling, the Wing Van Elf is an ideal choice for urban operations.',
      originalHeight:600,
      basePrice: 900000,
    },
    {
      original: ClosedVanFwd,
      thumbnail: ClosedVanFwd,
      description: 'Closed Van Fwd',
      brandUnit: 'Isuzu Forward',
      icon: ClosedVanFwdIcon,
      Details:'The Isuzu Closed Van FWD is a rugged and reliable enclosed van designed for work or passenger transport. With its forward-mounted engine and front-wheel drive, the FWD model offers improved traction and stability on uneven terrain, making it perfect for off-road or rough-road applications. The spacious interior features ample room for equipment, tools, or passengers, and can be customized with options like shelving, cabinets, and tie-downs to meet specific needs. With a maximum load volume of 2,300 liters and a payload capacity of up to 1,500 kg, the Closed Van FWD is an ideal choice for industries such as construction, agriculture, and emergency services that require a reliable and capable work vehicle.',
      originalHeight:600,
      basePrice: 1000000,
    },
    {
      original: DropsideFwd,
      thumbnail: DropsideFwd,
      description: 'Dropside Fwd',
      brandUnit: 'Isuzu Forward',
      icon: DropsideFwdIcon,
      Details:'The Isuzu Dropside FWD is a versatile and rugged work truck designed for heavy-duty applications. With its forward-mounted engine and front-wheel drive, the FWD model provides exceptional traction and stability on uneven terrain, making it perfect for construction sites, agricultural operations, and rural deliveries. The dropside body features a 2.5-ton payload capacity and a bed length of 4.2 meters, providing ample space for hauling heavy equipment, tools, or materials. The truck also boasts a durable and rust-resistant construction, making it ideal for harsh environments and demanding workloads.',
      originalHeight:600,
      basePrice: 1200000,
    },
    {
      original: DumpTruckFwd,
      thumbnail: DumpTruckFwd,
      description: 'Dump Truck Fwd',
      brandUnit: 'Isuzu Forward',
      icon: DumpTruckFwdIcon,
      Details:'The Isuzu Dump Truck FWD is a versatile and reliable work truck designed for forward-thinking operations. With its front-wheel drive configuration, it provides exceptional traction and stability on uneven terrain, making it perfect for construction sites, quarries, and rural areas. The dump truck features a powerful 3.0L engine producing 120 horsepower and 260 Nm of torque, and a payload capacity of 10 tons, with a bed length of 5.5 meters. Its hydraulically operated dumping system makes quick work of unloading heavy materials, while its durable construction and rust-resistant components ensure reliability and longevity in harsh environments.',
      originalHeight:600,
      basePrice: 1400000,
    },
    {
      original: FreezerVanFwd,
      thumbnail: FreezerVanFwd,
      description: 'Freezer Van Fwd',
      brandUnit: 'Isuzu Forward',
      icon: FreezerVanFwdIcon,
      Details:'The Isuzu Freezer Van FWD is a rugged and reliable refrigerated van designed for harsh environments and demanding applications. Built on a forward-engine, rear-wheel drive (FWD) platform, this vehicle features a powerful 3.0L engine, delivering 120 horsepower and 260 Nm of torque. With its robust construction and heavy-duty suspension, the Freezer Van FWD can withstand rough terrain and extreme weather conditions, making it an ideal choice for outdoor events, construction sites, and rural areas. Its advanced refrigeration system ensures precise temperature control, keeping goods at the optimal temperature for extended periods. Perfect for delivering perishable goods, medical supplies, or even catering services, the Freezer Van FWD is designed to perform in the most challenging environments.',
      originalHeight:600,
      basePrice: 1600000,
    },
    {
      original: WingVanFwd,
      thumbnail: WingVanFwd,
      description: 'Wing Van Fwd',
      brandUnit: 'Isuzu Forward',
      icon: WingVanFwdIcon,
      Details:'The Isuzu Wing Van FWD is a versatile and reliable light-duty van designed for urban delivery and logistics applications. With a payload capacity of 1.2 tonnes and a gross vehicle mass of 3,800 kg, this van offers a spacious cargo area with sliding side doors and a rear lift-up door, providing ample storage space for goods and equipment. Equipped with a range of advanced features such as a powerful diesel engine, anti-lock braking system, and adjustable suspension, the Wing Van FWD provides a smooth ride and excellent handling on both urban streets and rural roads. Perfect for daily delivery runs, construction sites, and other demanding applications, this van is known for its reliability, fuel efficiency, and durability.',
      originalHeight:600,
      basePrice: 1800000, 
    },
    {
      original: FbType,
      thumbnail: FbType,
      description: 'Fb Type',
      brandUnit: 'Isuzu Forward',
      icon: FbTypeIcon,
Details: `The Isuzu FB Type is a dependable and versatile pickup truck built for a variety of heavy-duty tasks. Powered by a reliable 3.0-liter diesel engine that delivers 120 horsepower, it offers a strong balance of power and efficiency. Its exterior features a straightforward, practical design with a prominent grille, flared fenders, and 16-inch steel wheels, emphasizing durability and utility. Inside, the cabin is designed for practicality, with vinyl seats and a sturdy dashboard that can withstand daily work demands. With a maximum payload capacity of approximately 1,220 kg and a towing capacity of up to 3,000 kg, the FB Type is suitable for farmers, construction workers, and small business operators seeking a dependable workhorse.`,
      originalHeight:600,
      basePrice: 2000000,
    },
    {
      original: CargoTruck,
      thumbnail: CargoTruck,
      description: 'Cargo Truck',
      brandUnit: 'Isuzu Giga',
      icon: CargoTruckIcon,
      Details:'The Isuzu Cargo Truck is a reliable and versatile workhorse designed to handle a variety of cargo hauling needs. With a robust and durable construction, this truck features a spacious cargo area with ample space for large or heavy items, as well as optional features like side rails, tie-down hooks, and retractable partitions to keep cargo secure. Powered by a range of powerful and fuel-efficient diesel engines, the Cargo Truck offers excellent towing capacity and payload capacity, making it ideal for industries such as construction, manufacturing, and logistics. With its comfortable cabin and advanced features like air conditioning and Bluetooth connectivity, drivers will appreciate the ride and amenities while tackling even the toughest hauling tasks.',
      originalHeight:600,
      basePrice: 1500000,
    },
    {
      original: ClosedVan10w,
      thumbnail: ClosedVan10w,
      description: 'Closed Van 10w',
      brandUnit: 'Isuzu Giga',
      icon: ClosedVan10wIcon,
      Details:'The Isuzu Closed Van 10W is a dependable and versatile enclosed van designed for work or passenger transport. With its rugged and durable construction, this van features a spacious interior with ample room for equipment, tools, or passengers, and can be customized with options like shelving, cabinets, and tie-downs to meet specific needs. The 10W model offers a generous payload capacity and a maximum load volume of 2,500 liters, making it an ideal choice for industries such as telecommunications, electrical contracting, and delivery services. With its powerful and fuel-efficient diesel engine, the Closed Van 10W provides reliable transportation and performance on demanding jobsites or daily routes.',
      originalHeight:600,
      basePrice: 1800000,
    },
    {
      original: DumpTruck10w,
      thumbnail: DumpTruck10w,
      description: 'Dump Truck 10w',
      brandUnit: 'Isuzu Giga',
      Details:`The Isuzu Dump Truck 10W is a powerful and reliable workhorse designed for heavy-duty applications. With its powerful 3.0L engine producing 120 horsepower and 260 Nm of torque, it has the capacity to haul heavy loads with ease. The 10-ton payload capacity and 5.5-meter bed length provide ample space for hauling large volumes of material, making it ideal for construction sites, quarries, and mining operations. The dump truck's rugged construction and durable components ensure reliability and durability in harsh environments, while its easy-to-use controls and hydraulically operated dumping system make it a breeze to operate.`,
      originalHeight:600,
      basePrice: 2100000,
    },
    {
      original: TractorHead,
      thumbnail: TractorHead,
      description: 'Tractor Head',
      brandUnit: 'Isuzu Giga',
      icon: TractorHeadIcon,
      Details:'The Isuzu Tractor Head is a heavy-duty, high-performance tractor unit designed for hauling large payloads and trailers across various terrain. Built on a robust chassis with a powerful 6.9L diesel engine, this tractor head features a Gross Combination Mass (GCM) rating of up to 25 tonnes, making it suitable for hauling heavy trailers, cargo containers, and oversized loads. Equipped with a range of transmission options, including automatic and manual transmissions, the Tractor Head offers exceptional acceleration and braking performance, while its advanced suspension system provides a smooth ride and improved stability. With its rugged construction and durable design, the Isuzu Tractor Head is an ideal choice for demanding applications such as construction, mining, and long-haul transport operations.',
      originalHeight:600,
      basePrice: 2400000,
    },
    {
      original: WaterTanker,
      thumbnail: WaterTanker,
      description: 'Water Tanker',
      brandUnit: 'Isuzu Giga',
      icon: WaterTankerIcon,
      Details:'The Isuzu Water Tanker is a purpose-built vehicle designed for carrying and dispensing water for firefighting, disaster relief, and various industrial applications. Equipped with a large 12,000-liter water tank, this tanker features a powerful diesel engine, a robust transmission, and a four-wheel drive system for improved traction and stability. The tanker is equipped with a range of features such as a high-pressure pump, hoses, and nozzles, allowing it to efficiently distribute water to the desired area. With its durable construction and reliable performance, the Isuzu Water Tanker is an essential asset for fire brigades, emergency services, and companies that require a reliable and efficient water supply system.',
      originalHeight:600,
      basePrice: 2700000,
    },
    {
      original: WingVan10w,
      thumbnail: WingVan10w,
      description: 'Wing Van 10w',
      brandUnit: 'Isuzu Giga',
      icon: WingVan10wIcon,
      Details:'The Isuzu Wing Van 10W is a versatile and reliable light-duty truck designed for urban delivery and logistics applications. Featuring a compact and maneuverable body, this van offers a generous payload capacity of 1 tonne and a gross vehicle mass of 4,500 kg. Equipped with a range of features such as a spacious cargo area, sliding side doors, and a rear lift-up door, the Wing Van 10W provides ample storage space for goods and equipment. Powered by a fuel-efficient diesel engine, this van is perfect for daily delivery runs, construction sites, and other demanding applications where reliability and ease of use are essential.',
      originalHeight:600,
      basePrice: 3000000,
    },

  ];

 const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setGalleryVisible(true);
    console.log('currentImageIndex:', currentImageIndex);
  };


  const handleSlide = index => {
    setCurrentImageIndex(index);
    console.log('Current image index:', index);
    console.log(images[currentImageIndex]?.Details);
  };


  const handleCloseGallery = () => {
    setGalleryVisible(false);
  };


  return (
<div  id="inventory" className='parallaxInventory'>
{galleryVisible ? (
        <div  className="InventoryHeaderImageContainer" >
          <div className="InventoryHeaderImageContainerButton">
                <button onClick={handleCloseGallery}>X</button>
              </div>
              <ImageGallery
  items={images}
  showThumbnails={true}
  showPlayButton={true}
  startIndex={currentImageIndex}
  onSlide={handleSlide}
  onClose={handleCloseGallery}
  additionalClass="InventoryHeaderImageGallery"
>
  
</ImageGallery>
<h1 className='inventoryHeaderImageGalleryDetailsContainer'>
  {images[currentImageIndex]?.Details}
</h1>
        </div>
      ) : (  
          <><div className='inventoryContainer'>
            <h1 className='inventoryHeader'>UNITS STOCK</h1>
            <p className='inventoryDetails'>THOUSANDS OF HEAVY-DUTY TRUCKS ARE LINING UP TO CARRY YOUR LOAD.</p>
          </div>
          <div className="inventoryCurveContainer">

       
          {/* <div className='inventoryMakeButtonContainer' onClick={() => handleTruckMakeTriggerButton('buttonElfName')}>
              <img src={buttonElf} alt='buttonElfImage' className='inventoryMakeImage'/>
            </div> */}

<div className='inventoryMakeButtonContainer' 
     onClick={() => handleTruckMakeTriggerButton('buttonElfName')}>
  <img
    src={buttonElf}
    alt='buttonElfImage'
    className='inventoryMakeImage'
  />
</div>


            <table className='inventoryTruckTable'>
        <tbody>
        
        {truckMake === 'buttonElfName' && (
          <>
          
          <tr>
            {images.slice(0, 3).map((image, index) => (
              <td key={index}>
                <img className='inventoryTruckStyle' src={image.icon} alt={image.description} 
                onClick={() => handleImageClick(index)} />
                <h1 className='inventoryTruckName'>{image.description}</h1>
              </td>
            ))}
          </tr>
          <tr>
            {images.slice(3, 6).map((image, index) => (
              <td key={index}>
                <img className='inventoryTruckStyle' src={image.icon} alt={image.description} 
                onClick={() => handleImageClick(index + 3)} />
                <h1 className='inventoryTruckName'>{image.description}</h1>
              </td>
            ))}
          </tr>
          <tr>
            {images.slice(6, 9).map((image, index) => (
              <td key={index}>
                <img className='inventoryTruckStyle' src={image.icon} alt={image.description} 
                onClick={() => handleImageClick(index + 6)} />
                <h1 className='inventoryTruckName'>{image.description}</h1>
              </td>
            ))}
          </tr>
          </>
      )}
  </tbody>
  </table>
          {/* <div className='inventoryMakeButtonContainer' onClick={() => handleTruckMakeTriggerButton('buttonForwardName')}>
              <img src={buttonForward} alt='buttonForwardImage' className='inventoryMakeImage'/>
            </div> */}
  <div className='inventoryMakeButtonContainer' 
   onClick={() => handleTruckMakeTriggerButton1('buttonForwardName')}
   >
  <img
    src={buttonForward}
    alt='buttonForwardImage'
    className='inventoryMakeImage'
  />
</div>

            <table className='inventoryTruckTable'>
        <tbody>
          {truckMake1 === 'buttonForwardName' && (
          <>
          <tr>
            {images.slice(9, 12).map((image, index) => (
              <td key={index}>
                <img className='inventoryTruckStyle' src={image.thumbnail} alt={image.description} 
                onClick={() => handleImageClick(index + 9)} />
                <h1 className='inventoryTruckName'>{image.description}</h1>
              </td>
            ))}
          </tr>
          <tr>
            {images.slice(12, 15).map((image, index) => (
              <td key={index}>
                <img className='inventoryTruckStyle' src={image.thumbnail} alt={image.description} 
                onClick={() => handleImageClick(index + 12)} />
                <h1 className='inventoryTruckName'>{image.description}</h1>
              </td>
            ))}
          </tr>
          </>
        )}
         
         </tbody>
         </table>

          {/* <div className='inventoryMakeButtonContainer' onClick={() => handleTruckMakeTriggerButton('buttonGigaName')}>
              <img src={buttonGiga} alt='buttonGigaImage' className='inventoryMakeImage'/>
            </div> */}

            <div className='inventoryMakeButtonContainer' 
             onClick={() => handleTruckMakeTriggerButton2('buttonGigaName')}>
  <img
    src={buttonGiga}
    alt='buttonGigaImage'
    className='inventoryMakeImage'
  />
</div>



            <table className='inventoryTruckTable'>
            <tbody>
          {truckMake2 === 'buttonGigaName' && (
          <>
          <tr>
            {images.slice(15, 18).map((image, index) => (
              <td key={index}>
                <img className='inventoryTruckStyle' src={image.thumbnail} alt={image.description} 
                onClick={() => handleImageClick(index + 15)} />
                <h1 className='inventoryTruckName'>{image.description}</h1>
              </td>
            ))}
            </tr>
             <tr>
            {images.slice(18, 21).map((image, index) => (
              <td key={index}>
                <img className='inventoryTruckStyle' src={image.thumbnail} alt={image.description}
                 onClick={() => handleImageClick(index + 18)} />
                <h1 className='inventoryTruckName'>{image.description}</h1>
              </td>
            ))}
          </tr>
          <tr>
            {images.slice(21, 22).map((image, index) => (
              <td key={index}>
                <img className='inventoryTruckStyle' src={image.thumbnail} alt={image.description}
                 onClick={() => handleImageClick(index + 21)} />
                <h1 className='inventoryTruckName'>{image.description}</h1>
              </td>
            ))}
          </tr>
          </>
        )}
        </tbody>
      </table>
      </div>
            </>
)}
</div>

  )
}

export default Header;