const posts = [
    {
       "code":"BAcyDyQwcXX",
       "caption":"Ingat.. sehat itu asik!",
       "likes":56,
       "id":"1161022966406956503",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244134/renee-fisher-1106240.jpg"
    },
    {
       "code":"BAcJeJrQca9",
       "caption":"Ceasar salad... yay!",
       "likes":59,
       "id":"1160844458347054781",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244130/taylor-kiser-373480.jpg"
    },
    {
       "code":"BAF_KY4wcRY",
       "caption":"Deadlift... salah satu olahraga yang mengikut-sertakan sangat bangian otot tubuh",
       "likes":79,
       "id":"1154606670337393752",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244127/victor-freitas-546968.jpg"
    },
    {
       "code":"BAPIPRjQce9",
       "caption":"Kettlebell!!",
       "likes":47,
       "id":"1157179863266871229",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244125/maria-fernanda-gonzalez-461523.jpg"
    },
    {
       "code":"-hZh6IQcfN",
       "caption":"Semangkuk oatmeal chantique...",
       "likes":66,
       "id":"1126293663140399053",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244118/sambazon-63913.jpg"
    },
    {
       "code":"-B3eiIwcYV",
       "caption":"Widiwww... rumah Spongebob!",
       "likes":33,
       "id":"1117418173361145365",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244111/pineapple-supply-co-29325.jpg"
    },
    {
       "code":"BAhvZrRwcfu",
       "caption":"Salad lagi neh.. jangan bosan, sebab salad akan cukup mengenyangkan dengan sedikit sekali calori yang anda konsumsi",
       "likes":30,
       "id":"1162418651480049646",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244111/sara-dubler-769470.jpg"
    },
    {
       "code":"BAAJqbOQcW5",
       "caption":"Buah naga! Sangat banyak mengandung vitamin dan antioksidan...",
       "likes":40,
       "id":"1152964002473690553",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244096/pontus-ohlsson-422759.jpg"
    },
    {
       "code":"_4jHytwcUA",
       "caption":"Jangan lupa cardio!",
       "likes":62,
       "id":"1150824171912152320",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244064/luke-chesser-22256.jpg"
    },
    {
       "code":"_zbaOlQcbn",
       "caption":"Jangan lupa untuk selalu monitor progress terutama lingkar pinggang kamu",
       "likes":52,
       "id":"1149382879529256679",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244044/rawpixel-1054662.jpg"
    },
    {
       "code":"_rmvQfQce8",
       "caption":"Telor adalah sumber protein yang sangat mudah didapatkan...",
       "likes":35,
       "id":"1147180903383025596",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244035/joseph-gonzalez-176749.jpg"
    },
    {
       "code":"_ep9kiQcVy",
       "caption":"Memulai hari dengan semangkuk oatmeal dengan topping yang menggoda... 🍜",
       "likes":64,
       "id":"1143535906423162226",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244022/jannis-brandt-256862.jpg"
    },
    {
       "code":"_XpJcrwcSn",
       "caption":"Kecenderungannya makanan sehat selalu kelihatan cantik!",
       "likes":74,
       "id":"1141561999742846119",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244017/kevin-mccutcheon-665788.jpg"
    },
    {
       "code":"_KnU7MwceA",
       "caption":"Selain olahraga beban rutin... pola makan harus senantiasa dijaga",
       "likes":54,
       "id":"1137894817632733056",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550244008/edgar-castrejon-459824.jpg"
    },
    {
       "code":"_HMejJQcY5",
       "caption":"Bali, sunset di pantai Canggu... keren banget!",
       "likes":18,
       "id":"1136932306813044281",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550243995/dominik-vanyi-435737.jpg"
    },
    {
       "code":"_Fq2zmwcaz",
       "caption":"Awesome....",
       "likes":48,
       "id":"1136502965197194931",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550243958/danielle-cerullo-782570.jpg"
    },
    {
       "code":"_A2r0aQcfD",
       "caption":"Makin hari makin kelihatan serius neh!",
       "likes":57,
       "id":"1135147611821557699",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550278132/IMG_3062_2.jpg"
    },
    {
       "code":"-1rhFawccs",
       "caption":"Beban.. beban.. beban... mana yang mau dipilih",
       "likes":39,
       "id":"1132002270913873708",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550278131/luis-reyes-1204032.jpg"
    },
    {
       "code":"-pjx-gQcVi",
       "caption":"Jangan takut untuk menaklukkan beban yang semakin tinggi... ingat otot anda yang ngebakar lemak!",
       "likes":81,
       "id":"1128590547628442978",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550278129/victor-freitas-549214.jpg"
    },
    {
       "code":"-oTZ0zQcWt",
       "caption":"Thumbs up man!!!",
       "likes":81,
       "id":"1128237044221461933",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550278112/P_20161222_081951_BF.jpg"
    },
    {
       "code":"-VBgtGQcSf",
       "caption":"Makin banyak nih progressnya...",
       "likes":27,
       "id":"1122810327591928991",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550278098/IMG_20150829_064553.jpg"
    },
    {
       "code":"-FpTyHQcau",
       "caption":"Yay... Progress.....",
       "likes":82,
       "id":"1118481761857291950",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550278098/IMG_20150620_165548.jpg"
    },
    {
       "code":"-fasqlQceO",
       "caption":"Asssik... Waktunya mulai hidup sehat!!!",
       "likes":46,
       "id":"1125735850454402958",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/g_face,c_thumb,h_1080,w_1080/v1550278099/IMG_20150411_194104.jpg"
    },
    {
       "code":"-mxKQoQcQh",
       "caption":"Jetski at Lake Toba",
       "likes":47,
       "id":"1127804966031967265",
       "display_src":"https://res.cloudinary.com/asiksehat/image/upload/c_thumb,h_1080,w_1080/v1550278112/IMG_1893c.jpg"
    }
 ];
 
 
 export default posts;