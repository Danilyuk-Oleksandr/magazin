/* ========================= ВСІ ТОВАРИ (треба для сторінки товару) ========================= */
// Тут зберігаємо всі товари щоб можна було знайти по id
const products = [
    { id: 1, title: "Mechanical Keyboard", category: "keyboard", price: 129, image: "https://assets3.razerzone.com/LfJACJA3KA3Qsxuo_tWznTE_OkQ=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh25%2Fhdf%2F10045163929630%2F240510-BW-V4-Pro-White-500x500.png", description: "Premium mechanical keyboard designed for competitive gaming and immersive setup experience.", specifications: ["RGB Lighting", "Wireless Connectivity", "Mechanical Switches", "Gaming Optimized", "Ultra Low Latency"], gallery: ["https://assets3.razerzone.com/LfJACJA3KA3Qsxuo_tWznTE_OkQ=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh25%2Fhdf%2F10045163929630%2F240510-BW-V4-Pro-White-500x500.png", "https://assets3.razerzone.com/UiecZnWkVhT-O7pRtym22hoXFzg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh96%2Fh06%2F10061741654046%2Fhuntsman-v3-tkl-8khz-500x500.png"] },
    { id: 2, title: "Gaming Headset", category: "headset", price: 89, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/astro/en/products/a10-gen-2/pdp-gallery-a10-lilac-02.png", description: "Immersive surround sound gaming headset with premium microphone and crystal clear audio.", specifications: ["7.1 Surround", "Noise Cancellation", "Wireless Mode", "50mm Drivers", "RGB Lighting"], gallery: ["https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/astro/en/products/a10-gen-2/pdp-gallery-a10-lilac-02.png"] },
    { id: 3, title: "UltraWide Monitor", category: "monitor", price: 399, image: "https://dlcdnwebimgs.asus.com/gain/2CE57476-66B2-4154-8970-F7F201683F19/w717/h525/fwebp/w273", description: "UltraWide gaming monitor with immersive colors and ultra smooth refresh rate.", specifications: ["165Hz Refresh Rate", "1ms Response Time", "HDR Support", "UltraWide Display", "Curved Panel"], gallery: ["https://dlcdnwebimgs.asus.com/gain/2CE57476-66B2-4154-8970-F7F201683F19/w717/h525/fwebp/w273", "https://dlcdnwebimgs.asus.com/gain/755DDBA5-BD42-4E9F-8969-B5319AA6813C/w717/h525/fwebp"] },
    { id: 4, title: "RGB Gaming Mouse", category: "mouse", price: 59, image: "https://assets3.razerzone.com/IGLejpy9uJjP2M8FsPZTU6rZ-Jg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh5a%2Fh1c%2F9821720576030%2Fbasilisk-v3-pro-35k-500x500.png", description: "Professional esports gaming mouse with ultra lightweight premium build.", specifications: ["RGB Lighting", "Wireless Connectivity", "Ultra Lightweight", "Gaming Optimized", "Focus Sensor"], gallery: ["https://assets3.razerzone.com/IGLejpy9uJjP2M8FsPZTU6rZ-Jg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh5a%2Fh1c%2F9821720576030%2Fbasilisk-v3-pro-35k-500x500.png"] },
    { id: 5, title: "Gaming Chair", category: "chair", price: 249, image: "https://assets3.razerzone.com/Gvby_QeZpl2GWaHhqlKcxCUvoE4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh23%2Fh46%2F10003777290270%2Fiskur-v2-x-newgen-blackgreen-500x500.png", description: "Premium ergonomic gaming chair designed for maximum comfort during long sessions.", specifications: ["Ergonomic Design", "Premium Materials", "Adjustable Height", "Lumbar Support", "Gaming Optimized"], gallery: ["https://assets3.razerzone.com/Gvby_QeZpl2GWaHhqlKcxCUvoE4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh23%2Fh46%2F10003777290270%2Fiskur-v2-x-newgen-blackgreen-500x500.png"] },
    { id: 6, title: "Gaming Laptop", category: "laptop", price: 1499, image: "https://assets3.razerzone.com/buDySUbJpzLXprNWkAEoV5N8U3Y=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhc0%2Fh35%2F9917794517022%2Fblade-18-k11-black-2-500x500.png", description: "Powerful gaming laptop built for ultra performance and immersive gaming experience.", specifications: ["RTX Graphics", "240Hz Display", "RGB Keyboard", "Intel Core i9", "Ultra Cooling"], gallery: ["https://assets3.razerzone.com/buDySUbJpzLXprNWkAEoV5N8U3Y=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhc0%2Fh35%2F9917794517022%2Fblade-18-k11-black-2-500x500.png"] },
    { id: 7, title: "RGB Mini Keyboard", category: "keyboard", price: 99, image: "https://assets3.razerzone.com/UiecZnWkVhT-O7pRtym22hoXFzg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh96%2Fh06%2F10061741654046%2Fhuntsman-v3-tkl-8khz-500x500.png", description: "Compact gaming keyboard for speed and minimalistic setups.", specifications: ["Mini Layout", "RGB Lighting", "Mechanical Switches", "USB-C", "Gaming Optimized"], gallery: ["https://assets3.razerzone.com/UiecZnWkVhT-O7pRtym22hoXFzg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh96%2Fh06%2F10061741654046%2Fhuntsman-v3-tkl-8khz-500x500.png"] },
    { id: 8, title: "Wireless Headset", category: "headset", price: 119, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/audio/g735-wireless-headset/gallery/2025/g735-front-angle-gallery-4.png", description: "Wireless gaming headset with premium sound quality.", specifications: ["Wireless Mode", "RGB Lighting", "Noise Cancellation", "Low Latency", "Premium Audio"], gallery: ["https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/audio/g735-wireless-headset/gallery/2025/g735-front-angle-gallery-4.png"] },
    { id: 9, title: "4K Gaming Monitor", category: "monitor", price: 599, image: "https://dlcdnwebimgs.asus.com/gain/755DDBA5-BD42-4E9F-8969-B5319AA6813C/w717/h525/fwebp", description: "Premium 4K gaming monitor with ultra sharp visuals.", specifications: ["4K Resolution", "HDR Support", "165Hz Refresh Rate", "1ms Response", "Gaming Optimized"], gallery: ["https://dlcdnwebimgs.asus.com/gain/755DDBA5-BD42-4E9F-8969-B5319AA6813C/w717/h525/fwebp"] },
    { id: 10, title: "Cyber Mouse Pro", category: "mouse", price: 79, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superstrike-pdp/2026/pro-x2-superstrike-profile-angle-gallery-4.png", description: "Professional gaming mouse with ultra fast response.", specifications: ["Ultra Lightweight", "Wireless Connectivity", "Focus Sensor", "RGB Lighting", "Esports Ready"], gallery: ["https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superstrike-pdp/2026/pro-x2-superstrike-profile-angle-gallery-4.png"] },
    { id: 11, title: "Wireless Gaming Mouse", category: "mouse", price: 99, image: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502x-corded/gallery/g502x-corded-gallery-1-white.png", description: "Wireless gaming mouse for speed and esports performance.", specifications: ["Wireless Connectivity", "RGB Lighting", "Focus Pro Sensor", "Ultra Lightweight", "Esports Ready"], gallery: ["https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502x-corded/gallery/g502x-corded-gallery-1-white.png"] },
    { id: 12, title: "White Gaming Keyboard", category: "keyboard", price: 149, image: "https://assets3.razerzone.com/dskwa_GYE7zZbDyP1FLFOZepovk=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh37%2Fhda%2F9257514041374%2F211102-pro-type-ultra-500x500.png", description: "Premium white mechanical keyboard with RGB lighting.", specifications: ["Mechanical Switches", "RGB Lighting", "USB-C", "White Edition", "Low Latency"], gallery: ["https://assets3.razerzone.com/dskwa_GYE7zZbDyP1FLFOZepovk=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh37%2Fhda%2F9257514041374%2F211102-pro-type-ultra-500x500.png"] },
    { id: 13, title: "Streaming Microphone", category: "microphone", price: 139, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/streaming-gear/yeti-nano-usb-microphone/gallery/2025/yeti-nano-3qtr-front-left-angle-black-gallery-3.png", description: "Professional streaming microphone with crystal clear voice.", specifications: ["USB Connectivity", "RGB Lighting", "Noise Reduction", "Streaming Optimized", "Studio Sound"], gallery: ["https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/streaming-gear/yeti-nano-usb-microphone/gallery/2025/yeti-nano-3qtr-front-left-angle-black-gallery-3.png"] },
    { id: 14, title: "RGB Gaming Chair", category: "chair", price: 329, image: "https://dlcdnwebimgs.asus.com/gain/9B43A0DE-4AA1-4C94-B707-1987B28DEE3E/w382/fwebp", description: "Luxury RGB gaming chair with ergonomic support.", specifications: ["RGB Lighting", "Ergonomic Design", "Lumbar Support", "Premium Materials", "Adjustable Height"], gallery: ["https://dlcdnwebimgs.asus.com/gain/9B43A0DE-4AA1-4C94-B707-1987B28DEE3E/w382/fwebp"] },
    { id: 15, title: "240Hz Gaming Monitor", category: "monitor", price: 699, image: "https://dlcdnwebimgs.asus.com/gain/EEE5E88C-D4DD-4563-A826-3C4E03531795/w717/h525/fwebp/w273", description: "Ultra fast 240Hz gaming monitor for esports.", specifications: ["240Hz Refresh Rate", "1ms Response", "HDR Support", "Gaming Optimized", "Ultra Smooth Display"], gallery: ["https://dlcdnwebimgs.asus.com/gain/EEE5E88C-D4DD-4563-A826-3C4E03531795/w717/h525/fwebp/w273"] },
    { id: 16, title: "Studio Gaming Headset", category: "headset", price: 179, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-lilac-gallery-2.png", description: "Premium wireless headset for immersive gaming.", specifications: ["7.1 Surround Sound", "Wireless Connectivity", "Noise Cancellation", "RGB Lighting", "Low Latency Audio"], gallery: ["https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-lilac-gallery-2.png"] },
    { id: 17, title: "Cyber Laptop RTX", category: "laptop", price: 1899, image: "https://dlcdnwebimgs.asus.com/gain/F0F8BC19-F9EA-4D71-9EE8-4BE054D99E14/w300/fwebp", description: "Ultra powerful RTX gaming laptop.", specifications: ["RTX Graphics", "240Hz Display", "Intel Core i9", "RGB Keyboard", "Advanced Cooling"], gallery: ["https://dlcdnwebimgs.asus.com/gain/F0F8BC19-F9EA-4D71-9EE8-4BE054D99E14/w300/fwebp"] },
    { id: 18, title: "Minimal White Mouse", category: "mouse", price: 69, image: "https://dlcdnwebimgs.asus.com/gain/FA05331B-7D49-466E-B208-8BAE5B90C64D/w300/fwebp", description: "Minimalistic white gaming mouse.", specifications: ["Minimal Design", "Wireless Connectivity", "Focus Sensor", "Ultra Lightweight", "Gaming Optimized"], gallery: ["https://dlcdnwebimgs.asus.com/gain/FA05331B-7D49-466E-B208-8BAE5B90C64D/w300/fwebp"] },
    { id: 19, title: "RGB Speaker Set", category: "speaker", price: 159, image: "https://assets3.razerzone.com/N4QBkmMn9tHXWNROzLj8F2gNAS4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhd9%2Fhf6%2F9522060492830%2Fleviathan-v2-pro-2-500x500.png", description: "Powerful RGB speaker system.", specifications: ["RGB Lighting", "Premium Bass", "Wireless Audio", "Surround Sound", "Gaming Optimized"], gallery: ["https://assets3.razerzone.com/N4QBkmMn9tHXWNROzLj8F2gNAS4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhd9%2Fhf6%2F9522060492830%2Fleviathan-v2-pro-2-500x500.png"] },
    { id: 20, title: "Compact Gaming Keyboard", category: "keyboard", price: 119, image: "https://dlcdnwebimgs.asus.com/gain/0634830A-5D8F-4A86-93C9-873D959E03AD/w300/fwebp", description: "Compact esports keyboard.", specifications: ["Compact Layout", "RGB Lighting", "Mechanical Switches", "USB-C", "Low Latency"], gallery: ["https://dlcdnwebimgs.asus.com/gain/0634830A-5D8F-4A86-93C9-873D959E03AD/w300/fwebp"] },
    { id: 21, title: "Cyber Monitor Pro", category: "monitor", price: 849, image: "https://dlcdnwebimgs.asus.com/gain/EBAC0720-7C2A-4CBE-8E6D-624127867D77/w717/h525/fwebp/w273", description: "Professional gaming monitor.", specifications: ["240Hz Refresh Rate", "HDR Display", "1ms Response", "UltraWide Screen", "Gaming Optimized"], gallery: ["https://dlcdnwebimgs.asus.com/gain/EBAC0720-7C2A-4CBE-8E6D-624127867D77/w717/h525/fwebp/w273"] },
    { id: 22, title: "Pro Wireless Headset", category: "headset", price: 149, image: "https://assets3.razerzone.com/HXhTxOzsNH11j_gikX4lANpISko=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh3b%2Fh1e%2F9821452435486%2Fkraken-v4-2-500x500.png", description: "Wireless esports headset.", specifications: ["Wireless Audio", "7.1 Surround", "Noise Cancellation", "RGB Lighting", "Low Latency"], gallery: ["https://assets3.razerzone.com/HXhTxOzsNH11j_gikX4lANpISko=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh3b%2Fh1e%2F9821452435486%2Fkraken-v4-2-500x500.png"] },
    { id: 23, title: "Premium RGB Chair", category: "chair", price: 379, image: "https://dlcdnwebimgs.asus.com/gain/B24413D5-6F1C-4832-9CCC-275DC5CB73AE/w717/h525/fwebp/w273", description: "Luxury RGB gaming chair.", specifications: ["RGB Lighting", "Premium Build", "Lumbar Support", "Ergonomic Design", "Adjustable Height"], gallery: ["https://dlcdnwebimgs.asus.com/gain/B24413D5-6F1C-4832-9CCC-275DC5CB73AE/w717/h525/fwebp/w273"] },
    { id: 24, title: "Streaming Mic White", category: "microphone", price: 129, image: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/plp-microphones/pdp-yeti-gx-gaming-microphone/2025/gallery/yeti-gx-3qtr-front-angle-white-gallery-4.png", description: "Minimal white streaming microphone.", specifications: ["USB Connectivity", "Studio Audio", "Noise Reduction", "Streaming Optimized", "RGB Lighting"], gallery: ["https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/plp-microphones/pdp-yeti-gx-gaming-microphone/2025/gallery/yeti-gx-3qtr-front-angle-white-gallery-4.png"] },
    { id: 25, title: "Gaming Setup Monitor", category: "monitor", price: 499, image: "https://dlcdnwebimgs.asus.com/gain/EA5F4487-87F4-47AC-B06F-EC1C95C0E59E/w717/h525/fwebp", description: "Modern gaming monitor.", specifications: ["165Hz Refresh Rate", "HDR Colors", "Gaming Optimized", "1ms Response", "Ultra Smooth Display"], gallery: ["https://dlcdnwebimgs.asus.com/gain/EA5F4487-87F4-47AC-B06F-EC1C95C0E59E/w717/h525/fwebp"] },
    { id: 26, title: "Wireless Compact Keyboard", category: "keyboard", price: 139, image: "https://dlcdnwebimgs.asus.com/gain/0B522307-78BF-4F10-AA9B-9D9D6BC00C76/w717/h525/fwebp/w273", description: "Compact wireless gaming keyboard.", specifications: ["Wireless Connectivity", "Mechanical Switches", "RGB Lighting", "Compact Layout", "Gaming Optimized"], gallery: ["https://dlcdnwebimgs.asus.com/gain/0B522307-78BF-4F10-AA9B-9D9D6BC00C76/w717/h525/fwebp/w273"] },
    { id: 27, title: "Gaming Sound Speakers", category: "speaker", price: 189, image: "https://assets3.razerzone.com/WuUGqs2eQg9N9Zy_mY_fDk8EsO0=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh40%2Fh81%2F9522168987678%2Fnommo-v2-500x500.png", description: "Premium gaming speaker system.", specifications: ["Surround Sound", "RGB Lighting", "Wireless Audio", "Premium Bass", "Gaming Optimized"], gallery: ["https://assets3.razerzone.com/WuUGqs2eQg9N9Zy_mY_fDk8EsO0=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh40%2Fh81%2F9522168987678%2Fnommo-v2-500x500.png"] },
    { id: 28, title: "Cyber Gaming Laptop", category: "laptop", price: 2099, image: "https://assets3.razerzone.com/705Z1YGWMxhT83ggz1IpMDI3pJw=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhbe%2Fh38%2F9917794451486%2Fblade-14-p11-black-2-500x500.png", description: "Next generation gaming laptop.", specifications: ["RTX Graphics", "240Hz Display", "Advanced Cooling", "RGB Keyboard", "Intel Core i9"], gallery: ["https://assets3.razerzone.com/705Z1YGWMxhT83ggz1IpMDI3pJw=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhbe%2Fh38%2F9917794451486%2Fblade-14-p11-black-2-500x500.png"] },
    { id: 29, title: "Esports Gaming Mouse", category: "mouse", price: 109, image: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2-dex/gallery/new-gallery-assets-2025/pro-x-superlight-2-dex-mouse-3qtr-high-back-angle-black-gallery-3-new.png", description: "Professional esports gaming mouse.", specifications: ["Focus Pro Sensor", "Wireless Connectivity", "RGB Lighting", "Ultra Lightweight", "Esports Ready"], gallery: ["https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2-dex/gallery/new-gallery-assets-2025/pro-x-superlight-2-dex-mouse-3qtr-high-back-angle-black-gallery-3-new.png"] },
    { id: 30, title: "Cyber RGB Headset", category: "headset", price: 199, image: "https://dlcdnwebimgs.asus.com/gain/378A90DA-2DFF-414F-B8A2-57B7C411665F/w717/h525/fwebp/w273", description: "Premium RGB gaming headset.", specifications: ["7.1 Surround Sound", "Wireless Audio", "Noise Cancellation", "RGB Lighting", "Low Latency"], gallery: ["https://dlcdnwebimgs.asus.com/gain/378A90DA-2DFF-414F-B8A2-57B7C411665F/w717/h525/fwebp/w273"] }
];

// ПК збірки теж тут є
const pcBuilds = [
    { id: 101, title: "Gaming PC 500$", category: "Gaming PC", price: 500, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200", description: "Entry-level gaming PC for smooth Full HD gameplay.", specifications: ["CPU: Ryzen 5 3600", "GPU: RX 6600 8GB", "RAM: 16GB DDR4 3200MHz", "SSD: 512GB NVMe", "PSU: 600W Bronze"], gallery: ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200"] },
    { id: 102, title: "Gaming PC 750$", category: "Gaming PC", price: 750, image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=1200", description: "Balanced gaming build for AAA games.", specifications: ["CPU: Ryzen 5 5600", "GPU: RTX 4060 8GB", "RAM: 32GB DDR4", "SSD: 1TB NVMe", "PSU: 650W Bronze"], gallery: ["https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=1200"] },
    { id: 103, title: "Gaming PC 1000$", category: "Gaming PC", price: 1000, image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1200", description: "High-end gaming PC with RTX graphics.", specifications: ["CPU: Ryzen 7 7700", "GPU: RTX 4070", "RAM: 32GB DDR5", "SSD: 1TB Gen4", "PSU: 750W Gold"], gallery: ["https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1200"] },
    { id: 104, title: "Gaming PC 1500$", category: "Gaming PC", price: 1500, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200", description: "Enthusiast gaming setup for 1440p.", specifications: ["CPU: Ryzen 7 7800X3D", "GPU: RTX 4070 Ti Super", "RAM: 32GB DDR5 6000MHz", "SSD: 2TB Gen4", "PSU: 850W Gold"], gallery: ["https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200"] },
    { id: 105, title: "Gaming PC 2000$", category: "Gaming PC", price: 2000, image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=1200", description: "Ultimate flagship gaming PC.", specifications: ["CPU: Ryzen 9 9950X", "GPU: RTX 4080 Super", "RAM: 64GB DDR5", "SSD: 4TB Gen4", "PSU: 1000W Platinum"], gallery: ["https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=1200"] }
];

/* ========================= ЗНАХОДИМО ТОВАР ЗА ID ========================= */
// Беремо id з адресного рядка (наприклад ?id=5)
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// Шукаємо товар спочатку в товарах, потім в збірках
const product = products.find(p => p.id === productId) || pcBuilds.find(p => p.id === productId);

/* ========================= ЕЛЕМЕНТИ СТОРІНКИ ========================= */
const breadcrumbTitle = document.getElementById("breadcrumbTitle");
const mainProductImage = document.getElementById("mainProductImage");
const thumbnailList = document.getElementById("thumbnailList");
const productCategory = document.getElementById("productCategory");
const productTitle = document.getElementById("productTitle");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");
const specificationsList = document.getElementById("specificationsList");
const decreaseQty = document.getElementById("decreaseQty");
const increaseQty = document.getElementById("increaseQty");
const quantityValue = document.getElementById("quantityValue");
const addToCartBtn = document.getElementById("addToCartBtn");
const productCartCount = document.getElementById("productCartCount");
const relatedProducts = document.getElementById("relatedProducts");
const scrollTopBtn = document.getElementById("scrollTop");

// Поточна кількість товару
let quantity = 1;

/* ========================= МАЛЮЄМО ТОВАР ========================= */
function renderProduct() {
    // Якщо товар не знайдено - повертаємося на головну
    if (!product) { window.location.href = "index.html"; return; }

    // Встановлюємо заголовок вкладки
    document.title = `${product.title} | CyberTech`;

    // Заповнюємо всі елементи даними товару
    if (breadcrumbTitle) breadcrumbTitle.textContent = product.title;
    if (mainProductImage) mainProductImage.src = product.image;
    if (productCategory) productCategory.textContent = product.category;
    if (productTitle) productTitle.textContent = product.title;
    if (productPrice) productPrice.textContent = "$" + product.price;
    if (productDescription) productDescription.textContent = product.description;

    // Специфікації (список характеристик)
    if (specificationsList) {
        specificationsList.innerHTML = "";
        product.specifications.forEach(spec => {
            specificationsList.innerHTML += `<li>${spec}</li>`;
        });
    }

    // Галерея (маленькі зображення знизу)
    if (thumbnailList) {
        thumbnailList.innerHTML = "";
        product.gallery.forEach((img, i) => {
            thumbnailList.innerHTML += `
                <img src="${img}" class="thumbnail-image ${i === 0 ? "active" : ""}" alt="Thumbnail" loading="lazy">`;
        });
        initGallery();
    }

    // Показуємо схожі товари
    renderRelated();
}

/* ========================= ГАЛЕРЕЯ ========================= */
// При кліку на маленьке зображення - змінюємо головне
function initGallery() {
    document.querySelectorAll(".thumbnail-image").forEach(thumb => {
        thumb.addEventListener("click", () => {
            document.querySelectorAll(".thumbnail-image").forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            if (mainProductImage) mainProductImage.src = thumb.src;
        });
    });
}

/* ========================= СХОЖІ ТОВАРИ ========================= */
// Показуємо товари тієї ж категорії
function renderRelated() {
    if (!relatedProducts || !product) return;
    const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3); // максимум 3 товари

    // Якщо схожих нема - ховаємо секцію
    if (!related.length) {
        const shell = relatedProducts.closest(".section-shell");
        if (shell) shell.style.display = "none";
        return;
    }

    related.forEach(p => {
        relatedProducts.innerHTML += `
            <div class="col-md-6 col-xl-4">
                <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
                    <div class="product-image-wrapper">
                        <img src="${p.image}" class="product-image" alt="${p.title}" loading="lazy">
                    </div>
                    <div class="product-content">
                        <span class="product-category">${p.category}</span>
                        <h3>${p.title}</h3>
                        <div class="product-bottom">
                            <p class="price">$${p.price}</p>
                            <button class="product-btn" onclick="event.stopPropagation(); addRelatedToCart(${p.id})">Add</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// Додати схожий товар в кошик (без перезавантаження)
function addRelatedToCart(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(i => i.id === id);
    if (existing) { existing.quantity++; } else { cart.push({ ...p, quantity: 1 }); }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartPreview();
}

/* ========================= КІЛЬКІСТЬ ТОВАРУ ========================= */
function updateQuantityUI() {
    if (quantityValue) quantityValue.textContent = quantity;
}

// Збільшити кількість
increaseQty?.addEventListener("click", () => { quantity++; updateQuantityUI(); });

// Зменшити (мінімум 1)
decreaseQty?.addEventListener("click", () => { if (quantity > 1) { quantity--; updateQuantityUI(); } });

/* ========================= КОШИК (спільний з index) ========================= */
// Використовуємо той самий localStorage що і на головній
function updateCartPreview() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((s, i) => s + i.quantity, 0);
    if (productCartCount) productCartCount.textContent = `${total} item${total !== 1 ? "s" : ""}`;
}

// Кнопка "Додати в кошик" на сторінці товару
addToCartBtn?.addEventListener("click", () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(i => i.id === product.id);

    // Якщо вже є - збільшуємо кількість
    if (existing) {
        existing.quantity += quantity;
    } else {
        // Якщо нема - додаємо новий
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity
        });
    }

    // Зберігаємо (той самий ключ що і в app.js!)
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartPreview();

    // Змінюємо кнопку щоб показати що додано
    addToCartBtn.textContent = "✓ Added";
    addToCartBtn.style.background = "#22c55e";
    setTimeout(() => {
        addToCartBtn.textContent = "Add To Cart";
        addToCartBtn.style.background = "";
    }, 1600);
});

/* ========================= КУРСОР І СКРОЛ ========================= */
const cursorGlow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
    if (!cursorGlow) return;
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

window.addEventListener("scroll", () => {
    scrollTopBtn?.classList.toggle("show-scroll-top", window.scrollY > 400);
});
scrollTopBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ========================= ТЕМНА/СВІТЛА ТЕМА ========================= */
// Завантажуємо збережену тему
const savedTheme = localStorage.getItem("cybertech-theme");
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = "☀️";
}

document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("cybertech-theme", isLight ? "light" : "dark");
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = isLight ? "☀️" : "🌙";
});

/* ========================= ЗАПУСКАЄМО ВСЕ ========================= */
renderProduct();
updateQuantityUI();
updateCartPreview();