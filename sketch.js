var input;
var Bingbutton, Googlebutton, Yandexbutton, AskButton, AolButton;
var DuckDuckGoButton, GooButton;
var LycosButton, DaumKakaoButton, ExciteButton;
var asImg, as;
var NaverButton, EcosiaButton;
var YahooButton, ExaleadButton;
var WallaButton, WebCrawlerButton;
var MetaCrawlerButton, EgerinButton, MojeekButton, LeitButton;
var BingbuttonHindi, GooglebuttonHindi, YandexbuttonHindi, AskButtonHindi, AolButtonHindi;
var DuckDuckGoButtonHindi, GooButtonHindi;
var LycosButtonHindi, DaumKakaoButtonHindi, ExciteButtonHindi;
var NaverButtonHindi, EcosiaButtonHindi;
var YahooButtonHindi, ExaleadButtonHindi;
var WallaButtonHindi, WebCrawlerButtonHindi;
var MetaCrawlerButtonHindi, EgerinButtonHindi;
var MojeekButtonHindi, LeitButtonHindi;
var Hindi, English;
var language = "english";


function preload(){
asImg = loadImage("ameysearcher.png");

    
}

function setup() {
    createCanvas(windowWidth,windowHeight);


    input = createInput("","text").attribute("placeholder","Search Web...");
    input.position(5,300);
    input.class("input");

    Bingbutton = createButton("Bing Search");
    Bingbutton.position(5, input.y +150);
    Bingbutton.mouseClicked(bing);
    Bingbutton.class("button");
   
    Googlebutton = createButton("Google Search");
    Googlebutton.position(5,Bingbutton.y + 150);
    Googlebutton.mouseClicked(google);
    Googlebutton.class("button")

    Yandexbutton = createButton("Yandex Search");
    Yandexbutton.position(5, Googlebutton.y+150);
    Yandexbutton.mouseClicked(yandex);
    Yandexbutton.class("button")

    AskButton = createButton("Ask Search");
    AskButton.position(5,Yandexbutton.y +150);
    AskButton.mouseClicked(ask);
    AskButton.class("button")




    DuckDuckGoButton = createButton("DuckDuckGo Search");
    DuckDuckGoButton.position(5, AskButton.y + 150);
    DuckDuckGoButton.mouseClicked(duckduckgo);
    DuckDuckGoButton.class("button")

    AolButton = createButton("Aol Search");
    AolButton.position(5,DuckDuckGoButton.y + 150);
    AolButton.mouseClicked(aol);
    AolButton.class("button")

    NaverButton = createButton("Naver Search");
    NaverButton.position(5, DuckDuckGoButton.y+300);
    NaverButton.mouseClicked(naver);
    NaverButton.class("button");

    GooButton = createButton("Goo Search");
    GooButton.position(5, NaverButton.y +150);
    GooButton.mouseClicked(goo);
    GooButton.class("button")

    LycosButton = createButton("Lycos Search");
    LycosButton.position(5, GooButton.y+150);
    LycosButton.mouseClicked(lycos);
    LycosButton.class("button")

    DaumKakaoButton = createButton("Daum Kakao Search");
    DaumKakaoButton.position(5,LycosButton.y+150);
    DaumKakaoButton.mouseClicked(daumkakao);
    DaumKakaoButton.class("button")

    ExciteButton = createButton("Excite Search");
    ExciteButton.position(5, DaumKakaoButton.y+ 150);
    ExciteButton.mouseClicked(excite);
    ExciteButton.class("button")

    EcosiaButton = createButton("Ecosia Search");
    EcosiaButton.position(5,ExciteButton.y+150);
    EcosiaButton.mouseClicked(ecosia);
    EcosiaButton.class("button");

    YahooButton = createButton("Yahoo Search");
    YahooButton.position(5,EcosiaButton.y+150);
    YahooButton.mouseClicked(yahoo);
    YahooButton.class("button");

    ExaleadButton = createButton("Exalead Search");
    ExaleadButton.position(5,YahooButton.y + 150);
    ExaleadButton.mouseClicked(exalead);
    ExaleadButton.class("button");

    WallaButton = createButton("Walla! Search");
    WallaButton.position(5, ExaleadButton.y + 150);
    WallaButton.mouseClicked(walla);
    WallaButton.class("button");

    WebCrawlerButton = createButton("Web Crawler Button");
    WebCrawlerButton.position(5,WallaButton.y + 150);
    WebCrawlerButton.mouseClicked(webcrawler);
    WebCrawlerButton.class("button");

    MetaCrawlerButton = createButton("Meta Crawler Search");
    MetaCrawlerButton.position(5,WebCrawlerButton.y + 150);
    MetaCrawlerButton.mouseClicked(metacrawler);
    MetaCrawlerButton.class("button");

    EgerinButton = createButton("Egerin Search");
    EgerinButton.position(5,MetaCrawlerButton.y + 150);
    EgerinButton.mouseClicked(egerin);
    EgerinButton.class("button");

    MojeekButton = createButton("Mojeek Search");
    MojeekButton.position(5,EgerinButton.y + 150);
    MojeekButton.mouseClicked(mojeek);
    MojeekButton.class("button");

    LeitButton = createButton("Leit Search");
    LeitButton.position(5,MojeekButton.y + 150);
    LeitButton.mouseClicked(leit);
    LeitButton.class("button");

    BingbuttonHindi = createButton("बिंग खोज");
    BingbuttonHindi.position(5, input.y +150);
    BingbuttonHindi.mouseClicked(bing);
    BingbuttonHindi.class("button");
    BingbuttonHindi.hide();
   
    GooglebuttonHindi = createButton("गूगल खोज");
    GooglebuttonHindi.position(5,Bingbutton.y + 150);
    GooglebuttonHindi.mouseClicked(google);
    GooglebuttonHindi.class("button");
    GooglebuttonHindi.hide();

    YandexbuttonHindi = createButton("यान्डेक्स खोज");
    YandexbuttonHindi.position(5, Googlebutton.y+150);
    YandexbuttonHindi.mouseClicked(yandex);
    YandexbuttonHindi.class("button");
    YandexbuttonHindi.hide();

    AskButtonHindi = createButton("आसक खोज");
    AskButtonHindi.position(5,Yandexbutton.y +150);
    AskButtonHindi.mouseClicked(ask);
    AskButtonHindi.class("button");
    AskButtonHindi.hide();




    DuckDuckGoButtonHindi = createButton("डकडक्को खोज");
    DuckDuckGoButtonHindi.position(5, AskButton.y + 150);
    DuckDuckGoButtonHindi.mouseClicked(duckduckgo);
    DuckDuckGoButtonHindi.class("button");
    DuckDuckGoButtonHindi.hide();

    AolButtonHindi = createButton("एओएल खोज");
    AolButtonHindi.position(5,DuckDuckGoButton.y + 150);
    AolButtonHindi.mouseClicked(aol);
    AolButtonHindi.class("button");
    AolButtonHindi.hide();

    NaverButtonHindi = createButton("नेवर खोज");
    NaverButtonHindi.position(5, DuckDuckGoButton.y+300);
    NaverButtonHindi.mouseClicked(naver);
    NaverButtonHindi.class("button");
    NaverButtonHindi.hide();

    GooButtonHindi = createButton("गू खोज");
    GooButtonHindi.position(5, NaverButton.y +150);
    GooButtonHindi.mouseClicked(goo);
    GooButtonHindi.class("button");
    GooButtonHindi.hide();

    LycosButtonHindi = createButton("लाइकोस खोज");
    LycosButtonHindi.position(5, GooButton.y+150);
    LycosButtonHindi.mouseClicked(lycos);
    LycosButtonHindi.class("button");
    LycosButtonHindi.hide();

    DaumKakaoButtonHindi = createButton("दाउन काकाओ खोज");
    DaumKakaoButtonHindi.position(5,LycosButton.y+150);
    DaumKakaoButtonHindi.mouseClicked(daumkakao);
    DaumKakaoButtonHindi.class("button");
    DaumKakaoButtonHindi.hide();

    ExciteButtonHindi = createButton("एकसाट खोज");
    ExciteButtonHindi.position(5, DaumKakaoButton.y+ 150);
    ExciteButtonHindi.mouseClicked(excite);
    ExciteButtonHindi.class("button");
    ExciteButtonHindi.hide();

    EcosiaButtonHindi = createButton("इकोसिया खोज");
    EcosiaButtonHindi.position(5,ExciteButton.y+150);
    EcosiaButtonHindi.mouseClicked(ecosia);
    EcosiaButtonHindi.class("button");
    EcosiaButtonHindi.hide();

    YahooButtonHindi = createButton("याहू खोज");
    YahooButtonHindi.position(5,EcosiaButton.y+150);
    YahooButtonHindi.mouseClicked(yahoo);
    YahooButtonHindi.class("button");
    YahooButtonHindi.hide();

    ExaleadButtonHindi = createButton("एक्सेलीड खोज");
    ExaleadButtonHindi.position(5,YahooButton.y + 150);
    ExaleadButtonHindi.mouseClicked(exalead);
    ExaleadButtonHindi.class("button");
    ExaleadButtonHindi.hide();

    WallaButtonHindi = createButton("वाला! खोज");
    WallaButtonHindi.position(5, ExaleadButton.y + 150);
    WallaButtonHindi.mouseClicked(walla);
    WallaButtonHindi.class("button");
    WallaButtonHindi.hide();

    WebCrawlerButtonHindi = createButton("वेबक्रॉलर खोज");
    WebCrawlerButtonHindi.position(5,WallaButton.y + 150);
    WebCrawlerButtonHindi.mouseClicked(webcrawler);
    WebCrawlerButtonHindi.class("button");
    WebCrawlerButtonHindi.hide();

    MetaCrawlerButtonHindi = createButton("मेटाक्रॉलर खोज");
    MetaCrawlerButtonHindi.position(5,WebCrawlerButton.y + 150);
    MetaCrawlerButtonHindi.mouseClicked(metacrawler);
    MetaCrawlerButtonHindi.class("button");
    MetaCrawlerButtonHindi.hide();

    EgerinButtonHindi = createButton("एगेरिन खोज");
    EgerinButtonHindi.position(5,MetaCrawlerButton.y + 150);
    EgerinButtonHindi.mouseClicked(egerin);
    EgerinButtonHindi.class("button");
    EgerinButtonHindi.hide();

    MojeekButtonHindi = createButton("मोजीक खोज");
    MojeekButtonHindi.position(5,EgerinButton.y + 150);
    MojeekButtonHindi.mouseClicked(mojeek);
    MojeekButtonHindi.class("button");
    MojeekButtonHindi.hide();

    LeitButtonHindi = createButton("लीट खोज");
    LeitButtonHindi.position(5,MojeekButton.y + 150);
    LeitButtonHindi.mouseClicked(leit);
    LeitButtonHindi.class("button");
    LeitButtonHindi.hide();

    Hindi = createButton("हिंदी Language");
    Hindi.position(width - 100,50);
    Hindi.class("langbutton");
    Hindi.mouseClicked(tohindi);

    English = createButton("English Language");
    English.position(width - 100,50);
    English.class("langbutton");
   English.mouseClicked(toenglish);
   English.hide();



    


}

function draw() {
    imageMode(CENTER);
    image(asImg,width/2,150,280,280);
    textSize(15)

}

function bing(){
    window.open("https://www.bing.com/search?q="+input.value())
}

function google(){
    window.open("https://www.google.com/search?q="+input.value())
}

function yandex(){
    window.open("https://yandex.com/search/?text="+input.value())
}

function ask(){
    window.open("https://www.ask.com/web?q="+input.value())
}

function aol(){
    window.open("https://search.aol.com/aol/search?q="+input.value())
}

function duckduckgo(){
    window.open("https://duckduckgo.com/?q="+input.value())
}

function goo(){
    window.open("https://search.goo.ne.jp/web.jsp?MT="+input.value())
}

function lycos(){
    window.open("https://search.lycos.com/web/?q="+input.value());
}

function daumkakao(){
    window.open("https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q="+input.value());
}

function excite(){
    window.open("https://results.excite.com/serp?q="+input.value())
}

function naver(){
    window.open("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query="+input.value())
}

function ecosia(){
    window.open("https://www.ecosia.org/search?method=index&q="+input.value())
}

function yahoo(){
    window.open("https://search.yahoo.com/search?q="+input.value());
}

function exalead(){
    window.open("https://www.exalead.com/search/web/results/?q="+input.value());
}

function walla(){
    window.open("https://search.walla.co.il/?q="+input.value());
}

function webcrawler(){
    window.open("https://www.webcrawler.com/serp?q="+input.value());
}
function metacrawler(){
    window.open("https://www.metacrawler.com/serp?q="+input.value());
}
function egerin(){
    window.open("https://egerin.com/search/?type=Web&start=0&image_size=&image_color=&image_date=&load_more=&q="+input.value());
}
function mojeek(){
    window.open("https://www.mojeek.com/search?q="+input.value());
}
function leit(){
    window.open("http://leit.is/leita?utf8=%E2%9C%93&search="+input.value());
}

function tohindi(){
    Hindi.hide();
    language = "hindi";
    Bingbutton.hide();
    Googlebutton.hide();
    Yandexbutton.hide();
    AskButton.hide();
    MetaCrawlerButton.hide();
    DuckDuckGoButton.hide();
    EcosiaButton.hide();
    NaverButton.hide();
    AolButton.hide();
    EgerinButton.hide();
    GooButton.hide();
    LycosButton.hide();
    DaumKakaoButton.hide();
    ExciteButton.hide();
    MojeekButton.hide();
    YahooButton.hide();
    ExaleadButton.hide();
    WallaButton.hide();
    WebCrawlerButton.hide();
    LeitButton.hide();
    English.show();
    BingbuttonHindi.show();
    GooglebuttonHindi.show();
    YandexbuttonHindi.show();
    AskButtonHindi.show();
    MetaCrawlerButtonHindi.show();
    DuckDuckGoButtonHindi.show();
    EcosiaButtonHindi.show();
    NaverButtonHindi.show();
    AolButtonHindi.show();
    EgerinButtonHindi.show();
    GooButtonHindi.show();
    LycosButtonHindi.show();
    DaumKakaoButtonHindi.show();
    ExciteButtonHindi.show();
    MojeekButtonHindi.show();
    YahooButtonHindi.show();
    ExaleadButtonHindi.show();
    WallaButtonHindi.show();
    WebCrawlerButtonHindi.show();
    LeitButtonHindi.show();
    
}
function toenglish(){
    Hindi.show();
    language = "english";
    Bingbutton.show();
    Googlebutton.show();
    Yandexbutton.show();
    AskButton.show();
    MetaCrawlerButton.show();
    DuckDuckGoButton.show();
    EcosiaButton.show();
    NaverButton.show();
    AolButton.show();
    EgerinButton.show();
    GooButton.show();
    LycosButton.show();
    DaumKakaoButton.show();
    ExciteButton.show();
    MojeekButton.show();
    YahooButton.show();
    ExaleadButton.show();
    WallaButton.show();
    WebCrawlerButton.show();
    LeitButton.show();
    English.hide();
    BingbuttonHindi.hide();
    GooglebuttonHindi.hide();
    YandexbuttonHindi.hide();
    AskButtonHindi.hide();
    MetaCrawlerButtonHindi.hide();
    DuckDuckGoButtonHindi.hide();
    EcosiaButtonHindi.hide();
    NaverButtonHindi.hide();
    AolButtonHindi.hide();
    EgerinButtonHindi.hide();
    GooButtonHindi.hide();
    LycosButtonHindi.hide();
    DaumKakaoButtonHindi.hide();
    ExciteButtonHindi.hide();
    MojeekButtonHindi.hide();
    YahooButtonHindi.hide();
    ExaleadButtonHindi.hide();
    WallaButtonHindi.hide();
    WebCrawlerButtonHindi.hide();
    LeitButtonHindi.hide();
}