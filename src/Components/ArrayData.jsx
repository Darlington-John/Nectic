import React from 'react';
import BlueGreyImg from './../Assets/Images/BlueGrey.png';
import BrownImg from './../Assets/Images/Brown.png';
import GreyImg from './../Assets/Images/Grey.png';
import PinkImg from './../Assets/Images/Pink.png';
import SeaBlueImg from './../Assets/Images/SeaBlue.png';
import GreyBlueTopImg from './../Assets/Images/GreyBlueTop.png';
import DarkKhakiImg from './../Assets/Images/DarkKhaki.png';
import SageGreenTopImg from './../Assets/Images/SageGreenTop.png';
import BlackTopImg from './../Assets/Images/BlackTop.png';
import StripedBlueImg from './../Assets/Images/StripedBlue.png';
import MaroonTopImg from './../Assets/Images/MaroonTop.png';
import PurpleImg from './../Assets/Images/Purple.png';
import GreyPoloImg from './../Assets/Images/GreyPolo.png';
import MaroonPoloImg from './../Assets/Images/MaroonPolo.png';
import SeaGreenPoloImg from './../Assets/Images/SeaGreenPolo.png';
import YellowJerseyImg from './../Assets/Images/YellowJersey.png';
import BlackJerseyImg from './../Assets/Images/BlackJersey.png';
import SageGreenJerseyImg from './../Assets/Images/SageGreenJersey.png';
import PinkJerseyImg from './../Assets/Images/PinkJersey.png';
import SeaBlueJerseyImg from './../Assets/Images/SeaBlueJersey.png';
import HoodGreyBlueImg from './../Assets/Images/HoodGreyBlue.png';
import HoodBlackImg from './../Assets/Images/HoodBlack.png';
import HoodMaroonImg from './../Assets/Images/HoodMaroon.png';
import HoodGreyImg from './../Assets/Images/HoodGrey.png';
import HoodGreenImg from './../Assets/Images/HoodGreen.png';
import GreyBlueSleeveImg from './../Assets/Images/GreyBlueSleeve.png';
import KhakiSleeveImg from './../Assets/Images/KhakiSleeve.png';
import GreySleeveImg from './../Assets/Images/GreySleeve.png';
import PinkSleeveImg from './../Assets/Images/PinkSleeve.png';
import GreyBlueQuartImg from './../Assets/Images/GreyBlueQuart.png';
import PurpleQuartImg from './../Assets/Images/PurpleQuart.png';
import GreyQuartImg from './../Assets/Images/GreyQuart.png';
import MaroonQuartImg from './../Assets/Images/MaroonQuart.png';
import SeaQuartImg from './../Assets/Images/SeaQuart.png';
const products = [
  {
    id: 1,
    ProductCard: ' ',
    ProductTitle: 'Crewneck Shirts',
    NewBtn: 'New',
    greyBlue: ' ',
    Material: 'Nylon',
    FirstImg: GreyBlueTopImg,
    SecondImg: BlackTopImg,
    ThirdImg: SageGreenTopImg,
    FourthImg: MaroonTopImg,
    buttonMaroon: ' ',
    FifthImg: DarkKhakiImg,
    FilterButton: ' ',
    blackButton: ' ',
    Discount: '$50',
    ProductType: 'Sport shirt',
    Price: 'Price',
    Amount: '$39',
    Top: ' ',
    sageGreen: ' ',
    darkKhaki: ' ',
    care: 'Machine wash',
    origin: 'Imported',
    closure: 'Pull on',
    AboutOne: (
      <span>
        {' '}
        UV Protection: Excellent protection from the harmful effects of the
        sun's UV radiation.
      </span>
    ),
    AboutTwo: (
      <span>
        MATERIAL: Polyester,Spandex,Silky-soft, Lightweight, Breathable And
        Comfortable.
      </span>
    ),
    AboutThree: (
      <span>
        Moisture Wicking & Quick Dry: Breathable and lightweight moisture
        wicking fabric helps keep you comfortable all day. Special material
        dries quickly for cool comfort.
      </span>
    ),
  },
  {
    id: 2,
    ProductCard: ' ',
    ProductTitle: 'Pullover Shirts',
    greyBlue: ' ',

    Material: 'Polyester',
    FirstImg: BlueGreyImg,
    SecondImg: BrownImg,
    ThirdImg: GreyImg,
    FourthImg: PinkImg,
    FifthImg: SeaBlueImg,
    buttonPink: ' ',
    greyBrown: ' ',
    FilterButton: ' ',
    Discount: '$120',
    ProductType: 'Sweatshirt',
    Price: 'Price',
    Amount: '$80',
    silver: ' ',
    seaGreen: ' ',
    care: 'Machine wash',
    origin: 'Imported',
    closure: 'Zipper',
    AboutOne: (
      <span>
        Material: 90% Polyester+10% Spandex; quick drying, breathable, durable,
        lightweight, soft and stretch, wrinkle resistant.
      </span>
    ),
    AboutTwo: (
      <span>
        Classic style: Blocked Pullover Quarter-Zip Placket/ Heighten Collar
        Design/ Long Sleeve/ Standing Collar with Chin Guard/ 1/4 zip front with
        collar that can be easily worn up or down.
      </span>
    ),
    AboutThree: (
      <span>
        Features: Breathable moisture wicking material that keeps cool and dry
        in outdoor activity. Special space-dye colors distinguish yourself in
        exercise. Front zip closure with zipper garage protects your neck.
      </span>
    ),
  },
  {
    id: 3,
    ProductCard: ' ',
    ProductTitle: 'Golf Polo Shirts',
    greyBlue: ' ',
    NewBtn: 'New',
    Material: 'Polyester, Spandex',
    FirstImg: StripedBlueImg,
    SecondImg: PurpleImg,
    ThirdImg: GreyPoloImg,
    FourthImg: MaroonPoloImg,
    FifthImg: SeaGreenPoloImg,
    purple: ' ',
    silver: ' ',
    buttonMaroon: ' ',
    FilterButton: ' ',
    Discount: '-',
    ProductType: 'Polo Shirts',
    Price: 'Price',
    Amount: '$36',
    silver: ' ',
    seaGreen: ' ',
    care: 'Hand wash',
    origin: 'Imported',
    closure: 'Button',
    AboutOne: (
      <span>
        ALL DAY COMFORT: This golf polo made of high quality performance fabric
        with 92% Polyester and 8% Spandex, which provides moisture wicking,
        UPF30+, softness and 4-way stretch functions, keeping you cool and
        comfortable to wear in all day long.
      </span>
    ),
    AboutTwo: (
      <span>
        CONTRAST STRIPE DESIGN: The golf shirts for men short sleeve with
        multiple tone colors stripe.Unique jersey design shows casual and
        fashion style, various colorways make you have different looks everyday.
      </span>
    ),
    AboutThree: (
      <span>
        GREAT FITTING SIZE: Our Mens Polo Shirts based on us regular fit: S, M,
        L, XL, XXL, 3XL.Regular performance fit, which allows for great mobility
        in any direction.
      </span>
    ),
  },
  {
    id: 4,
    ProductCard: ' ',
    ProductTitle: 'Pique Shirts',
    NewBtn: 'New',
    yellow: ' ',
    blackButton: ' ',
    sageGreen: ' ',
    buttonPink: ' ',
    Material: 'Polyester',
    FirstImg: YellowJerseyImg,
    SecondImg: BlackJerseyImg,
    ThirdImg: SageGreenJerseyImg,
    FourthImg: PinkJerseyImg,
    FifthImg: SeaBlueJerseyImg,
    FilterButton: ' ',
    Discount: '$40',
    ProductType: 'Jersey',
    Price: 'Price',
    Amount: '$27',
    seaGreen: ' ',
    care: 'Hand wash',
    origin: 'Imported',
    closure: 'Button',
    AboutOne: <span>Material: Polyester, comfy and soft</span>,
    AboutTwo: (
      <span>
        Style: Classic polo shirts with 3-button placket and spread collar{' '}
      </span>
    ),
    AboutThree: (
      <span>
        Quick Dry: This men's long and short sleeve polo shirt features
        Sweat-wicking material that pulls moisture away from the body to keep
        you cool and dry
      </span>
    ),
  },
  {
    id: 5,
    ProductCard: ' ',
    ProductTitle: 'Hoodie Sweatshirt',

    greyBlue: ' ',
    Material: 'Sherpa',
    FirstImg: HoodGreyBlueImg,
    SecondImg: HoodBlackImg,
    ThirdImg: HoodGreenImg,
    FourthImg: HoodMaroonImg,
    buttonMaroon: ' ',
    FifthImg: HoodGreyImg,
    FilterButton: ' ',
    blackButton: ' ',
    Discount: '-',
    ProductType: 'Sweatshirt',
    Price: 'Price',
    Amount: '$46',
    Top: ' ',
    sageGreen: ' ',
    darkKhaki: ' ',
    care: 'Hand wash',
    origin: 'Imported',
    closure: 'Pull on',
    AboutOne: (
      <span> Soft Sherpa Fleece Lining, Keep You Warm And Comfortable</span>
    ),
    AboutTwo: (
      <span>Double-Needle Stitching On Neck And Hems Area For Durablity</span>
    ),
    AboutThree: (
      <span>Ribbed Collar, Cuffs And Waistband Avoid Cold Wind Pouring In</span>
    ),
  },
  {
    id: 6,
    ProductCard: ' ',
    ProductTitle: 'Henley Shirts',
    greyBlue: ' ',
    NewBtn: 'New',
    Material: 'Linen, Cotton',
    FirstImg: GreyBlueSleeveImg,
    SecondImg: KhakiSleeveImg,
    ThirdImg: GreySleeveImg,
    FourthImg: PinkSleeveImg,
    FifthImg: GreyBlueSleeveImg,
    buttonPink: ' ',
    greyBrown: ' ',
    FilterButton: ' ',
    Discount: '$40',
    ProductType: 'Casual',
    Price: 'Price',
    Amount: '$30',
    silver: ' ',
    seaGreen: ' ',
    care: 'Machine wash',
    origin: 'Imported',
    closure: 'Button',
    AboutOne: (
      <span>
        This shirts linen shirts made from great fabric, lightweight, and soft
        touch, do not shrink and fade, Moisture-wicking.
      </span>
    ),
    AboutTwo: (
      <span>
        Casual henley shirts, Roll-up Sleeves, Long Sleeve linen shirts, Button
        Front, Stand collar, featured button detail.
      </span>
    ),
    AboutThree: (
      <span>
        Solid Colors,Casual, and Trendy shirt. Perfect for Spring and autumn.
      </span>
    ),
  },
  {
    id: 7,
    ProductCard: ' ',
    ProductTitle: 'Polo Sweaters',
    greyBlue: ' ',
    NewBtn: 'New',
    Material: 'Cotton',
    FirstImg: GreyBlueQuartImg,
    SecondImg: PurpleQuartImg,
    ThirdImg: GreyQuartImg,
    FourthImg: MaroonQuartImg,
    FifthImg: SeaQuartImg,
    purple: ' ',
    silver: ' ',
    buttonMaroon: ' ',
    FilterButton: ' ',
    Discount: '$40',
    ProductType: 'Zip-up Sweaters',
    Price: 'Price',
    Amount: '$36',
    silver: ' ',
    seaGreen: ' ',
    care: 'Machine wash',
    origin: 'Imported',
    closure: 'Zipper',
    AboutOne: (
      <span>
        Made from high quality and lightweight cotton blend material,this
        quarter zip pullover sweater provides you feel warm and comfortable in
        cold days.
      </span>
    ),
    AboutTwo: (
      <span>
        Classic half zip sweaters design in slim fit, polo collar, long sleeve,
        ribbed cuffs and hem, and zipper pieced collar adds color and interest.
        You won’t have to sacrifice comfort for style when you slip this warm,
        long sleeve sweater on over a button-down shirt or crewneck t-shirt.
      </span>
    ),
    AboutThree: (
      <span>
        A zip neck sweater and blue jeans paired together are great to reach the
        off-duty styles, or match the dress pants to look amazing in a classy
        outfit for a modern dandy. Perfect light weight for layering under thick
        winter coats or wearing in place of a jacket or hoodie in the fall and
        spring.
      </span>
    ),
  },
  {
    id: 8,
    ProductCard: ' ',
    ProductTitle: 'Pique Shirts',
    NewBtn: 'New',
    yellow: ' ',
    blackButton: ' ',
    sageGreen: ' ',
    buttonPink: ' ',
    Material: 'Polyester',
    FirstImg: YellowJerseyImg,
    SecondImg: BlackJerseyImg,
    ThirdImg: SageGreenJerseyImg,
    FourthImg: PinkJerseyImg,
    FifthImg: SeaBlueJerseyImg,
    FilterButton: ' ',
    Discount: '$40',
    ProductType: 'Jersey',
    Price: 'Price',
    Amount: '$27',
    seaGreen: ' ',
    care: 'Hand wash',
    origin: 'Imported',
    closure: 'Button',
    AboutOne: <span>Material: Polyester, comfy and soft</span>,
    AboutTwo: (
      <span>
        Style: Classic polo shirts with 3-button placket and spread collar{' '}
      </span>
    ),
    AboutThree: (
      <span>
        Quick Dry: This men's long and short sleeve polo shirt features
        Sweat-wicking material that pulls moisture away from the body to keep
        you cool and dry
      </span>
    ),
  },
];

export default products;
