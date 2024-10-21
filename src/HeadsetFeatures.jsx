import React from "react";
import { Headphones, Battery, Wifi, Mic } from 'lucide-react';

function HeadsetFeatures({ productName, imageUrl, price, features }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white my-8">
      <div className="relative">
        <img 
          className="w-full h-64 object-contain" 
          src={imageUrl} 
          alt={productName} 
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-bold">
          NEW
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{productName}</h2>
        <p className="text-gray-600 text-base mb-4">
        Rasakan audio yang sangat jernih dengan headset nirkabel terbaru kami, yang sempurna bagi para pencinta musik dan gamer.
        </p>
        <div className="flex flex-wrap -mx-2 mb-4">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {icon}
      <span className="ml-1">{text}</span>
    </div>
  );
}

function HeadsetCardGrid() {
  const products = [
    {
      productName: "ProSound X1 Wireless Headset",
      imageUrl: "id-11134601-7r98x-lvwwj76sekn1e5.png",
      price: 149.99,
      features: [
        { icon: <Headphones className="w-5 h-5" />, text: "Hi-Fi Sound" },
        { icon: <Battery className="w-5 h-5" />, text: "24h Battery" },
        { icon: <Wifi className="w-5 h-5" />, text: "Bluetooth 5.0" },
        { icon: <Mic className="w-5 h-5" />, text: "Noise-canceling Mic" },
      ],
    },
    {
      productName: "AudioMaster Pro",
      imageUrl: "125690499106139a134430a365c19001.png",
      price: 199.99,
      features: [
        { icon: <Headphones className="w-5 h-5" />, text: "Surround Sound" },
        { icon: <Battery className="w-5 h-5" />, text: "30h Battery" },
        { icon: <Wifi className="w-5 h-5" />, text: "Bluetooth 5.2" },
        { icon: <Mic className="w-5 h-5" />, text: "HD Mic" },
      ],
    },
    {
      productName: "ClearTone Z9",
      imageUrl: "Mockup-Headset-Bluetooth-JETE-11.jpg",
      price: 129.99,
      features: [
        { icon: <Headphones className="w-5 h-5" />, text: "Deep Bass" },
        { icon: <Battery className="w-5 h-5" />, text: "20h Battery" },
        { icon: <Wifi className="w-5 h-5" />, text: "Bluetooth 4.2" },
        { icon: <Mic className="w-5 h-5" />, text: "Clear Voice Mic" },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-16">
      {products.map((product, index) => (
        <HeadsetFeatures
          key={index}
          productName={product.productName}
          imageUrl={product.imageUrl}
          price={product.price}
          features={product.features}
        />
      ))}
    </div>
  );
}

export default HeadsetCardGrid;
