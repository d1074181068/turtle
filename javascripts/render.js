const water_data = [
    {
        name: '斑龜',
        eng_name: 'ban',
        img_count: 4,
        feed: 1,
        action: 5,
        long: '30-40cm',
        template: '26-30度',
        swim: '較差',
        decription1: '斑龜為臺灣淡水龜類，外觀特徵為頭頸、四肢以及尾部皆有黃綠線條，因尾巴特別長又稱長尾龜，食物種類多樣，包括水生小型動物、水生植物、岸邊植物、蚯蚓等。4-6月為繁殖季，每窩產卵數約7-15顆，通常背甲長超過19公分才會產卵。',
        decription2: '性格溫和，對高溫忍耐力較高，對於新手飼養來說非常適合，在臺灣多分布於低海拔水域環境，包括溪流、溝渠、池塘、水庫等，甚至在河口半淡鹹水的紅樹林區。',
        decription3: '斑龜在水中交配，雄龜幾乎不會上岸，雌龜在產卵時才會上岸。交配後的雌龜會爬上岸尋找適合產卵的鬆軟沙地，從挖坑、產卵、埋卵，要花好幾個鐘頭。雌龜產完卵常會在岸上停留一段時間，再回到池中。'
    }, {
        name: '金龜',
        eng_name: 'gold',
        img_count: 3,
        feed: '保育類無法飼養',
        action: '無法飼養',
        long: '8-15cm',
        template: '26-33度',
        swim: '佳',
        decription1: '金龜也是台灣四種本土澤龜之一,野生族群近年來已經很少發現,確實有保育的必要.與柴棺龜,食蛇龜一起被列為台灣II級保育類動物。',
        decription2: '金龜的外型頗具個性,背甲上有三道明顯的陵脊,深棕色至黑色的頭部兩側有著金色的圓形或不規則形的花紋,這也牠名稱的由來。',
        decription3: '雌龜與雄龜的差別在於尾部的大小,雄性尾部粗大,泄殖孔超過背甲邊緣,雌龜則相反而且體型大於雄龜.雄龜有黑化的傾向,所以深色個體多為雄性.雌龜每年三至六月交配,七月至九月產卵,每年產卵1-3次,每次產下4-9顆蛋,約60-75天可孵化.幼龜有時會留在巢穴中越冬。'
    }, {
        name: '柴棺龜',
        eng_name: 'mutica',
        img_count: 3,
        feed: '保育類無法飼養',
        action: '無法飼養',
        long: '8-15cm',
        template: '26-33度',
        swim: '差',
        decription1: '又稱黃喉擬水龜，主要的棲息地在低海拔原始闊葉林或次生林底層及其邊緣環境，除了要有水生植物的淺水域，利用陸域環境頻度也很高，但這樣的環境與人類活動高度重疊，極易遭受非法獵捕。',
        decription2: '特徵為腹甲後端凹入，背甲與腹甲之接合處有縫合線，碩頂圓滑，軀幹部為黃褐色，頭側自眼後至鼓膜有一條較闊之黃色條紋，背甲中央一般有脊。在臺灣產的烏龜中體型算較大。',
        decription3: '生活在沼澤、溪流、水塘、湖泊及水溝之中。分布：原廣泛分布在全省各地。'
    }, {
        name: '巴西龜',
        eng_name: 'brasil',
        img_count: 4,
        feed: 1,
        action: 4,
        long: '20-30cm',
        template: '20-25度',
        swim: '普通',
        decription1: '又名紅耳龜，生存於北美密西西比河及格蘭德河流域。現已被不少家庭當作寵物來養殖或觀賞用寵物。 黃腹彩龜及坎伯蘭彩龜是其同種近親。',
        decription2: '在河川、湖沼和濕地廣泛地生活。喜好日光浴，在水面上的岩石和漂流的木材上。受驚時會迅速逃入水中。雜食性，以小型魚類、兩棲類、甲殼類、貝類、水草等為食。卵生，1次產2到25個蛋。',
        decription3: '巴西龜體健耐寒，食量奇大，適應力超強，在台灣不到20年間已完全本土化而逐漸取代了最普遍的斑龜，成為台灣最普遍的龜類，事實上巴西龜的威脅不僅存在於台灣，在歐洲和東南亞都有類似的情況。'
    }, {
        name: '東部錦龜',
        eng_name: 'east',
        img_count: 3,
        feed: 2,
        action: 4,
        long: '15-25cm',
        template: '25-30度',
        swim: '極佳',
        decription1: '錦龜喜歡池塘，沼澤，小溪和湖泊，這些地方流速緩慢，底部鋪著軟軟的淤泥，並有合適的曬背場地和豐富的水生植物。錦龜是日行性的，夜間則在池底或有部分浸在水中的物體上睡覺。當太陽升起的時候它們變得活躍起來，再曬上幾個小時的背，然後在上午的晚些時候進行覓食。到傍晚它們可能會再次覓食。',
        decription2: '東錦為雜食性龜龜，偏好肉食，在野外它們以魚、蝦、青蛙、蝸牛、蚯蚓、蝌蚪等為主食，偶爾也會吃食藻類、水生植物和腐肉。人工飼養應注意營養的全面，飼料魚、河蝦、蔬菜等都可以投喂，優質水龜龜糧也是不錯的選擇。',
        decription3: '東錦的水性非常好，較大的個體深水飼養無壓力，但是還是需要曬台哦。'
    }, {
        name: '擬鱷龜',
        eng_name: 'fake',
        img_count: 3,
        feed: 1,
        action: 0,
        long: '40-50cm',
        template: '22-28度',
        swim: '普通',
        decription1: '生性十分兇猛，不建議與之互動。',
        decription2: '擬鱷龜是幾乎全水棲性除產卵和曬太陽外不上岸。夜行性，偏向肉食性的雜食性，捕捉魚類，鳥類，兩棲類，爬行類，小型哺乳類動物，軟體動物，甲殼類，昆蟲。也食腐肉和一些植物。',
        decription3: '獵食方式是埋伏突襲，攻擊速度很快。牠們位於食物鏈上層，除了鱷魚外幾乎沒有天敵。'
    }, {
        name: '真鱷龜',
        eng_name: 'alligator',
        img_count: 3,
        feed: 3,
        action: 0,
        long: '75-95cm',
        template: '28-30度',
        swim: '佳',
        decription1: '生性十分兇猛，不建議與之互動',
        decription2: '背甲的邊緣有許多像鋸齒狀的突起，眼睛長在口的兩側，它的舌上長有一個鮮紅色蠕蟲狀的肉突，用來吸引魚類自動游向它們的嘴中。，通過中間的圓形肌肉與舌頭相連。 兩端能夠自由伸縮活動。它的尾巴又細又長堅硬得像鋼鞭一般，與其它龜不同的是它的頭和腳不能縮入殼內。',
        decription3: '通常生活在河流、湖泊、池塘及沼澤中，它們很少到陸地上活動，只有在繁殖季節，雌龜才會爬上岸，選擇適合的地方產卵，每次可產30-120枚卵，經過100天左右的時間，幼龜便可出殼，幼龜生長速度十分驚人，一年便可長到2公斤，因此被視為強勢外來種。'
    }, {
        name: '地圖龜',
        eng_name: 'map',
        img_count: 3,
        feed: 3,
        action: 2,
        long: '15-25cm',
        template: '26-28度',
        swim: '極佳',
        decription1: '主要分布在美國大陸，有著許多獨特的特徵。地圖龜的皮膚和盾片上有著富有特色的紋路，看起來就像是地圖上的等高線，這正是它名字的由來。',
        decription2: '地圖龜是雜食性動物，魚蝦肉類、植物，甚至是腐肉都在它的食譜上。另外地圖龜相較於其它龜神經比較敏感，對外界刺激經常作出過激反應，時常上演高難度動作，這也是它被稱作「龜種哈士奇」的緣由。',
        decription3: '地圖龜與多數龜種相同，以排泄孔位置、體態大小、前爪長短等作為性別辨識基準，而雄性地圖龜體型(長度約5~12公分)將明顯小於雌性地圖龜(長度可達10~25公分)。'
    }, {
        name: '甜甜圈龜',
        eng_name: 'redbody',
        img_count: 3,
        feed: 2,
        action: 3,
        long: '30-40cm',
        template: '25度',
        swim: '差',
        decription1: '原產於美國和墨西哥，主要棲息於流速中等的溪澗和河流、大型湖泊、泉流，偶爾也會待在有潮汐漲落的鹽鹼沼澤。甜甜圈龜是彩龜屬里比較大型的龜類，稚龜的背甲顏色與巴西龜有些相似。',
        decription2: '在自然界，食貝類、甲殼類、魚類及藻類。人工飼養條件下，喜食瘦肉、魚及蔬菜葉。甜甜圈龜性情和善活躍，無攻擊性，是一種比較容易飼養的龜類。',
        decription3: '每年5～7月為繁殖季節，每次產卵1—9枚，卵長徑33～43毫米，短徑22～33毫米。由於甜甜圈龜分類眾多，區別不是很大，又生活在同一片區域內，所以雜交的現象也經常發生，導致種屬內的鑑別比較困難。'
    }, {
        name: '屋頂龜',
        eng_name: 'roof',
        img_count: 3,
        feed: 3,
        action: 1,
        long: '15cm',
        template: '15-29度',
        swim: '極佳',
        decription1: '又名剃刀麝香龜，牠們是水生型澤龜，會花大部分的時間在水中生活，生活的環境會有大量植被、水流緩慢的小溪、池塘 、溪流和沼澤。',
        decription2: '體健耐寒 對太陽需求不高，不必常曬也很怕陽光的熱度，飼主帶牠們去曬太陽時若不注意時間或溫度很容易曬死(在野外主要在淺水區露出背部曬太陽)。',
        decription3: '北美龜種通常都較具攻擊性,屋頂龜也不例外,牠們的頸部很長.所以拿取時要小心避免被咬到.更不要放生這種龜,否則會像巴西龜一樣適應台灣的環境繁衍族群進而危及本土龜類的生存。'
    }

]

const land_data = [
    {
        name: '亞達伯拉象龜',
        eng_name: 'yada',
        img_count: 4,
        feed: 4,
        action: 2,
        long: '90-130cm',
        template: '25-30度',
        humidity: '70-80%',
        decription1: '亞達是典型的海島型陸龜，它們棲息於塞舌爾群島的亞達伯拉環礁的紅樹林沼澤、灌木林、以及沿海海灘和沙丘，在缺乏大型動物的荒島上，它們逐漸演化成了當地體型最大的動物。',
        decription2: '由於其巨大的體型和破壞力，成體後的亞達一般的室內環境是難以承受的，所以不得不推薦室外環境飼養。',
        decription3: '亞達伯拉象龜幾乎是純粹的素食主義者，它們會吃草本植物，也會吃一些植物的莖葉，甚至是一些木質植物的莖。人工飼養建議使用育歸的海島森林型陸龜糧作為主食，3歲以上的亞成體或成體亞達因進食量巨大，也可以選用育歸的通用陸龜糧配合一些草類植物等一同投餵。'
    }, {
        name: '蘇卡達象龜',
        eng_name: 'sukada',
        img_count: 3,
        feed: 2,
        action: 4,
        long: '60-90cm',
        template: '30-35度',
        humidity: '50-60%',
        decription1: '屬於大型陸龜，行動遲緩卻力大無窮，麒麟狀的粗大前肢是它挖土挖坑的好工具，雖然身強力壯但蘇卡達其實是一種非常溫順的龜。',
        decription2: '蘇卡達的食譜以高纖牧草為主，盡量不要投餵水分含量較大的蔬菜水果，容易引起腸胃不適，並且蘇卡達對飲食中鈣質需求頗高，而水分較大的果蔬通常不能滿足需求。',
        decription3: '雄龜一般體型更大，腹部有明顯凹陷，尾巴粗長；而雌性一般體型更小，腹部平坦，尾巴細短。蘇卡達交配在9月至11月的雨季之後最頻繁發生。'
    }, {
        name: '紅腿象龜',
        eng_name: 'redleg',
        img_count: 3,
        feed: 2,
        action: 4,
        long: '35-40cm',
        template: '27-30度',
        humidity: '70-80%',
        decription1: '牠們的自然棲息地範圍大概是從熱帶稀樹草原與森林的邊緣周圍的亞馬遜河流域。牠們是雜食性動物，會進食各式各樣的植物，主要是水果，牠們亦會進食還草、花、菌類、腐肉和無脊椎動物。',
        decription2: '成年紅腿象龜的甲殼通常是一個細長的橢圓形，兩側平行，但雄性的兩側會向內灣。牠們的背甲高高隆起，而且十分光滑，而每一塊盾甲的中間是淺黃色。',
        decription3: '雄性體型稍大，體色更加豐富多彩。生活從北部的亞馬遜基本的雄性，其背甲呈「蜂腰」，即背甲兩側會有輕微凹陷，底甲亦會有輕微凹陷，以幫助在交配時穩定身體。男性的尾巴較長，肌肉較發達，而女性的尾巴很短，呈圓錐形。'
    }, {
        name: '四爪陸龜',
        eng_name: 'four',
        img_count: 3,
        feed: 3,
        action: 3,
        long: '15-25cm',
        template: '27-30度',
        humidity: '30-40%',
        decription1: '產地以哈薩克斯坦南部荒漠地區和天山山前地帶為多，俄羅斯、印度、巴基斯坦、伊朗等地也有分布。但在中國僅分布於新疆霍城縣境內，為中國國家一級保護動物。',
        decription2: '四爪陸龜的頭骨結構與大多數陸龜屬成員相似，不過它們每隻腳上都有四個腳趾，而其它陸龜屬成員都是5趾。四爪陸龜的雌雄差異非常明顯，雄性比雌性的體型小的多，但是尾巴要更加粗長，年齡較大的雄性腹甲會有明顯的凹陷。',
        decription3: '人工飼養的四爪陸龜以各種人工栽培的蔬菜和觀賞植物為食。包括草坪用草，南瓜，玉米，綠葉，蘋果（去核），蒲公英之類的在後院中常見的雜草之類無毒的樹木和灌木的葉和花。'
    }, {
        name: '赫曼陸龜',
        eng_name: 'herman',
        img_count: 3,
        feed: 2,
        action: 5,
        long: '18-28cm',
        template: '19-27度',
        humidity: '60-70%',
        decription1: '屬於中小型陸龜，甲殼的顏色黑黃相間，並且龜殼的亮度會隨著年齡的增長而褪減。它們的的呈四肢淺灰色至褐色，有鱗片及一些黃色的斑紋，尾部有一條呈角狀的尖端。',
        decription2: '赫曼陸龜是地中海型陸龜中非常活潑的種類，而且它不像其他的陸龜品種只是在幼龜和亞成階段才表現出活潑好動。',
        decription3: '赫曼陸龜成體後也一樣保持著旺盛的活動力。對於飼養者赫曼陸龜表現的非常親人，飼養不用多長時間，它就會認得主人，並形成固定的行為模式和習慣。'
    }, {
        name: '豹紋陸龜',
        eng_name: 'leopard',
        img_count: 3,
        feed: 4,
        action: 3,
        long: '32-45cm',
        template: '25-32度',
        humidity: '60-80%',
        decription1: '屬於中大型陸龜，他和蘇卡達一樣也是產自遼闊的非洲大陸，豹紋陸龜擁有厚實而高聳的背甲，背甲是以淡黃色為基礎，上面斑斑駁駁地分佈著不規則黑色斑點，與花豹皮膚上的斑紋頗為相似，豹紋陸龜也因此得名。',
        decription2: '豹紋陸龜主要以草本植物為食，偶爾會吃一些植物嫩葉和花卉，有時候也會通過進食食肉動物糞便的方式補充鈣質。人工飼養不推薦投餵大量水果蔬菜，豹紋陸龜非常容易因此而拉稀腸炎，建議使用專業沙漠型陸龜糧作為主食，在還原豹紋陸龜野外攝食結構的同時，避免因地域菌種差異造成腸胃的不適。',
        decription3: '豹紋陸龜苗，它們看上去嬌小可愛，身上的斑紋也更鮮豔，頗得人們的喜愛，但豹紋陸龜苗難養也是公認的，幼龜對濕度對要求比成龜更高，同時幼龜對蛋白質對需求更高，而且腸胃更脆弱，因此建議使用陸龜幼龜糧進行飼餵。'
    }, {
        name: '緬甸陸龜',
        eng_name: 'myanmar',
        img_count: 3,
        feed: 2,
        action: 4,
        long: '20-40cm',
        template: '26-28度',
        humidity: '60-70%',
        decription1: '屬於中小型陸龜，緬甸陸龜會出現在東南亞的各種森林類型中，包括開放落葉闊葉林、山地和丘陵常綠、混合半常綠闊葉林、竹子、松樹和次生林。',
        decription2: '緬甸陸龜是一種雨林型陸龜，對濕度要求較高，佈置環境的時候需要用保濕性較好的墊材，緬甸陸龜在原產地通常會選擇溫濕度穩定的上午或傍晚出來活動，所以在人工飼養時也要保證溫度的穩定。',
        decription3: '它們通常會食用草本植物的莖葉、果實、植物花卉、蘑菇、節肢動物、軟體動物以及各種動物屍體。人工飼養建議使用專業雨林陸龜糧。'
    }, {
        name: '印度星龜',
        eng_name: 'star',
        img_count: 3,
        feed: 4,
        action: 3,
        long: '15-20cm',
        template: '26-32度',
        humidity: '50-60%',
        decription1: '屬於中小型陸龜，性格溫順。而它身上放線狀的花紋如同天上的星星一樣，正是因為這樣特殊的花紋，我們才叫它印度星龜，雌性一般能長到17-20公分，而雄性一般只能長到12-15公分。',
        decription2: '作為森林型陸龜，佈置合適的水盆提供乾淨的水源還是非常有必要的，與蘇卡達象龜類似，如果長時間缺水，印星會有脫水和結石的風險。',
        decription3: '印度星龜的食性非常多樣，主要包括花朵、水果、植物嫩葉和草本植物，偶爾也有觀察到他們吃一些腐肉，但他們並不會以此為主食。人工飼養建議使用專業陸龜糧作為主食，在還原印度星龜野外攝食結構的同時，避免因地域菌種差異造成腸胃的不適。'
    },
]

const link = document.location.href;
const detailURL = new URL(link);
const params = detailURL.searchParams;
let data_key = [];
for (let pair of params.entries()) {
    data_key.push(pair[1]);
}
const data_id = data_key[0];
const data_kind = data_key[1];

const item_name = document.querySelector('#item_name');
const feed = document.querySelector('#feed');
const action = document.querySelector('#action');
const long = document.querySelector('#long');
const tem = document.querySelector('#tem');
const decription1 = document.querySelector('#decription1');
const decription2 = document.querySelector('#decription2');
const decription3 = document.querySelector('#decription3');
const swiper = document.querySelector('#intro_img_swiper');
const bread_active = document.querySelector('#bread_active');
let feed_star = '';
let action_star = '';
let swiper_str = '';

if (data_kind == 'water') {
    reset();
    if (action.classList.contains('text-danger')) {
        action.classList.remove('text-danger');
    }
    render(water_data, data_kind);
}

if (data_kind == 'land') {
    reset();
    render(land_data, data_kind);
}

function render(data_arr, kind) {
    const current_item = data_arr[data_id];
    if (current_item.feed == '保育類無法飼養') {
        feed_star = '保育類無法飼養';
        action_star = '無法飼養';
        swipertxt(current_item);
    } else {
        for (let i = 1; i <= current_item.feed; i++) {
            feed_star += `<img src="../images/icon_star.svg" alt="星星圖">`;
        }
        if (current_item.action == 0) {
            action_star = '性格兇猛，不建議互動 !';
            action.classList.add('text-danger');
        } else {
            for (let j = 1; j <= current_item.action; j++) {
                action_star += `<img src="../images/icon_star.svg" alt="星星圖">`;
            }
        }
        swipertxt(current_item);

    }
    bread_active.textContent = current_item.name;
    item_name.textContent = current_item.name;
    feed.innerHTML = feed_star;
    action.innerHTML = action_star;
    long.textContent = current_item.long;
    tem.textContent = current_item.template;
    if (kind == 'water') {
        const swim = document.querySelector('#swim');
        swim.textContent = current_item.swim;
    } else if (kind == 'land') {
        const hum = document.querySelector('#hum');
        hum.textContent = current_item.humidity;

    }
    decription1.textContent = current_item.decription1;
    decription2.textContent = current_item.decription2;
    decription3.textContent = current_item.decription3;
    swiper.innerHTML = swiper_str;
}
function swipertxt(current_item) {
    for (let k = 1; k <= current_item.img_count; k++) {
        if (k == 1) {
            swiper_str += `
                <div class="carousel-item active" data-bs-interval="2000">
                    <img src="../images/${data_kind}/${current_item.eng_name}/${current_item.eng_name}1.jpg" height="300" class="d-block w-100 object-cover" alt="...">
                </div>`
        } else {
            swiper_str += `
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="../images/${data_kind}/${current_item.eng_name}/${current_item.eng_name}${k}.jpg" height="300" class="d-block w-100 object-cover" alt="...">
                </div>`
        }
    }
}
function reset() {
    feed_star = '';
    action_star = '';
    swiper_str = '';
}