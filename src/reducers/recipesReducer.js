const initialState= {
  recipe:[
{name: 'Šaltibarščiai',
      about: '1. Į aukštą plačią stiklinę supilti kefyrą sudėti burokėlius Sutrinti blenderiu sutrintų šaltibarščių konsistencija labai sriubiška neplaukioja burokėlių juostelės ir nors burokėlių daug konsistencija neprimena košės ' +
      '2. Kefyrą su burokėliais supilti į lėkštę Pagardinti druska ir pipirais ' +
      '3. Į šaltibarščius berti smulkintų svogūnų laiškų krapų smulkintą agurką ir kiaušinį'},
{name: 'Sriuba',
    about: 'Žalius žirnius (šviežius ar šaldytus) suberkite į sultinį ir virkite apie 35 minutes. Pagardinkite druska ir pipirais, įmaišykite grietinę. patiekite su batono skrebučiais.'},
    {name: 'Blynai',
      about: '\n' +
      '1.\n' +
      'Kambario temperatūros kiaušinius įmušti į indą, išplakti, supilti pieną, išplakti.\n' +
      '2.\n' +
      'Suberti miltus, cukrų, žiupsnį druskos ir vėl gerai išplakti. Galima elektriniu plaktuvu, bus greičiau. Palikite tešlą kelias minutes pastovėti.\n' +
      '3.\n' +
      'Keptuvėje gerai įkaitinti truputį aliejaus arba sviesto. Vienam blyneliui dėti po daugmaž šaukštą tešlos. Kepti ant mažos arba vidutinės ugnies, apversti, kai viršutinėje pusėje atsiras burbuliukų.\n' +
      '4.\n' +
      'Tiekti iš karto iškeptus, pašildytose lėkštėse arba laikyti šiltoje orkaitėje, kad neatvėstų. Pagardinimui galima valgyti su uogiene arba pienu.\n'},
    {name: 'Lazanija',
      about: '\n' +
      '1.\n' +
      'Aliejuje apkepiname smulkiai pjaustytus svogūnus, susmulkintą česnaką ir mėsą iki tol, kol ji nebebus žalia.\n' +
      '2.\n' +
      'Dedame pomidorų pastą ir pomidorų gabalėlius. P`gal skonį pagardiname druska, pipirais, baziliku, paprikos bei raudonėlio prieskoniais, petražolėmis, užpilame vandenį ir viską gerai išmaišome. Masė turi būti ne per daug tiršta - jei reikia, įpilkite daugiau vandens. Taip ant silpnos ugnies paliekame troškintis apie 2 minutes.\n' +
      '3.\n' +
      'Į gilesnį indą dedame lakštus, pilame truputį faršo masės ir uždedame lazanijos lakštus ir taip toliau. Ant viršutinių lakštų, sudedame likusią faršo masę, ant jos tolygiai paskirstome grietinę ir užbartome sūriu.\n' +
      '4.\n' +
      'Orkaitę įkaitiname iki 200 C. Kepame, kol sūris gražiai apskrus, apie 40 minučių.\n'},
    {name: 'Duona',
      about: 'Visus sausus produktus sumaišyti. Į raugą įpilti dalį vandens, praskiesti. Supilti į sausą produktų mišinį, tada supilti ir likusį vandenį (koreguoti pagal tirštumą). Išminkyti, atidėti tešlos kitam kartui, tai bus raugas. Kokius 3-4 šaukštus. Tešlą formoje kildinti reikėtų apie parą. Galima ir apie 12 valandų. Kol iškils.\n' +
      '\n' +
      'Kepimo skardą iškloti kepimo popieriumi. Kepti apie 1 val. orkaitę įkaitinus iki 200 ar 180 laipsnių karščio. Priklausomai nuo orkaitės reikėtų koreguoti ir kepimo trukmę. Iškeptą duoną uždengti drėgnu lininių rankšluosčiu, kad pluta būtų minkštesnė.'},
    ],
  title: 'Receptai',
  warning: 'Pasirinkite pageidaujamą receptą kairėje'
};

const recipesReducer = (state=initialState, action)=>{
  return state;
};

export default recipesReducer