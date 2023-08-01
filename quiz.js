const questions1 = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London"],
        correctAnswer: 0,
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter"],
        correctAnswer: 0,
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "CH4"],
        correctAnswer: 0,
    },
];

// please remove lines from rows, all rows should start with numbers

const csv = `SNo,Ministry,Department,Item,Remarks
1,M/o Agri. and FW,D/o Ag. & FW,Administration of the Dangerous Machine ( Regulation) Act 1983,
2,M/o Agri. and FW,D/o Ag. & FW,﻿Convention on Locust Control,
3,M/o Agri. and FW,D/o Ag. & FW,"Liason with international org's, handling CARE goods",
4,M/o Agri. and FW,D/o Ag. & FW,Administration of the fertilizer (control) orders 1957,
5,M/o Agri. and FW,D/o Ag. & FW,"Administration of the insecticides Act, 1968",
6,M/o Agri. and FW,D/o Ag. & FW,Adulteration of agricultural products (other than food stuffs),
7,M/o Agri. and FW,D/o Ag. & FW,Agricultural Census,
8,M/o Agri. and FW,D/o Ag. & FW,Agricultural Economics & Statistics,
9,M/o Agri. and FW,D/o Ag. & FW,Bio-aesthetic planing,
10,M/o Agri. and FW,D/o Ag. & FW,Development of Agricultural industries excluding Cotton and Ginning,
11,M/o Agri. and FW,D/o Ag. & FW,"Development of Agricultural industries including Machinery, Fertilizer & Seeds (Only formulatin of demands & fixation of Targets)",
12,M/o Agri. and FW,D/o Ag. & FW,Financial assistance to State Soil Conservation Schemes,
13,M/o Agri. and FW,D/o Ag. & FW,Indian peoples natural calanity trust,
14,M/o Agri. and FW,D/o Ag. & FW,Land reclamation,
15,M/o Agri. and FW,D/o Ag. & FW,"Matters related to damage to crops and coordinating of relief measures necessiatated by drought, hailstorm, pest-attacks, cold wave and frost",
16,M/o Agri. and FW,D/o Ag. & FW,Matters related to loss of human life due to drought ,
17,M/o Agri. and FW,D/o Ag. & FW,Monitoring of Pesticide residences at national level,
18,M/o Agri. and FW,D/o Ag. & FW,National land use & conservation Board,
19,M/o Agri. and FW,D/o Ag. & FW,﻿National Rainfed Area Authority (NRAA),
20,M/o Agri. and FW,D/o Ag. & FW,Organisation & development of extension eduction & trainng in the country,
21,M/o Agri. and FW,D/o Ag. & FW,Plant Quarantine,
22,M/o Agri. and FW,D/o Ag. & FW,"Price control of agricultural commodities except food grains, sugar and vanaspati, oil seeds, vegetable oils, cakes and fats, jute, cotton, tea",
23,M/o Agri. and FW,D/o Ag. & FW,Professins excluding veterniary practice,
24,M/o Agri. and FW,D/o Ag. & FW,Projection of demand of fertilizers & manures,
25,M/o Agri. and FW,D/o Ag. & FW,Quality control of fertilizers,
26,M/o Agri. and FW,D/o Ag. & FW,Shellac Industry,
27,M/o Agri. and FW,D/o Ag. & FW,Technology mission on oil seeds & pulses ,
28,M/o Agri. and FW,D/o Ag. & FW,On Farm Water Management,
29,M/o Agri. and FW,D/o Ag. & FW,﻿Crop Insurance.,
30,M/o Agri. and FW,D/o Ag. & FW,﻿Warehousing in rural areas including rural godowns.2,
31,M/o Agri. and FW,D/o Ag. & FW,"﻿Development of Cotton, Jute and Sugarcane.",
32,M/o Agri. and FW,D/o Ag. & FW,"﻿All attached and Subordinate Offices or other organisations concerned with any of the subjects specified in this list except the Directorate of Agricultural Aviation.",
33,M/o Agri. and FW,D/o Ag. & FW,Ware housing in rural areas including rural godowns,
34,M/o Agri. and FW,"D/o Agr, Res, & Edu.","All India soil and land use survey relating to research, trainig, co-relation, classification soil mapping & interpration",
35,M/o Agri. and FW,"D/o Agr, Res, & Edu.",ICAR,
36,M/o Agri. and FW,"D/o Agr, Res, & Edu.",Nationl Demonstrations ,
37,M/o Agri. and FW,"D/o Agr, Res, & Edu.",Plant animal and fish introduction & exploration,
38,M/o Agri. and FW,"D/o Agr, Res, & Edu.",Research and development on production & improvements of bio fuel plants,
39,M/o Ayush,M/o Ayush,All matters relating to the National Medicinal Plant Board,
40,M/o Ayush,M/o Ayush,"Ayurveda yoga naturopathy, unani, Siddha, Sowa and Homeopathy etc.",
41,M/o Ayush,M/o Ayush,Pharmacopoeia Commission for Indian Medicine and Homoeopathy,
42,M/o Ayush,M/o Ayush,Indian medicines,
43,M/o Ayush,M/o Ayush,Service matters of Indian system of medicine CGHS Doctors,
44,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,All organic/inorganic chemicals not specificially allotted to others,
45,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,Bhopal Gas Leak Disaster- special laws relating thereto,
46,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,Dye- stuffs and dye intermediates,
47,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,"Industries relating to production of Non-cellulosic synthetic fibres (Nylon,Polyster,acrylic etc)",
48,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,"Insecticides (Excluding the administration of the insecticides Act, 1968)",
49,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,Plastics including fabrication of plastic & moulded goods,
50,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,Synthetic Rubber,
51,M/o Chemical and Fertilizers,D/o Fertilizers,Administrative responsibility for the Indian potash limited,
52,M/o Chemical and Fertilizers,D/o Fertilizers,"Adminstration of the fertilizers (Movement control) order, 1960",
53,M/o Chemical and Fertilizers,D/o Fertilizers,IFFCO,
54,M/o Chemical and Fertilizers,D/o Fertilizers,"﻿Allocation and supply linkages for movement and distribution of urea in terms of assessment made by the Department of Agriculture and Farmers Welfare",
55,M/o Chemical and Fertilizers,D/o Fertilizers,﻿Krishak Bharati Cooperative Limited (KRIBHCO),
56,M/o Chemical and Fertilizers,D/o Pharmaceuticals,"﻿Drugs and Pharmaceuticals, excluding those specifically allotted to other departments.",
57,M/o Chemical and Fertilizers,D/o Pharmaceuticals,﻿All matters relating to National Institutes for Pharmacy Education and Research,
58,M/o Chemical and Fertilizers,D/o Pharmaceuticals,"﻿Medical Devices – Industry issues relating to promotion, production and manufacture; ",
59,M/o Chemical and Fertilizers,D/o Pharmaceuticals,"Bengal Chemicals & Pharmaceuticals limited, ",
60,M/o Chemical and Fertilizers,D/o Pharmaceuticals,Hindustan antibiotics Ltd.,
61,M/o Chemical and Fertilizers,D/o Pharmaceuticals,Karnatka antibiotics Ltd.,
62,M/o Chemical and Fertilizers,D/o Pharmaceuticals,Rajasthan antibiotics Ltd.,
63,M/o Civil Aviation,M/o Civil Aviation,Aircraft/ Air navigation/ Aerodrome except sanitized control of air navigation,
64,M/o Civil Aviation,M/o Civil Aviation,Commission of Railway safety,
65,M/o Civil Aviation,M/o Civil Aviation,Hotel Corporation of India & its subsidiaries  ,
66,M/o Coal,M/o Coal,"Coal Mines Labour Welfare Fund Act, 1947",
67,M/o Coal,M/o Coal,"Coal Mines PF & MP Act, 1948",
68,M/o Coal,M/o Coal,The Coal Mines PF organisation,
69,M/o Coal,M/o Coal,﻿Development and operation of coal washeries other than those for which the Department of Steel is responsible.,
70,M/o Coal,M/o Coal,﻿Low temperature carbonisation of coal and production of synthetic oil from coal,
71,M/o Coal,M/o Coal,The Coal Mines Welfare organisation ,
72,"M/o Comm & Industry (Vanijya Vibhag)",D/o Commerce,Agricultural and processed food products Export Development Authority,
73,M/o Comm & Industry,D/o Commerce,All matters related to foreign Trade,
74,M/o Comm & Industry,D/o Commerce,"Cadre Management of -Indian Trade Service, Indian Supply Service, Indian inspection service",
75,M/o Comm & Industry,D/o Commerce,Coordination for export Infrastructure,
76,M/o Comm & Industry,D/o Commerce,"Development and expansion of export productin in relatin to all commodities including-Agriculture, Marine, Industrial, Fuels, Minerals, Specific export oriented products (including plantation crops but excluding Jute Products & handicrafts)",
77,M/o Comm & Industry,D/o Commerce,"Development, Operation & Maintenance of National Public Procurement Portal",
78,M/o Comm & Industry,D/o Commerce,Directorate General of commercial intelligence & statistics ,
79,M/o Comm & Industry,D/o Commerce,,
80,M/o Comm & Industry,D/o Commerce,Directorate General of foreign Trade,
81,M/o Comm & Industry,D/o Commerce,Directorate General of Trade Remedies,
82,M/o Comm & Industry,D/o Commerce,Export credit & Export insurance,
83,M/o Comm & Industry,D/o Commerce,Export credit & Gurantee Corporation Ltd.,
84,M/o Comm & Industry,D/o Commerce,Free trade zones,
85,M/o Comm & Industry,D/o Commerce,Gems & Jewellary,
86,M/o Comm & Industry,D/o Commerce,Govt. e- Market Place,
87,M/o Comm & Industry,D/o Commerce,Import and export trade policy (excluding feature films matters),
88,M/o Comm & Industry,D/o Commerce,"India Trade Promotion Organisation & its subsidiaries,",
89,M/o Comm & Industry,D/o Commerce,Indian Diamond Institute,
90,M/o Comm & Industry,D/o Commerce,Indian Insitute of foreign Trade ,
91,M/o Comm & Industry,D/o Commerce,Indian Institute of packaging,
92,M/o Comm & Industry,D/o Commerce,"International agencies connected with trade policy UNCTAD, ESCAP, ECLA, EEC, GATT/WTO,ITC & CFC",
93,M/o Comm & Industry,D/o Commerce,"International Commodity Agreements (otherthan relating to wheat, sugar, jute & cotton)",
94,M/o Comm & Industry,D/o Commerce,International Customs Tarriff Bureau/Tarrif Commission,
95,M/o Comm & Industry,D/o Commerce,International Trade & Commercial Policy,
96,M/o Comm & Industry,D/o Commerce,Marine Products Export Development Authority,
97,M/o Comm & Industry,D/o Commerce,Matters related to concerned Export Promotion councils/Export Promotion Organisations,
98,M/o Comm & Industry,D/o Commerce,"Matters related to Export Promotion Board, Board of Trade & International Trade Advisory committee.",
99,M/o Comm & Industry,D/o Commerce,Minerals & Metals Trading corporation & its subsidiaries,
100,M/o Comm & Industry,D/o Commerce,"Policies of State Trading Corporation of India Ltd. And its subsidiaries Excluding- Handicrafts & Handlooms Export Corporation, Central Cottage Industries Corporation, Tea trading corporatio of India Ltd., Spicestrading corporationof India Ltd.",
101,M/o Comm & Industry,D/o Commerce,"Production, distribution & development of planatation crops, tea, coffee, rubber, spices, tobacco and cashew instant tea and instant coffee.",
102,M/o Comm & Industry,D/o Commerce,Projects & Equipments corporation of India Ltd.,
103,M/o Comm & Industry,D/o Commerce,Setting up of EPZ/AEZ/EOUs,
104,M/o Comm & Industry,D/o Commerce,Special Economic Zones,
105,M/o Comm & Industry,D/o Commerce,"Tea Board, Coffee, Rubber, Cardmom,Tobacco Boards",
106,M/o Comm & Industry,D/o Commerce,Trade Remedies,
107,M/o Comm & Industry,DPI&IT,"Administration of the Explosive Act, 1884 but not The Explosive substances Act, 1908",
108,M/o Comm & Industry,DPI&IT,Administration of the Indian Boilers Act ,
109,M/o Comm & Industry,DPI&IT,Assessment/allocation of raw materials ,
110,M/o Comm & Industry,DPI&IT,Cables,
111,M/o Comm & Industry,DPI&IT,Central Boilers Board ,
112,M/o Comm & Industry,DPI&IT,"Copyrights Act, 1957 and international conventions on copy rights",
113,M/o Comm & Industry,DPI&IT,Direct foreign and non-resident investment in industrial and service projects,
114,M/o Comm & Industry,DPI&IT,Footwear Design & Development Institute,
115,M/o Comm & Industry,DPI&IT,Foreign Investment implementation Authority ,
116,M/o Comm & Industry,DPI&IT,"Indian Rubber manufacturies research association, Mumbai",
117,M/o Comm & Industry,DPI&IT,Integrated development of logistics sector,
118,M/o Comm & Industry,DPI&IT,"Leather & leather goods industry, soaps & detergents",
119,M/o Comm & Industry,DPI&IT,License for civil aircraft production industry in consultation with M/o Civil Aviation,
120,M/o Comm & Industry,DPI&IT,Light Electrical Engineering Industries,
121,M/o Comm & Industry,DPI&IT,"Light Engineering Industries- Seving machines , Type writers, Weighing machines, Bicycles etc.",
122,M/o Comm & Industry,DPI&IT,"Light Industries- Plywood,Stationary, matches, cigarates etc",
123,M/o Comm & Industry,DPI&IT,Materials planning ,
124,M/o Comm & Industry,DPI&IT,Matters related to e-Commerce,
125,M/o Comm & Industry,DPI&IT,Matters relating to facilitating Ease of doing business,
126,M/o Comm & Industry,DPI&IT,Matters relating to start Ups.,
127,M/o Comm & Industry,DPI&IT,National council for cement and building materials,
128,M/o Comm & Industry,DPI&IT,Promotion of investment by overseas Indian in India,
129,M/o Comm & Industry,DPI&IT,Promtion of internal/retail trade,
130,M/o Comm & Industry,DPI&IT,"Raw films, Hard Board, Paper & Newsprint",
131,M/o Comm & Industry,DPI&IT,"Cables, Salt, Cement, ceramic,tiles & glass",
132,M/o Comm & Industry,DPI&IT,Standardisation of international product & Raw Materials,
133,M/o Comm & Industry,DPI&IT,Technical development including Tariff commission and United Nations Industrial development organisation,
134,M/o Comm & Industry,DPI&IT,"The Design Act, 2000",
135,M/o Comm & Industry,DPI&IT,"The Geographical Indications of Goods (Reg & Introduction) Act, 1999",
136,M/o Comm & Industry,DPI&IT,"The inflamable sustances Act, 1952",
137,M/o Comm & Industry,DPI&IT,"The Patents Act, 1970",
138,M/o Comm & Industry,DPI&IT,"The Semiconductor integrated circuits layout design Act, 2000",
139,M/o Comm & Industry,DPI&IT,"The Trade & Merchandise Marks Act, 1958",
140,M/o Comm & Industry,DPI&IT,Tyres & Tubes,
141,M/o Comm & Industry,DPI&IT,Welfare of traders & their employees,
142,M/o Comm & Industry,DPI&IT,WIPO,
143,M/o Communications,D/o Posts,India Post Payment Bank,
144,M/o Communications,D/o Telecomm'n,Centre for development o Telematics,
145,M/o Communications,D/o Telecomm'n,Post disinvestment matters relating to M/s Hindustan Teleprinters Ltd.,
146,M/o Communications,D/o Telecomm'n,Telecom Disputes settlement & Appellate Tribunal,
147,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,Cosumer Cooperatives,
148,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,National Test House,
149,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,"Prevention of the Blackmarketing & Maintenance of supplies of essential commodities Act, 1980",
150,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,Regulation of package commodities,
151,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,Specifications/standard & cods and ensuring quality control of bio- fuels for end uses,
152,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,"The Bureau of Indian Standards Act, 1986",
153,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,"The consumer production Act,1986",
154,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,"The emblems and names ( Prevention of improper use) Act, 1952",
155,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,"The Essential Commodities Act, 1980 ( for matters not being dealt with by other Ministries/ Departments)",
156,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,"The Spirituous Preparation (Inter-State Trade & Commerce) control Act, 1955",
157,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,"The standards of weigts and measures Act, 1976",
158,"M/o Consumer Affairs, Food and PD",D/o Consumer Affairs,Training in Legal Meterology,
159,"M/o Consumer Affairs, Food and PD",D/o Food & PD,Alcohol- industrial/potable from the molasses route.,
160,"M/o Consumer Affairs, Food and PD",D/o Food & PD,Central Werehosing Corporation,
161,"M/o Consumer Affairs, Food and PD",D/o Food & PD,"Directorate of Sugar, New Delhi",
162,"M/o Consumer Affairs, Food and PD",D/o Food & PD,"Directorate of vanaspati, vegetable oil & fats",
163,"M/o Consumer Affairs, Food and PD",D/o Food & PD,Food Corporation of India ,
164,"M/o Consumer Affairs, Food and PD",D/o Food & PD,"Industries relating to vanaspati, Oil seeds, Vegetable oils, Cakes, Fats & Sugar ( including development of sugar khandsari )",
165,"M/o Consumer Affairs, Food and PD",D/o Food & PD,"Price Control of Suger, Food grains & food stuffs ",
166,"M/o Consumer Affairs, Food and PD",D/o Food & PD,Public distribution system,
167,"M/o Consumer Affairs, Food and PD",D/o Food & PD,Standalone distilleries,
168,M/o Cooperation,M/o Cooperation,"Multi state cooperative sociaties Act,2002",
169,M/o Cooperation,M/o Cooperation,National Coopearative development Coopearation,
170,M/o Cooperation,M/o Cooperation,National Coopearative Organisation ,
171,M/o Cooperation,M/o Cooperation,Training of personnel of coopertive deptts and cooperative institutions,
172,M/o Corporate Affairs,M/o Corporate Affairs,Administration of Companies (Donation of National Funds) Act,
173,M/o Corporate Affairs,M/o Corporate Affairs,"Administration of the companies Act, 1956",
174,M/o Corporate Affairs,M/o Corporate Affairs,"Certain functions under Ch VII of Indian Partneship Act, 1937",
175,M/o Corporate Affairs,M/o Corporate Affairs,Competition commission of India,
176,M/o Corporate Affairs,M/o Corporate Affairs,"Exercise of functions under the socities registration Act, 1860 ",
177,M/o Corporate Affairs,M/o Corporate Affairs,Insolvency & Bankrupty Code,
178,M/o Corporate Affairs,M/o Corporate Affairs,Investor Education & protection fund Authority ,
179,M/o Corporate Affairs,M/o Corporate Affairs,"Limited liability partnership Acat, 2008",
180,M/o Corporate Affairs,M/o Corporate Affairs,National Financing Reporting Authority,
181,M/o Corporate Affairs,M/o Corporate Affairs,NCLAT,
182,M/o Corporate Affairs,M/o Corporate Affairs,NCLT,
183,M/o Corporate Affairs,M/o Corporate Affairs,SFIO,
184,M/o Corporate Affairs,M/o Corporate Affairs,"The chartered Accountants Act, 1949",
185,M/o Corporate Affairs,M/o Corporate Affairs,"The Coast & Works Accountants Act, 1959",
186,M/o Corporate Affairs,M/o Corporate Affairs,"The Companies Act, 2002",
187,M/o Corporate Affairs,M/o Corporate Affairs,"The Company Secretaries Act, 1980",
188,M/o Culture,M/o Culture,Acquisition of Indian & foreign art objects,
189,M/o Culture,M/o Culture,Anthropological survey of India,
190,M/o Culture,M/o Culture,"Central Insitutes of Higher Tibetan studies, Sarnath Buddhist Studies, ",
191,M/o Culture,M/o Culture,Distributio of gift book received from abroad,
192,M/o Culture,M/o Culture,Festivals of India abroad,
193,M/o Culture,M/o Culture,Gandhi Peace Prize,
194,M/o Culture,M/o Culture,History of Freedom movement,
195,M/o Culture,M/o Culture,Indian War Memorial,
196,M/o Culture,M/o Culture,Indira Gandhi Rashtriya Manav Sangrahalya,
197,M/o Culture,M/o Culture,International congress of orientalists,
198,M/o Culture,M/o Culture,Library related matters,
199,M/o Culture,M/o Culture,National Memorial Trust,
200,M/o Culture,M/o Culture,National School of Drama/ National theatre,
201,M/o Culture,M/o Culture,Nav Nalanda Mahavidyalya ,
202,M/o Culture,M/o Culture,Observance of centenaies & Anniversaries of importance personalities and events,
203,M/o Culture,M/o Culture,Open air theatres in rural areas and theatres in state capitals,
204,M/o Culture,M/o Culture,Presentation of books to foreign countries,
205,M/o Culture,M/o Culture,"Press Registration of Books Act, 1867",
206,M/o Culture,M/o Culture,Revision of Gazetters,
207,M/o Culture,M/o Culture,Sahitya/ Lalit Kala/ Sangeet Natak Academy,
208,M/o Culture,M/o Culture,"The delivery of Books and newspapers ( public Libraries) Act, 1954",
209,M/o Culture,M/o Culture,"The Indian Treasure - Trove Act, 1878",
210,M/o Culture,M/o Culture,"The public record Act, 1993",
211,M/o Defence,D/o Defence,Acquisitions etc of land and property for defence ,
212,M/o Defence,D/o Defence,Border roades development Board an border roads organization,
213,M/o Defence,D/o Defence,Canteen Stores Deptt.,
214,M/o Defence,D/o Defence,Cantonments/ cantonment Boards,
215,M/o Defence,D/o Defence,Capital acquisitions exclusive to defene services,
216,M/o Defence,D/o Defence,Central Coordinating agency for combating oil pollution in the coastal & marine environment .,
217,M/o Defence,D/o Defence,Civilian Services paid from Defence estimtes,
218,M/o Defence,D/o Defence,Coast- Guard Organisation Survillance of martine zone agaisnt oils spills,
219,M/o Defence,D/o Defence,Defence Accounts Department,
220,M/o Defence,D/o Defence,Hydrographic surveys and proparation of navigational Charts,
221,M/o Defence,D/o Defence,Institute for defence studies/ National defence college,
222,M/o Defence,D/o Defence,Matters relating to diving and related activities in the country ,
223,M/o Defence,D/o Defence,"Remounts, Veterniary and Farms Organization",
224,M/o Defence,D/o Defence,The NCC,
225,M/o Defence,D/o Defence,"The reserves of Army , Navy and Airforce ",
226,M/o Defence,D/o Defence Production,Armoured vhicles Nigam Ltd.,
227,M/o Defence,D/o Defence Production,Bharat Dynamic Ltd.,
228,M/o Defence,D/o Defence Production,Bharat Earth Moves Ltd.,
229,M/o Defence,D/o Defence Production,"Defence quality assurance/ DG, Aeronautical quality assurance ",
230,M/o Defence,D/o Defence Production,Garden reach ship builders & Eng Ltd.,
231,M/o Defence,D/o Defence Production,Gliders India Ltd.,
232,M/o Defence,D/o Defence Production,Goa Shipyard Ltd.,
233,M/o Defence,D/o Defence Production,Hindustan Aeronautics Ltd.,
234,M/o Defence,D/o Defence Production,Hindustan Shipyard Ltd.,
235,M/o Defence,D/o Defence Production,India Optel Ltd.,
236,M/o Defence,D/o Defence Production,Mishra Dhatu Nigam Ltd.,
237,M/o Defence,D/o Defence Production,Munitions India Ltd.,
238,M/o Defence,D/o Defence Production,Troop Comferts Ltd.,
239,M/o Defence,D/o Defence Production,Yantra India Ltd.,
240,M/o Defence,D/o Ex-Serviceman Welfare,DG Resettlement and Kendriya Sainik Board,
241,M/o Defence,D/o Ex-Serviceman Welfare,Mattes related to Armed Force Veterans,
242,M/o Defence,D/o Ex-Serviceman Welfare,Pension of armed forces veterans,
243,M/o Defence,D/o Military Affairs,Facilitation of restructing of military commands,
244,M/o Defence,D/o Military Affairs,"HQs of MoD - Army, Naval, Airforce",
245,M/o Defence,D/o Military Affairs,Procurement excusive to the services,
246,M/o Defence,D/o Military Affairs,"The armed forces of the Union - Army, Navy & Air Force ",
247,M/o Defence,D/o Military Affairs,The Territorial Army,
248,M/o Defence,DRDO,Aeronautical Development Agency,
249,M/o Defence,DRDO,All matters related to National Security concerning Science and Technology ,
250,M/o Defence,DRDO,"To deal with reference made under S.35 of the patents Act, 1970",
251,M/o DONER,M/o DONER,Planning of Road and Inland Waterways Transport in the North Eastern Region ,
252,M/o DONER,M/o DONER,The Sikkim Mining Corporation Ltd.,
253,M/o Earth Sciences,M/o Earth Sciences,Marine Env. on the high seas,
254,M/o Earth Sciences,M/o Earth Sciences,Marine/Polar resources,
255,M/o Earth Sciences,M/o Earth Sciences,"Matters related to ocean, Atmospheric and meterological sciences, Siesmology and solid earth, Polar Science & earth system sciences specifically allocated to other Deptts.",
256,M/o Education,D/o School Education & Literacy,Bal Bhavan,
257,M/o Education,D/o School Education & Literacy,Children's Museum,
258,M/o Education,D/o School Education & Literacy,Social Education,
259,M/o Education,D/o School Education & Literacy,Adult Education,
260,M/o Education,D/o School Education & Literacy,Secondary/ Vocational Education,
261,M/o Education,D/o School Education & Literacy,"Books, except for which M/o I & B is responsible",
262,M/o Education,D/o School Education & Literacy,NCTE,
263,M/o Education,D/o Higher Education,Development and propagation of Hindi including multilingual dictionaries,
264,M/o Education,D/o Higher Education,Grant of financial assistance for teaching & Promotion of Hindi,
265,M/o Education,D/o Higher Education,Propagation and development of Sanskrit,
266,M/o Education,D/o Higher Education,Central Advisory Board of Education,
267,M/o Education,D/o Higher Education,UNESCO,
268,M/o Education,D/o Higher Education,Indian National Commission for cooperation with UNESCO,
269,M/o Education,D/o Higher Education,Education & Welfare of Indian students overseas,
270,M/o Education,D/o Higher Education,Vigyan Mandirs,
271,M/o Education,D/o Higher Education,Regional School of Printing,
272,M/o Education,D/o Higher Education,AICTE,
273,M/o Education,D/o Higher Education,National Diploma Examinations,
274,M/o Education,D/o Higher Education,National Certification Examinations,
275,M/o Education,D/o Higher Education,UGC,
276,M/o Education,D/o Higher Education,NBT,
277,M/o Education,D/o Higher Education,ASCI,
278,M/o Education,D/o Higher Education,ISM,
279,M/o Education,D/o Higher Education,IITs/ IIMs/IIS/ TISS,
280,M/o Education,D/o Higher Education,"The Architects Act, 1972",
281,M/o Electronics & IT,MEITY,Digital India Corporation,
282,M/o Electronics & IT,MEITY,E- commerce ( E- governance/ E- Medicine / E- Infrastructure,
283,M/o Electronics & IT,MEITY,Electronics export and computer software promotion council ,
284,M/o Electronics & IT,MEITY,NIC,
285,M/o Electronics & IT,MEITY,Policy matters related to IT Electronics & internet ( All matters other then lincensing of ISP),
286,M/o Electronics & IT,MEITY,Promotion and manufacturing of semi-conductor devices,
287,M/o Electronics & IT,MEITY,Promotion of digital transactions/ digital payments,
288,M/o Electronics & IT,MEITY,Semi conductor Laboratory Mohali,
289,M/o Electronics & IT,MEITY,UIDAI,
290,M/o Env Forest & CC,M/o Env Forest & CC,Desert and desutification,
291,M/o Env Forest & CC,M/o Env Forest & CC,Environment / Ecology/ Forest/ Biodiversity etc.,
292,M/o Env Forest & CC,M/o Env Forest & CC,Higher eduction in forestry,
293,M/o Env Forest & CC,M/o Env Forest & CC,Indian plywood industries research & training institute bangalore,
294,M/o Env Forest & CC,M/o Env Forest & CC,National museum of natural history ,
295,M/o Env Forest & CC,M/o Env Forest & CC,The public liability insurance Act,
296,M/o External Affairs,M/o External Affairs,Border raides and incidents on the land borders of India ,
297,M/o External Affairs,M/o External Affairs,Colombo Plan,
298,M/o External Affairs,M/o External Affairs,Demarcation of the Land frontiers of India,
299,M/o External Affairs,M/o External Affairs,"Diplomatic flight clearances for non - scheduled chartered flight of foreign, Civil and Military aircrafts",
300,M/o External Affairs,M/o External Affairs,"Grant of loans and credits to Nepal, Bhutan and Bangladesh",
301,M/o External Affairs,M/o External Affairs,Himalayan expedition: permission to foreigners to travel to protected areas other than those with which MHA is Concerned.,
302,M/o External Affairs,M/o External Affairs,Hospitality grant of GOI,
303,M/o External Affairs,M/o External Affairs,IFS/Foreign service training institute,
304,M/o External Affairs,M/o External Affairs,Indian Council for cultural Relations,
305,M/o External Affairs,M/o External Affairs,Indian pilgim ships Rules 1933,
306,M/o External Affairs,M/o External Affairs,"Laws of Sea, EEZ, High Seas",
307,M/o External Affairs,M/o External Affairs,Notification regarding commencement or cessation of war ,
308,M/o External Affairs,M/o External Affairs,Passports and visas ( Excluding the grant of visas or endorsments for entry into India) But including the grant of entry permits to South Africans of non- India origin and grant of entry visas for Srilankan nationals except missionaries,
309,M/o External Affairs,M/o External Affairs,Political pensons paid to foreign refugees and discendents of those who rendered services abroad,
310,M/o External Affairs,M/o External Affairs,Port Mirza agreement of 1955,
311,M/o External Affairs,M/o External Affairs,Trade arrangments for trades and pilgrims from India to Tibet region of China,
312,M/o External Affairs,M/o External Affairs,Abducted persons ( Recovery & Restoration),
313,M/o Finance,DEA,"Administration of the Public Debt Act, 1944",
314,M/o Finance,DEA,"All matter to credits by GoI except for Nepal, Bhutan & Bangladesh",
315,M/o Finance,DEA,All matters of tax free bonds,
316,M/o Finance,DEA,All matters related to foreign voluntiers programmes in India including the incoming UN volunteers but excluding programmes in India for overseas Indian volunteers and out going volunteers under UNV,
317,M/o Finance,DEA,Approval of foreign travels of Ministers/MPs/MLAs,
318,M/o Finance,DEA,Budget- Ways & means,
319,M/o Finance,DEA,Central Road and Infrastructure fund,
320,M/o Finance,DEA,Commonwealth funds for Technical Cooperation ,
321,M/o Finance,DEA,"contingency fund of India& administration of contingency fund of India Act,1950",
322,M/o Finance,DEA,"Control of Future trading: The Forward Contracts ( Regulation) Act, 1952",
323,M/o Finance,DEA,Credit Fiscal and Monetary Policies,
324,M/o Finance,DEA,"Currency/coinage, its designing",
325,M/o Finance,DEA,Deposit Schemes of CG,
326,M/o Finance,DEA,Domestic Finance,
327,M/o Finance,DEA,Duties & powers of CAG,
328,M/o Finance,DEA,Finance commission,
329,M/o Finance,DEA,Financial emeregency,
330,M/o Finance,DEA,Fixation of interst rates for CGs borowig and lending ,
331,M/o Finance,DEA,Flotation of market loans by CG and issue and discharge of tresurry bills,
332,M/o Finance,DEA,Foreign aid for economic development,
333,M/o Finance,DEA,Foreign exchange Management,
334,M/o Finance,DEA,Foreign investment promotion board,
335,M/o Finance,DEA,Govt. Guarantees,
336,M/o Finance,DEA,"Govt. Savings Bank Act, 1873",
337,M/o Finance,DEA,India development forum,
338,M/o Finance,DEA,Indian Economic Service ,
339,M/o Finance,DEA,Laying f audit reports before parliament U/A 151 of Constitution,
340,M/o Finance,DEA,Matters concerning gold & silver,
341,M/o Finance,DEA,National Investment Fund,
342,M/o Finance,DEA,National Savings Institute,
343,M/o Finance,DEA,Policy regarding accounting and audit procedures including classification of transactions,
344,M/o Finance,DEA,PPF,
345,M/o Finance,DEA,Resources of five years & annual plans,
346,M/o Finance,DEA,"S-20 of Indian Trusts Act, 1882",
347,M/o Finance,DEA,"Securities Contract Act, 1956",
348,M/o Finance,DEA,Security market/ Investor protection,
349,M/o Finance,DEA,Sterling pension ,
350,M/o Finance,DEA,"The African development Bank Act, 1983",
351,M/o Finance,DEA,"The African developmet fund Act, 1982",
352,M/o Finance,DEA,"The Depositories Act, 1996",
353,M/o Finance,DEA,"The Indian Coinage Act, 1906",
354,M/o Finance,DEA,"The Indian Security Act, 1920",
355,M/o Finance,DEA,"The international Finance corporatin Act, 1958",
356,M/o Finance,DEA,"The International Monteary Fund and Bank Act, 1945",
357,M/o Finance,DEA,"The Metal Tokens Act, 1889",
358,M/o Finance,DEA,"The SEBI Act, 1992",
359,M/o Finance,DEA,Treasurer of charitable endowments of India,
360,M/o Finance,DEA,UNFPA,
361,M/o Finance,DFS,"Administration of the shipping Development fund committee ( Abolition Act, 1986)",
362,M/o Finance,DFS,Appellate Authority for industrial financial reconstruction ,
363,M/o Finance,DFS,Banking,
364,M/o Finance,DFS,Board for industrial fin. Reconstruction ,
365,M/o Finance,DFS,Chitfunds/ other non banking companies accepting deposits,
366,M/o Finance,DFS,Cooperative Banking,
367,M/o Finance,DFS,"Depost insurance & credit guarntee corporation Act, 1961",
368,M/o Finance,DFS,Foreign Banks' operation in India,
369,M/o Finance,DFS,"General Insurance Business (nationalisation) Act, 1972",
370,M/o Finance,DFS,General insurance/ re insurance companies in public sector ,
371,M/o Finance,DFS,"IDBI, IFCI, SIDBI, IIBI, Exim Bank of India",
372,M/o Finance,DFS,Infrastructure Development finance corporations/ infrastructure Leasing and financial services,
373,M/o Finance,DFS,Insurance,
374,M/o Finance,DFS,"Insurance Act, 1938",
375,M/o Finance,DFS,"IRDA Act, 1999",
376,M/o Finance,DFS,"LIC, LIC Act, 1956",
377,M/o Finance,DFS,Mattes related to Indian Banks ( whether nationalised or not),
378,M/o Finance,DFS,NABARD,
379,M/o Finance,DFS,"National Bank for financing infrastructure & Development Act,2021",
380,M/o Finance,DFS,National Housing Bank,
381,M/o Finance,DFS,"Negotiable instruments Act, 1881",
382,M/o Finance,DFS,Pesion Reforms,
383,M/o Finance,DFS,"Public Financial Institutions Act, 1983",
384,M/o Finance,DFS,RBI,
385,M/o Finance,DFS,"RRB Act, 1976",
386,M/o Finance,DFS,Scindia steamship Navigation company ,
387,M/o Finance,DFS,Securitisation & foreclosure,
388,M/o Finance,DFS,"Sick industrial companies ( SP) Act, 1985",
389,M/o Finance,DFS,"Special Court ( trial of offences relating to transaction in secrities) Act, 1992",
390,M/o Finance,DFS,"State  Agricultural Credit Corporation Act, 1968",
391,M/o Finance,DFS,"State Financial Corpiration Act, 1951",
392,M/o Finance,DFS,"Status Regulation & laws connected to enteries of Union List. RBI, Banking bills of exchange/ cheques/ Promissory notes",
393,M/o Finance,DIPAM,Advise the Govt. in matters of financial restructing of CPSEs and for attracting investment in the said Enterprises through capital market,
394,M/o Finance,DIPAM,Disinvestment of equity in PSUs,
395,M/o Finance,DIPAM,Disinvestment related matters,
396,M/o Finance,DIPAM,Matters relted to management of CG investments in equity ,
397,M/o Finance,DIPAM,"The Unit Trust of India Act,1963",
398,M/o Finance,DoE,Advice to Ministries on cost accounting,
399,M/o Finance,DoE,Appraisal/ Approval of capital Restructuring/ Revival proposals of central public sector undertakings ( PSUs),
400,M/o Finance,DoE,Civil Accounts Service ,
401,M/o Finance,DoE,Disbursements of pension through PSB,
402,M/o Finance,DoE,EFC/ Public Investment Board (PIB),
403,M/o Finance,DoE,Financial rules & regulations and DFPR,
404,M/o Finance,DoE,Financial sanctions,
405,M/o Finance,DoE,Indian Audit and accouts deptts.,
406,M/o Finance,DoE,Matters related to CGA,
407,M/o Finance,DoE,Participation in formulation of annual/ Five year plan of central ministries/ PSUs,
408,M/o Finance,DoE,"Release of control Assistance for -The State's Annual plan, Centre's share of State's Calamity Relief fund, Assistance from national Calamity Contigency Fund, Upgradation grants and grants for rural/urban local bodies & other grants as recommended by the successive finance comm.",
409,M/o Finance,DoE,Scrutiny of central & state legislation having financial & economic implications ,
410,M/o Finance,DoR,"Administration of Excise in UTs - Alcoholic liquors , opium, cannabis & other narcotics drugs, Narcotic drugs & psychotrophic substances Act, 1985",
411,M/o Finance,DoR,"Administration of Prevention of Money laundering Act, 2002",
412,M/o Finance,DoR,All Matters related to CBEC & CBDT,
413,M/o Finance,DoR,All matters related to Econmic Intelligence,
414,M/o Finance,DoR,"All questions in relation to income tax, except Income Tax Appelate Tribunal",
415,M/o Finance,DoR,All questions related to income tax ( except questions- related to income tax appellate tribunal),
416,M/o Finance,DoR,"Benami Transaction  (Prohibition) Act, 1988",
417,M/o Finance,DoR,Central Board of Direct Taxes,
418,M/o Finance,DoR,Central Board of Excise and customs,
419,M/o Finance,DoR,Cess related matter ( invalidatin of surgarcane cess),
420,M/o Finance,DoR,Customs Excise & service tax appelate tribunal,
421,M/o Finance,DoR,Customs related to all matters,
422,M/o Finance,DoR,DG of Revenue Intelligence,
423,M/o Finance,DoR,Financial Action task force and related inter - ministerial coordination,
424,M/o Finance,DoR,Grants in aid to national institute of Public Finance & Policy ,
425,M/o Finance,DoR,Grants in aid to the National Institue of Public Finance and Policy,
426,M/o Finance,DoR,GST council/ GST appellate Tribunal/ GST matters,
427,M/o Finance,DoR,"Investigations under Foreign Exchange Management Act, 1999",
428,M/o Finance,DoR,Preventive detention for augmentation of foreign exchange prevention of smuggling activities,
429,M/o Finance,DoR,Sales tax and excise related all matters,
430,M/o Finance,DoR,"Smugglers & foreign exchange manipulator Act, 1976",
431,M/o Finance,DoR,"Stamp duties on bills of exchange, cheques, promissory notes",
432,M/o Finance,DPE,Public Enterprises and PSUs related matters,
433,"M/o Fish, Animal Husbandry and Dairying",Fisheries,Regulatio of fish stock importation guarantee and certification ,
434,"M/o Fish, Animal Husbandry and Dairying",Animal Husbandry &Dairying,"Livestocks, Dairy, Poultry",
435,"M/o Fish, Animal Husbandry and Dairying",Animal Husbandry &Dairying,Cruelty to Animal ,
436,"M/o Fish, Animal Husbandry and Dairying",Animal Husbandry &Dairying,Profession veternioary practice ,
437,"M/o Fish, Animal Husbandry and Dairying",Animal Husbandry &Dairying,Insurance of live stocks and birds ,
438,"M/o Fish, Animal Husbandry and Dairying",Animal Husbandry &Dairying,Fodder development ,
439,"M/o Fish, Animal Husbandry and Dairying",Animal Husbandry &Dairying,Counts of Wards,
440,M/o Food Proc'g Indust.,M/o FPI,Processing of dairy products/ Fish,
441,M/o Food Proc'g Indust.,M/o FPI,Food grains milling industry,
442,M/o Food Proc'g Indust.,M/o FPI,Protien etc industries planning/ development and control,
443,M/o Food Proc'g Indust.,M/o FPI,Bear including non- alcoholic beer,
444,M/o Food Proc'g Indust.,M/o FPI,Alcoholic drinks from non- molasses base,
445,M/o Food Proc'g Indust.,M/o FPI,Aerated water and soft drinks,
446,M/o Health & FW,D/o HFW,Central Research Institute,
447,M/o Health & FW,D/o HFW,Central Drugs Laboratory,
448,M/o Health & FW,D/o HFW,Serologist & Chemical Examiner to the Govt. Of India,
449,M/o Health & FW,D/o HFW,Central food laboratory/ Food & standardise Laboratory,
450,M/o Health & FW,D/o HFW,Central Indian Pharamacopolia Labority ,
451,M/o Health & FW,D/o HFW,All India Institute of Physical Medicine & Relief,
452,M/o Health & FW,D/o HFW,"The food & afety and standards Act, 2006",
453,M/o Health & FW,D/o HFW,"The prevention of Food Advantation Act, 1954",
454,M/o Health & FW,D/o HFW,The central food Laboratory,
455,M/o Health & FW,D/o HFW,Pharmacists and pharmacy education,
456,M/o Health & FW,D/o HFW,Durgs standards,
457,M/o Health & FW,D/o HFW,Advt. relating to drugs & medicines,
458,M/o Health & FW,D/o HFW,Regulatory aspects: quality/safty/Cabuling & Performance of medical devices,
459,M/o Health & FW,D/o HFW,Grants to Indian Red Cross Society,
460,M/o Health & FW,D/o HFW,Spas and health Resorts,
461,M/o Health & FW,D/o HFW,National board of Examination,
462,M/o Health & FW,D/o HFW,Indian Institue of Speech & hearing,
463,M/o Health & FW,D/o HFW,Past insitute of India,
464,M/o Health & FW,D/o HFW,National Commission on population,
465,M/o Health & FW,D/o HFW,Reporductive and child health,
466,M/o Health & FW,D/o HFW,Inter- sectoral coordination in accordance with National Population Policy,
467,M/o Health & FW,D/o HFW,Jansakhya Sathiarta Kosh & Empowered Actin Group ,
468,M/o Health & FW,D/o HFW,Family Planning ,
469,M/o Health & FW,D/o HFW,Family welfare schems & Projects,
470,M/o Health & FW,D/o HFW,International Institute of population sciences Mumbai,
471,M/o Health & FW,D/o HFW,Hindustan Latex limited thiruvanatapuram,
472,M/o Health & FW,D/o HFW,"MTP Act, 1971, Prohibition of Sex selection Act, 1994",
473,M/o Health & FW,D/o Health Research,Clinical research/ Clinical Trial,
474,M/o Health & FW,D/o Health Research,Ethical issues in Medical & health reasearch,
475,M/o Health & FW,D/o Health Research,Technical support for dealing with epdimics & natural calamities,
476,M/o Health & FW,D/o Health Research,ICMR,
477,M/o Heavy Industries,M/o HE,Mining and allied machinery corporation ltd,
478,M/o Heavy Industries,M/o HE,BHEL,
479,M/o Heavy Industries,M/o HE,HMT,
480,M/o Heavy Industries,M/o HE,Scooters India Ltd.,
481,M/o Heavy Industries,M/o HE,Andrew Yule & Company Ltd.,
482,M/o Heavy Industries,M/o HE,Bharat Opthalmic,
483,M/o Heavy Industries,M/o HE,Bharat Glass,
484,M/o Heavy Industries,M/o HE,Cement Corporation of India Ltd.,
485,M/o Heavy Industries,M/o HE,Cycle Corporation of India Ltd.,
486,M/o Heavy Industries,M/o HE,The National Indutrial Development corp.Ltd.,
487,M/o Heavy Industries,M/o HE,NEPA Ltd.,
488,M/o Heavy Industries,M/o HE,Rajasthan Elect. & instruments Ltd.,
489,M/o Heavy Industries,M/o HE,Hindustan News Print Ltd.,
490,M/o Heavy Industries,M/o HE,Fluid control Research Institute,
491,M/o Heavy Industries,M/o HE,Weigh Bird (India) Ltd.,
492,M/o Heavy Industries,M/o HE,The Haara heavy Plates & vesuels Ltd.,
493,M/o Heavy Industries,M/o HE,Natinal Automative teting & Reserch & Oer.Infra. Project (NATRIP) & ( NATIS),
494,M/o Home Affairs,Internal Security,Assam Rifles/ BSF/ITBP/SSB/ National Police Academy/ NCRB/IB,
495,M/o Home Affairs,Internal Security,CFSL/Govt. Examiners of questioned documents,
496,M/o Home Affairs,Internal Security,CISF/CRPF/NSG/IPS,
497,M/o Home Affairs,Internal Security,Grant of Indian citizenship by registration & naturalization,
498,M/o Home Affairs,Internal Security,Matters related to Bureau of Immigration,
499,M/o Home Affairs,Internal Security,Grant of Visa iro citizens of Af/Ban/Pak & SL for their logn term stay regulti of entry/ stay of all foreigness into/ in India,
500,M/o Home Affairs,Internal Security,Deporation/Repatriation of citizens,
501,M/o Home Affairs,Internal Security,Acceptance & utilization of foreign contribution/ hostality by assciations and  persons,
502,M/o Home Affairs,Internal Security,"The Essential service smaintenance Act,1981",
503,M/o Home Affairs,Internal Security,Matter srelated to sikkim/ Nagaland,
504,M/o Home Affairs,Internal Security,"Arms, Fire arms and ammunition",
505,M/o Home Affairs,Internal Security,Relief and rehab of refugees etc,
506,M/o Home Affairs,Internal Security,Ddadakaranya development scheme/Develoment Authority,
507,M/o Home Affairs,Internal Security,Au matters related to narcotics control Beurau,
508,M/o Home Affairs,Internal Security,"The young persons harmful publicati Act, 1956",
509,M/o Home Affairs,Internal Security,"The foreigners Act, 1946",
510,M/o Home Affairs,Internal Security,"The passport (entry into India) mAct, 1920",
511,M/o Home Affairs,Internal Security,"The registration of Foreignes Act, 1939",
512,M/o Home Affairs,Internal Security,"The immigration (carries liability) Act, 2000",
513,M/o Home Affairs,Internal Security,"The foreign contribution (Ry.) Act, 1976",
514,M/o Home Affairs,Internal Security,Matter related to many property,
515,M/o Home Affairs,D/o States,Establishment of new states,
516,M/o Home Affairs,D/o States,Inter - state council/ Inter- state migration,
517,M/o Home Affairs,D/o States,UTS with legislature/ NCT/puducherri,
518,M/o Home Affairs,D/o States,Pension/fcitites to freedom fighters,
519,M/o Home Affairs,D/o States,Human rights,
520,M/o Home Affairs,D/o States,Bureau of police Research & Den,
521,M/o Home Affairs,D/o States,National civil defence/fire service college,
522,M/o Home Affairs,D/o States,Development of fire services,
523,M/o Home Affairs,D/o States,Police reforms/ Irison reforms,
524,M/o Home Affairs,D/o States,Regulations framed by Governors of states for tribal areas,
525,M/o Home Affairs,Official Language,Hindi/ Kendriya Hindi Samiti/Central translation Bureau,
526,M/o Home Affairs,D/o Home,Notificatin for Pres./ V.P/ PM/ Other ministers,
527,M/o Home Affairs,D/o Home,Nomination to R.S/L.S,
528,M/o Home Affairs,D/o Home,Appointment/ Resignation/Removalof Governors,
529,M/o Home Affairs,D/o Home,Bills passed by legislatures of states reserved by Governor for the consideratio of the president/prior approval of the presidence to the promulgation of ordinances by Governor of states,
530,M/o Home Affairs,D/o Home,Property accruing to the union by escheat or lapse of a bon,
531,M/o Home Affairs,D/o Home,Financial emergency / Emergency provisions,
532,M/o Home Affairs,D/o Home,Special provisions relatig to language spoken by subsitutional proportion of population,
533,M/o Home Affairs,D/o Home,Conventions with other countries in Judicial matters including question ruatted to to ICJ and referene from UN relating to obscene publication ,
534,M/o Home Affairs,D/o Home,Code of cnduct of legislatures/minsters,
535,M/o Home Affairs,D/o Home,Employment of wires/dependents of Govt. servants in foreing missio in India.,
536,M/o Home Affairs,D/o Home,Exchang of viits b/w civil & military officers,
537,M/o Home Affairs,D/o Home,Lotteries organised by GOI/GOI of States/Uts,
538,M/o Home Affairs,D/o Home,"Census of population including adminstratino of the census Art, 1948",
539,M/o Home Affairs,D/o Home,Emoluments etc of Ministers,
540,M/o Home Affairs,D/o Home,National anthem/Flag/Endax/Warrants & precedence,
541,M/o Home Affairs,D/o Home,Awards & Recognitions,
542,M/o Home Affairs,D/o Home,Nationl Festivals/ National Integration/ Comm wal harmony,
543,M/o Home Affairs,D/o Home,change in geographical names,
544,M/o Home Affairs,D/o Home,Poisons,
545,M/o Home Affairs,D/o Home,Registration of Births and Deaths,
546,M/o Home Affairs,D/o Home,"Newspapers, books and printing pressed The commission of Inquiry Act1952",
547,M/o Home Affairs,D/o Home,"The prevention of insults to nationa honour Act, 1971",
548,M/o Home Affairs,D/o Home,"The religious Institutions (prevention of Misue ) Act, 1991",
549,M/o Home Affairs,D/o Home,"The acquisitions of certain areas at ayodhya Act, 1993",
550,M/o Home Affairs,D/o Home,D/o J & K and Ladakh Affairs,
551,M/o Home Affairs,D/o Home,All matters related to J&K and Ladakh,
552,M/o Home Affairs,D/o Border Management,Management of international land & coastal Borders,
553,M/o Home Affairs,D/o Border Management,Border area destroy,
554,M/o Home Affairs,D/o Border Management,Creation of infrastructure in border area.,
555,M/o Housing & Ur. Aff.,MoHUA,Horticulture Operations,
556,M/o Housing & Ur. Aff.,MoHUA,"Administration of 4 rehab. Markets viz. Sarojini Nagar, Shankar, Pleasure Garden, Kamla Market",
557,M/o Housing & Ur. Aff.,MoHUA,Stationery and printing for GoI incuding official publication,
558,M/o Housing & Ur. Aff.,MoHUA,Planning and Coordination of Urban Transport System,
559,M/o Housing & Ur. Aff.,MoHUA,Tramways/ Town and Country Planning,
560,M/o Housing & Ur. Aff.,MoHUA,DDA,
561,M/o Housing & Ur. Aff.,MoHUA,Erection of memorials in honour of freedom fighters,
562,M/o Housing & Ur. Aff.,MoHUA,The Central Council for Local Self Govt.,
563,M/o Housing & Ur. Aff.,MoHUA,Adminisration of Raj Ghat Samadhi Committee,
564,M/o Housing & Ur. Aff.,MoHUA,Plannding and Dev. Of NCR/ NCR planning board 1985,
565,M/o Housing & Ur. Aff.,MoHUA,Indian National Trust for Art & Culture Heritage,
566,M/o Housing & Ur. Aff.,MoHUA,HUDCO,
567,M/o Housing & Ur. Aff.,MoHUA,NBCC,
568,M/o Housing & Ur. Aff.,MoHUA,Hindustan Prefab. Ltd.,
569,M/o Housing & Ur. Aff.,MoHUA,National Housing Policy,
570,M/o Housing & Ur. Aff.,MoHUA,National Cooperative Housing Federation,
571,M/o Housing & Ur. Aff.,MoHUA,"Requisitioning and Acquistion of Immovable Property Act, 1955",
572,M/o Housing & Ur. Aff.,MoHUA,"Delhi Hotels (Control of Accomodation) Act, 1949",
573,M/o Housing & Ur. Aff.,MoHUA,"The Public Premises (Eviction of unauthorised occupants) Act, 1971",
574,M/o Housing & Ur. Aff.,MoHUA,Delhi Urban Arts Commission,
575,M/o Housing & Ur. Aff.,MoHUA,"Street Vendors Act, 2014",
576,M/o Housing & Ur. Aff.,MoHUA,"Real State Regulation and Development Act, 2016",
577,M/o I & B,M/o I & B,Import of feature and short films for theatrical and non-theatrical viewing,
578,M/o I & B,M/o I & B,Import of unexposed cinemotography films/ various types of equipment required by the film industry,
579,M/o I & B,M/o I & B,Organisation of / participation in International Film Festivals,
580,M/o I & B,M/o I & B,Film Society Movement,
581,M/o I & B,M/o I & B,Films/ audio-visual/ News & C.A. content on online platforms,
582,M/o I & B,M/o I & B,Production & release of advertisements on behalf of GoI,
583,M/o I & B,M/o I & B,Liaison b/w Govt & the press,
584,M/o I & B,M/o I & B,Publicity to and for the Armed Forces,
585,M/o I & B,M/o I & B,"Administration of the Press & Registration of Books Act, 1867 relating to newspaper",
586,M/o I & B,M/o I & B,"Administration of the Press Council Act, 1978",
587,M/o I & B,M/o I & B,Allocation of newsprint to Newspapers,
588,M/o I & B,M/o I & B,Indian Information Service,
589,M/o I & B,M/o I & B,Office of the Registrar of Newspapers of India,
590,M/o I & B,M/o I & B,CBFC,
591,M/o I & B,M/o I & B,Directorate of Field Publicity,
592,M/o I & B,M/o I & B,"Research, Reference & Training Division",
593,M/o I & B,M/o I & B,Central Monitoring Service,
594,M/o I & B,M/o I & B,Children Film Society of India,
595,M/o I & B,M/o I & B,Broadcast Engineers Consultants (India) Ltd.,
596,M/o Jal Shakti,"D/o WR, RD & GR",National Water Resources Council,
597,M/o Jal Shakti,"D/o WR, RD & GR",Water Quality Assessment,
598,M/o Jal Shakti,"D/o WR, RD & GR","Conservation, development, management and abatement of pollution of rivers",
599,M/o Jal Shakti,"D/o WR, RD & GR",Internationa water laws,
600,M/o Jal Shakti,"D/o WR, RD & GR","The Northern India Canal and Drainage Act, 1873",
601,M/o Jal Shakti,DDWS,Rural Water Supply,
602,M/o Jal Shakti,DDWS,Drinking Water realted matters,
603,M/o Labour and Employment,M/o L & E,I.r.o. Union Railways: Payment of wages/ trade disputes/ hours of work,
604,M/o Labour and Employment,M/o L & E,"I.r.o. Docks: Regulation of safety, health, welfare measures",
605,M/o Labour and Employment,M/o L & E,Regulation of labour and safety in mines and oildfields,
606,M/o Labour and Employment,M/o L & E,Unemployment Insurance,
607,M/o Labour and Employment,M/o L & E,Employment & Unemployment except rural employment & Unemployment,
608,M/o Labour and Employment,M/o L & E,Employment Exchanges,
609,M/o Labour and Employment,M/o L & E,"The war injuries (Compensation Insurance) Act, 1943",
610,M/o Labour and Employment,M/o L & E,"Administration of the working journalists and other newspaper employees (conditions of service) & MP Act, 1955",
611,M/o Labour and Employment,M/o L & E,Prime Minister Shram Awards,
612,M/o Labour and Employment,M/o L & E,National Safety Awards (for mines and factories),
613,M/o Labour and Employment,M/o L & E,Rashtriay Vishwakarma Puraskar,
614,M/o Law and Justice,D/o Legal Affairs,Advice to Ministries on Legal matters,
615,M/o Law and Justice,D/o Legal Affairs,Engagement of Counsels,
616,M/o Law and Justice,D/o Legal Affairs,AG of India,
617,M/o Law and Justice,D/o Legal Affairs,SG of India,
618,M/o Law and Justice,D/o Legal Affairs,Authorization of officers to execute contracts and assurances and of property on behalf of the President U/A 399 (1),
619,M/o Law and Justice,D/o Legal Affairs,Indian Legal Service,
620,M/o Law and Justice,D/o Legal Affairs,Treaties/ Agreements with foreign in matters of civil law,
621,M/o Law and Justice,D/o Legal Affairs,Law Commission,
622,M/o Law and Justice,D/o Legal Affairs,Legal Profession,
623,M/o Law and Justice,D/o Legal Affairs,Enlargement of jurisdiction of SC,
624,M/o Law and Justice,D/o Legal Affairs,References to SC U/A 143,
625,M/o Law and Justice,D/o Legal Affairs,"Adminstration of the Notaries Act, 1952",
626,M/o Law and Justice,D/o Legal Affairs,Income Tax Appellate Tribunal,
627,M/o Law and Justice,D/o Legal Affairs,Appellate Tribunal for Foreign Exchange,
628,M/o Law and Justice,Legislative Department,Drafting of Bills/ Ordinances/ Regulations,
629,M/o Law and Justice,Legislative Department,Hindi Translation of Bills/Ordinanes/ Regulations,
630,M/o Law and Justice,Legislative Department,Elections to Parliament/ Legislatures of States/ President/ VP,
631,M/o Law and Justice,Legislative Department,Election Commission,
632,M/o Law and Justice,Legislative Department,Publication of law books & Law journals in Hindi,
633,M/o Law and Justice,Legislative Department,Marriage/ Divorce/ Infants/ Minors/ Adoptions/ Wills/ Intestate & Succession/ Joint Family & Partition,
634,M/o Law and Justice,Legislative Department,Transfer of property/ other than agricultural land (excluding benami transactions),
635,M/o Law and Justice,Legislative Department,Contracts but not including those relating to agricultal land ,
636,M/o Law and Justice,Legislative Department,Actionable wrongs,
637,M/o Law and Justice,Legislative Department,Trusts/ Trustees,
638,M/o Law and Justice,Legislative Department,Evidence & Oaths,
639,M/o Law and Justice,Legislative Department,Civil Procedure including Limitation & Arbitration,
640,M/o Law and Justice,D/o Justice,Appointment/ Resignation/Removal of CJI/ Judges of SC/HC,
641,M/o Law and Justice,D/o Justice,Appointment/ Resignation/Removal of Judicial Commissions/ Officers in Uts,
642,M/o Law and Justice,D/o Justice,Creation of all India Judicial Service,
643,M/o Law and Justice,D/o Justice,Legal aid to poor,
644,M/o Law and Justice,D/o Justice,"Access to justice, justice delivery and legal reforms",
645,M/o Mines,M/o Mines,Geological Survey of India,
646,M/o Mines,M/o Mines,Indian Bureau of Mines,
647,M/o Mines,M/o Mines,Metallurgical grade Silicon,
648,M/o Minority Affairs,M/o Minority Affairs,All matters relating to minority communities except matters relating to law and order,
649,M/o Minority Affairs,M/o Minority Affairs,"Evacuee Waqf Property Act, 1950",
650,M/o Minority Affairs,M/o Minority Affairs,"The Waqf Act, 1955",
651,M/o Minority Affairs,M/o Minority Affairs,Represenation of the Anglo-Indian community,
652,M/o Minority Affairs,M/o Minority Affairs,Pant-Mirza agreement of 1955,
653,M/o Minority Affairs,M/o Minority Affairs,Maulana Azas Education Foundation,
654,M/o Minority Affairs,M/o Minority Affairs,National Commission for Socially and Economically Backward Sections among religious & linguistic minorities,
655,M/o Minority Affairs,M/o Minority Affairs,All matters related to Justice Sacchar Committee,
656,M/o New & RE,M/o N&RE,Research and Development of Biogas/ Biogas Units,
657,M/o New & RE,M/o N&RE,Commission for additional sourceds of Energy,
658,M/o New & RE,M/o N&RE,Solar energy including photovoltaic devices,
659,M/o New & RE,M/o N&RE,All matters relating to small/ mini/ micro hydel projects of and below 25 MW capacity,
660,M/o New & RE,M/o N&RE,Tidal Energy,
661,M/o New & RE,M/o N&RE,Integrated Rural Energy Programme,
662,M/o New & RE,M/o N&RE,Geothermal Energy,
663,M/o Panchayati Raj,M/o PR,All matters related to Panchayati Raj/ PR institutions,
664,M/o Panchayati Raj,M/o PR,District Planning Committees,
665,M/o Parliamentary Affairs,M/o PR,Implementation of assurances given by Ministers in Parliament,
666,M/o Parliamentary Affairs,M/o PR,Officially sponsored visits of MPs to places of interest,
667,M/o Parliamentary Affairs,M/o PR,Organisations of youth parliaments competitions in Schools/ Colleges,
668,M/o Parliamentary Affairs,M/o PR,"Salaries, allowances of MPs etc.",
669,M/o Pers. Pub Gr&Pen.,DoPT,Reservations of Posts in Services,
670,M/o Pers. Pub Gr&Pen.,DoPT,Central Vigilance Commission,
671,M/o Pers. Pub Gr&Pen.,DoPT,Relationship b/w MPs and Administration,
672,M/o Pers. Pub Gr&Pen.,DoPT,"The Prevention of Corruption Act, 1947",
673,M/o Pers. Pub Gr&Pen.,DoPT,CBI,
674,M/o Pers. Pub Gr&Pen.,DoPT,Delhi Special Police Establishment,
675,M/o Pers. Pub Gr&Pen.,DoPT,The Food Offences Wing,
676,M/o Pers. Pub Gr&Pen.,DoPT,The Economic Offences Wing,
677,M/o Pers. Pub Gr&Pen.,DoPT,Administration of Central Civil Services (Safeguarding of National Security) Rules,
678,M/o Pers. Pub Gr&Pen.,DoPT,Oath of allegiance to the Constitution,
679,M/o Pers. Pub Gr&Pen.,DoPT,ACC,
680,M/o Pers. Pub Gr&Pen.,DoPT,Central Establishment Board,
681,M/o Pers. Pub Gr&Pen.,DoPT,Service Associations of the Industrial & Non-industrial employees of GoI,
682,M/o Pers. Pub Gr&Pen.,DoPT,JCM,
683,M/o Pers. Pub Gr&Pen.,DoPT,"Grih Kalyan Kendras, Canteens, Cooperative stores etc.",
684,M/o Pers. Pub Gr&Pen.,DoPT,CAT/SAT,
685,M/o Pers. Pub Gr&Pen.,DoPT,UPSC,
686,M/o Pers. Pub Gr&Pen.,DoPT,Allocation of service personnel affected by re-organization of States,
687,M/o Pers. Pub Gr&Pen.,DoPT,Public Enterprises Selection Board,
688,M/o Pers. Pub Gr&Pen.,DARPG,Administrative Reforms/ E-governance,
689,M/o Pers. Pub Gr&Pen.,DARPG,O&M,
690,M/o Pers. Pub Gr&Pen.,DARPG,Research in public management,
691,M/o Pers. Pub Gr&Pen.,DARPG,Administration of CSMOP,
692,M/o Pers. Pub Gr&Pen.,DPPW,"Formulation and coordination of matters relating to retirement benefits to Central Govt. employees (Civil, Defence and Railway Pensioners)",
693,M/o Planning,M/o Planning,Responsibility to Parliament in regard to NITI Aayog,
694,M/o PNG,M/o PNG,Exploration/exploitation of petroleum including natural gas/ methane,
695,M/o PNG,M/o PNG,Biofuels/ National Policy on biofuels,
696,M/o PNG,M/o PNG,Tube blending and greases,
697,M/o PNG,M/o PNG,Engineers India Ltd,
698,M/o PNG,M/o PNG,Indo-Burman Petroleum Company,
699,M/o PNG,M/o PNG,"The ESSO (Acquisition of undertakings in India) Act, 1974",
700,M/o PNG,M/o PNG,"The Burmah Shell (Acquisition of Underakings) Act, 1976",
701,M/o PNG,M/o PNG,"The Caltex (India) Ltd. Act, 1977",
702,M/o PNG,M/o PNG,Administration of Balmer Lawrie Investments Ltd.,
703,"M/o Ports, Shipping and Waterways",M/o PS&W,Light houses and Light ships,
704,"M/o Ports, Shipping and Waterways",M/o PS&W,Fishing vessels Industry,
705,"M/o Ports, Shipping and Waterways",M/o PS&W,Floating Craft Industry,
706,"M/o Ports, Shipping and Waterways",M/o PS&W,Organisation and maintenance of mainland islands and inter-island shipping services,
707,"M/o Ports, Shipping and Waterways",M/o PS&W,"Administration of the Dock workers (Regulation of Employment) Act, 1948",
708,"M/o Ports, Shipping and Waterways",M/o PS&W,Planning of inland water transport,
709,"M/o Ports, Shipping and Waterways",M/o PS&W,The development of township of Gandhidham,
710,"M/o Ports, Shipping and Waterways",M/o PS&W,Prevention and control of pollutiondue to ships/ ship wreckage/ oil pollution in port areas,
711,"M/o Ports, Shipping and Waterways",M/o PS&W,Dock Labour Boards,
712,"M/o Ports, Shipping and Waterways",M/o PS&W,Inland Waterways Authority of India,
713,"M/o Ports, Shipping and Waterways",M/o PS&W,Seamen's Provident Fund Organization/Act,
714,"M/o Ports, Shipping and Waterways",M/o PS&W,Seafarers Welfare Fund Society,
715,"M/o Ports, Shipping and Waterways",M/o PS&W,Cohin Shipyard Ltd.,
716,"M/o Ports, Shipping and Waterways",M/o PS&W,Dredging Corporation of India ,
717,"M/o Ports, Shipping and Waterways",M/o PS&W,Ennore Port Ltd.,
718,"M/o Ports, Shipping and Waterways",M/o PS&W,International Maritime Organization,
719,"M/o Ports, Shipping and Waterways",M/o PS&W,"The merchant Shipping Act, 1958",
720,"M/o Ports, Shipping and Waterways",M/o PS&W,"The Inland Waterways Authority of India Act, 1985",
721,"M/o Ports, Shipping and Waterways",M/o PS&W,"The multimodal Transportation of Goods Act, 1993",
722,M/o Power,M/o Power,The Damodar Valley Corporation,
723,M/o Power,M/o Power,The Bhakra Beas Mgmt. Board (Except Irrigation),
724,M/o Power,M/o Power,Power Finance Corporation Ltd.,
725,M/o Power,M/o Power,Tehri Hydro Dev. Corporation Ltd.,
726,M/o Power,M/o Power,Nathpa Jhakri Power Corporation,
727,M/o Power,M/o Power,Power Trading Corporation of India Ltd.,
728,M/o Power,M/o Power,Narmada Hydro Dev. Corporation (Joint venture),
729,M/o Railways,M/o Railways,Govt. Railways except Railway inspectorate & Railway audit,
730,M/o Railways,M/o Railways,Non-Govt. Railways except work allocated to MoHUA,
731,M/o Railways,M/o Railways,Administration of Pension Rules applicable to Railway Employees,
732,M/o RTH*,M/o RTH,"Coordination, research, standards and policy matters in r/o ropeways and other innovative/ alternative mobility solutions",
733,M/o Rural Development,D/o RD,Council of advancement of People's action and Rural Technology (CAPART),
734,M/o Rural Development,D/o RD,Road works financed by CG in Tribal areas of Assam,
735,M/o Rural Development,D/o RD,Rural employment/ unemployment etc.,
736,M/o Rural Development,D/o RD,Small farmers development agency/ marginal farmers/ agricultural labourers etc.,
737,M/o Rural Development,D/o RD,Rural connectivity,
738,M/o Rural Development,D/o RD,Pradhanmantri Gram Sadak Yojana,
739,M/o Rural Development,D/o Land Resources,Recovery of claims in a State in r/o taxes and other public demands including arrears of land revenue.,
740,M/o Rural Development,D/o Land Resources,"Land: Collection of rent, transfer, alienation of land",
741,M/o Rural Development,D/o Land Resources,Land improvements and agricultural loans,
742,M/o Rural Development,D/o Land Resources,Land revenue,
743,M/o Rural Development,D/o Land Resources,Duties i.r.o. succession to agricultural land,
744,M/o Rural Development,D/o Land Resources,National Wasteland Dev.  Board,
745,M/o Rural Development,D/o Land Resources,Natioanl Land Use and Watershed Development Council,
746,M/o Rural Development,D/o Land Resources,"Promotion of production of fuelwood, fodder and timber on non-forest lands including private wastelands",
747,M/o Rural Development,D/o Land Resources,Drought prone area programme,
748,M/o Rural Development,D/o Land Resources,Deser Develompent Programmes,
749,M/o Rural Development,D/o Land Resources,"The Regisration Act, 1908",
750,M/o Rural Development,D/o Land Resources,National Mission on Bio-Fuels,
751,M/o Science and Tech,D/o Sci & Tech,Futurology,
752,M/o Science and Tech,D/o Sci & Tech,Technology Development Board,
753,M/o Science and Tech,D/o Sci & Tech,The Survey of India,
754,M/o Science and Tech,D/o Sci & Tech,Natinal Atlas and Thematic Mapping Organization (NATMO),
755,M/o Science and Tech,D/o Sci & Tech,National Spatial data infrastructure & Promotion of GIS,
756,M/o Science and Tech,D/o Sci & Tech,The National Innovation Foundation Ahmedabad,
757,M/o Science and Tech,D/o Scientific & Industrial Research,National Research Development Corporation,
758,M/o Science and Tech,D/o Scientific & Industrial Research,All matters related to Central Electronics Ltd.,
759,M/o Science and Tech,D/o Scientific & Industrial Research,Registration and recognnition of R&D Units,
760,M/o Science and Tech,D/o Scientific & Industrial Research,Technical matters related to UNCTAD & WIPO,
761,M/o Science and Tech,D/o Scientific & Industrial Research,National Register for foreign collaborators,
762,M/o Science and Tech,D/o Biotechnology,Research and Development programme on bio-diesel,
763,M/o Science and Tech,D/o Biotechnology,Lab studies on Jatropha/ Pogamia/ Madhura/ Slavadora and Mixed oils,
764,M/o Science and Tech,D/o Biotechnology,Research & Develoment for bio-ethanol recovery,
765,M/o Science and Tech,D/o Biotechnology,Central agency for DNA/RNA/ Culture/ Cells etc.,
766,M/o Science and Tech,D/o Biotechnology,International Centre for Genetic Engg. & Bio-Technology,
767,M/o Science and Tech,D/o Biotechnology,"National Institute of Immunology, New Delhi",
768,M/o Science and Tech,D/o Biotechnology,"National Center for Cell Sciences, Pune",
769,M/o Science and Tech,D/o Biotechnology,"National Center for Plant Genome Research, New Delhi",
770,M/o Science and Tech,D/o Biotechnology,"National Brain Research Center, Gurugram",
771,M/o Science and Tech,D/o Biotechnology,Bharat Immunologicals & Biologicals Corporation Ltd.,
772,M/o Science and Tech,D/o Biotechnology,Indian Vaccines Corporation Ltd. (IVCOL) Manesar,
773,M/o Skill Dev. & Entrepreneurship,M/o SD&E,Doing market research and devising training curriculum in important secotrs ,
774,M/o Skill Dev. & Entrepreneurship,M/o SD&E,Industry-institute linkage,
775,M/o Skill Dev. & Entrepreneurship,M/o SD&E,"National Institute for Entrepreneurship and Small Business Development, NOIDA",
776,M/o Skill Dev. & Entrepreneurship,M/o SD&E,"Indian Institute of Entrepreneurship, Guwahati",
777,M/o Skill Dev. & Entrepreneurship,M/o SD&E,Nomadic and Migratory Tribes,
778,M/o Skill Dev. & Entrepreneurship,M/o SD&E,Nodal Departments for SCs/OBCs/ Denotified Tribes/ EBCs & Senior Citizens/ Transgender persons,
779,M/o Skill Dev. & Entrepreneurship,M/o SD&E,Rebh./ Employment of manual scavangers,
780,M/o Skill Dev. & Entrepreneurship,M/o SD&E,"Construction of dry latrines (Prohibition) Act, 1993",
781,M/o Skill Dev. & Entrepreneurship,M/o SD&E,"The protection of Civil Rights Act, 1955",
782,M/o Skill Dev. & Entrepreneurship,M/o SD&E,National SC/ Safaikarmchari/ Backward Classes Finance & Development Corporation,
783,M/o Skill Dev. & Entrepreneurship,M/o SD&E,National Institute of Social Defence,
784,M/o Skill Dev. & Entrepreneurship,M/o SD&E,Dr. Ambedkar/ Baba Jagjivan Ram Foundation,
785,M/o SME,MSME,"Cooperation in the MSME sector including Cottage, Khadi, Village and Coir industries, except Cooperative Sugar Factories.",
786,M/o SME,MSME,Development of flavour & fragrances,
787,M/o SME,MSME,KVIC Mumbai,
788,M/o SME,MSME,"Coir Board, Kochi",
789,M/o SME,MSME,Central Footwear Training Institute,
790,M/o SME,MSME,"Institute for design of electrical measuring instruments, Mumbai",
791,M/o SME,MSME,"Electronic sevice and training centre, Ramnagar",
792,M/o SME,MSME,Process & Product Dev. Center Agra/ Meerut,
793,M/o SME,MSME,Fragrane & flavour Dev. Center ,
794,M/o SME,MSME,"Center for the development of glass industry, Firozabad",
795,M/o SME,MSME,"Mahatma Gandhi Institute of Rural Industrialization, Wardha",
796,M/o Soc. Justice & Emp.,D/o EPD,Indo-US/ Indo-UK/ Indo-German/Indo-Swiss/Indo-Swedish agreements for duty free import of donated relief goods/supplies,Empowerment of Persons with Disabilities
797,M/o Soc. Justice & Emp.,D/o EPD,Social security/ Social insurance,
798,M/o Soc. Justice & Emp.,D/o EPD,Education & Training of rehabilitation professionals,
799,M/o Soc. Justice & Emp.,D/o EPD,"The Rehabilitation Council of India Act, 1992",
800,M/o Soc. Justice & Emp.,D/o EPD,"The Indian Sign Language Research & Training Center, New Delhi",
801,M/o Steel,M/o Steel,National arc Furnace,
802,M/o Steel,M/o Steel,Induction Furnace Units,
803,M/o Steel,M/o Steel,"Development of Iron ore mines/ ore mines (manganese, chrome, limestone, sillimanite, kaynite & other minerals used in iron and steel industry)",
804,M/o Steel,M/o Steel,National Mineral Development Corporation Ltd.,
805,M/o Steel,M/o Steel,Metallurgical & Engineering Consultants (India) Ltd. MECON,
806,M/o Steel,M/o Steel,Bharat Refractories Ltd.,
807,M/o Steel,M/o Steel,Bird Group of Companies,
808,M/o Textiles,M/o Textiles,Cotton including gining & processing,
809,M/o Textiles,M/o Textiles,Price control of Cotton,
810,M/o Textiles,M/o Textiles,Cellulosic fibres but excluding non-cellulosic fibre,
811,M/o Textiles,M/o Textiles,Sericulture/ Jute and Jute products,
812,M/o Textiles,M/o Textiles,Handicrafts,
813,M/o Textiles,M/o Textiles,Export/ Promotion of Textiles/ Handloom/ Woolen/ Powerlooms etc. ,
814,M/o Textiles,M/o Textiles,"O/o Commissioner of Payments, New Delhi",
815,M/o Textiles,M/o Textiles,"National Institute of Fashion Technology, New Delhi",
816,M/o Textiles,M/o Textiles,"National Center for Design and Product Development, Delhi",
817,M/o Textiles,M/o Textiles,"Metal Handicrafts Service Center, Moradabad",
818,M/o Textiles,M/o Textiles,"Central Cottage Industries Corporation, New Delhi",
819,M/o Textiles,M/o Textiles,British India Corporation Ltd. Kanpur,
820,M/o Textiles,M/o Textiles,All India Powerloom Board,
821,M/o Textiles,M/o Textiles,"The synthetic and Rayon textiles Export Promotion Council, Mumbai",
822,M/o Textiles,M/o Textiles,Apparel Export Promotion Council Mumbai,
823,M/o Textiles,M/o Tourism,ITDC,
824,M/o Tribal Affairs,M/o Tribal Affairs,Scheduled Areas,
825,M/o Tribal Affairs,M/o Tribal Affairs,Monitoring of Tribal Subplan basd on the framework and mechanism designed by NITI Aayog,
826,M/o WCD,M/o WCD,Welfare of the family,
827,M/o WCD,M/o WCD,Care of pre-school children including pre-primary education,
828,M/o WCD,M/o WCD,National Nutrition Policy,
829,M/o WCD,M/o WCD,National Nutrition Mission,
830,M/o WCD,M/o WCD,"The Immoral Traffic (prevention) Act, 1956",
831,M/o WCD,M/o WCD,"The Indecent Represenation of Women (prevention) Act, 1986",
832,M/o WCD,M/o WCD,"The Dowry Prohibition Act, 1961",
833,M/o WCD,M/o WCD,"The Commission of Sati (Prevention) Act, 1987",
834,M/o WCD,M/o WCD,Implementation of the infant milk substitutes/ feeding bottles and infant foods,
835,M/o WCD,M/o WCD,Coordination of activities and programmes of cooperative for assistance and relief everywhere (CARE),
836,M/o WCD,M/o WCD,Central Soil Welfare Board,
837,M/o WCD,M/o WCD,Food and Nutrition Board,
838,M/o WCD,M/o WCD,Juvenile delinquency & vagrancy,
839,M/o WCD,M/o WCD,Probation of juvenile offenders,
840,M/o WCD,M/o WCD,CARA,
841,M/o WCD,M/o WCD,Children Act/ JJ Act,
842,M/o WCD,M/o WCD,"The child marriage-restraint Act, 1929",
843,M/o WCD,M/o WCD,Orphans and orphanage,
844,M/o Youth Aff. & Sports,D/o Youth Affairs,National Reconstruction Corps Scheme,
845,M/o Youth Aff. & Sports,D/o Youth Affairs,National Service Scheme,
846,M/o Youth Aff. & Sports,D/o Youth Affairs,National Service Volunteer Scheme,
847,M/o Youth Aff. & Sports,D/o Youth Affairs,Boy Scouts,
848,M/o Youth Aff. & Sports,D/o Youth Affairs,Girl Guides,
849,M/o Youth Aff. & Sports,D/o Sports,Physical Education,
850,MoSPI,MoSPI,Preparation of national accounts/ publication of annual estimates of national income/gdp/ndp,
851,MoSPI,MoSPI,Preparation of national input-output Transactions Table,
852,MoSPI,MoSPI,Index of Industrial production,
853,MoSPI,MoSPI,Environment Statistics,
854,MoSPI,MoSPI,National Resource Accounts for India,
855,MoSPI,MoSPI,All India Economic Census and follow up sample surveys,
856,MoSPI,MoSPI,Monitoring of 20 point programme,
857,MoSPI,MoSPI,Monitoring of projects of Rs. 150 Crore and above,
858,MoSPI,MoSPI,Monitoring of the performance of infrastructure sector,
859,MoSPI,MoSPI,MP LAD Scheme,
860,MoSPI,MoSPI,National Common Minimum Programme,
861,NITI Aayog,NITI Aayog,Shared vision of National Development priorities with active involvement of States,
862,NITI Aayog,NITI Aayog,To foster cooperative federalism,
863,NITI Aayog,NITI Aayog,To develop mechanism to formulate plans at the village level,
864,NITI Aayog,NITI Aayog,To pay special attention to the society at economic risk,
865,NITI Aayog,NITI Aayog,"To create knowledge, innovation & entrepreneurial support system",
866,NITI Aayog,NITI Aayog,To offer platform for inter-sectoral & inter-departmental issues,
867,NITI Aayog,NITI Aayog,To maintain a state of the art Resource Centre/ Repository of research on good governance and best practices in sustainable and equitable development,
868,NITI Aayog,NITI Aayog,To focus on technology upgradation for programmes,
869,NITI Aayog,NITI Aayog,To design a framework and mechanism for monitoring of SC subplan and Tribal Subplan,
870,NITI Aayog,NITI Aayog,National Institute of Labour Economics Research and Development (NILERD),
871,Cabinet Secretariat,Cabinet Secretariat,Secretarial Assistance to Cabinet/ Cabinet Committees,
872,Cabinet Secretariat,Cabinet Secretariat,Rules of Business,
873,D/o Atomic Energy,D/o Atomic Energy,Indian Rare Earths Limited,
874,D/o Atomic Energy,D/o AE,Electronics Corporation of India Ltd.,
875,D/o Atomic Energy,D/o AE,National Fertilizers Ltd. in so far as production of heavy water is concerned,
876,D/o Atomic Energy,D/o AE,All matters concerned with advancement of higher mathematics,
877,D/o Atomic Energy,D/o AE,TIFR,
878,D/o Atomic Energy,D/o AE,Tata Memorial Center,
879,D/o Atomic Energy,D/o AE,The Institute of Mathematical Sciences,
880,D/o Atomic Energy,D/o AE,The Institute of Physics,
881,D/o Atomic Energy,D/o AE,Harish Chandra Research Institute,
882,D/o Atomic Energy,D/o AE,The Institute of Plasma Research Gandhinagar,
883,D/o Space,D/o Space,All matters realted to physical research lab. Ahmedabad,
884,D/o Space,D/o Space,National Remote Sensing Agency,
885,D/o Space,D/o Space,National Natural Resources Management System,
886,D/o Space,D/o Space,"Natioanl Mesosphere, Stratosphere and Troposphere Radar Facility",
887,D/o Space,D/o Space,Antrix Corporation Ltd.,
888,D/o Space,D/o Space,North Eastern Space Application Center,`;


const departments = new Set();;

String.prototype.splitCSV = function(sep) {
    var regex = /(\s*""[^""]+'|\s*[^,]+)(?=,|$)/g;
    return matches = this.match(regex);    
  }

  function parse(row){
    var insideQuote = false,                                             
        entries = [],                                                    
        entry = [];
    row.split('').forEach(function (character) {                         
      if(character === '"') {
        insideQuote = !insideQuote;                                      
      } else {
        if(character == "," && !insideQuote) {                           
          entries.push(entry.join(''));                                  
          entry = [];                                                    
        } else {
          entry.push(character);                                         
        }                                                                
      }                                                                  
    });
    entries.push(entry.join(''));                                        
    return entries;                                                      
  }

function csvToJson(csv) {
    // \n or \r\n depending on the EOL sequence
    const lines = csv.split('\n');
    const delimeter = ',';
  
    const result = [];
  
    // const headers = lines[0].split(delimeter);
    const headers = lines[0].splitCSV();

    console.log('Headers :', headers);
    for (const line of lines) {
      const obj = {};
    //   const row = line.split(delimeter);
      const row = parse(line);
    //   console.log("==> - csvToJson - line:", line);
    //   console.log("==> - csvToJson - row:", row);
  
      for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        obj[header] = row[i];
      }
  
      result.push(obj);
      departments.add(row[2]);
    }
  
    // Prettify output
    return result;
  }
  
  function uniqueDepartments(departments){
    let outputArray = departments.filter(function (v, i, self) {
        return i == self.indexOf(v);
    });
 
    return outputArray;
  }

  const questions = csvToJson(csv);
//   const alldepartments = uniqueDepartments(departments);
//   const alldepartments = departments.values();
  const alldepartments = Array.from(departments);

  const jsonString = JSON.stringify(questions, null, 2);
  
//   console.log(jsonString);
//   console.log('-----------------------');
  // console.log(alldepartments);

let currentQuestion = 1;
let score = 0;
let correctAnswer = '';
let selectedAnswer = '';
let ansRemark = '';
let attemptedNo = 0;
let Ministries = {};
let totalQuestions = 893;
let checkboxStatus = false;

const rCb = document.getElementsByClassName('randomCheckBox')[0]
rCb.addEventListener('change', function(){
    checkboxStatus = this.checked
    console.log('Random questions on - ', checkboxStatus);
})

function updateCurrentQuestion(){
    console.log('crrent questions :', document.getElementById("idStartQuesNo").value);
    currentQuestion = document.getElementById("idStartQuesNo").value;
    displayQuestion();
}

function showRandomQuestion(){
    console.log('show random checked :', true);
}

function displayQuestion1() {
    const questionElement = document.getElementById("question");
    const optionLabels = document.querySelectorAll("[id^='label']");
    const options = document.querySelectorAll("[id^='option']");

    questionElement.textContent = questions1[currentQuestion].question;

    for (let i = 0; i < optionLabels.length; i++) {
        optionLabels[i].textContent = questions1[currentQuestion].options[i];
        options[i].checked = false;
    }
}

let optionLabels;
let options;

function displayQuestion() {
    const questionElement = document.getElementById("question");
     optionLabels = document.querySelectorAll("[id^='label']");
     options = document.querySelectorAll("[id^='option']");

     if(checkboxStatus){
        console.log('generating random questions :', checkboxStatus);
        currentQuestion =  Math.floor(Math.random() * 900);
     }
    console.log('questions[currentQuestion] :', questions[currentQuestion]);
    questionElement.textContent = questions[currentQuestion].SNo +". "+ questions[currentQuestion].Item;
    attemptedNo+=1;
    document.getElementById("idattempted").textContent = "Attempted:"+attemptedNo;

    // let opts = [];
    // opts[0] = questions[currentQuestion].Department;
    // for (let i = 1; i < optionLabels.length; i++) {
    //     opts[i] = questions[randomQuestionNo()].Department;
    // }


    ansRemark = questions[currentQuestion].Remarks;
    document.getElementById("idanswer").textContent = "Ans:   "+ questions[currentQuestion].Department;
    if(ansRemark)
        document.getElementById("idremarks").textContent = "Remarks::"+ansRemark;
    else
        document.getElementById("idremarks").textContent = "";

    hideAnswer();
    correctAnswer = questions[currentQuestion].Department;

    let randomOption = Math.floor(Math.random()*4);
    console.log(' ansOptionNO:',randomOption);
    // for (let i = 0; i < optionLabels.length; i++) {
    //     if(i == randomOption) {
    //         optionLabels[i].textContent = questions[currentQuestion].Department;
    //         options[i].value = questions[currentQuestion].Department;
    //     }else{
    //         let randQues = randomQuestionNo();
    //         console.log('randOptions:',randQues, alldepartments[randQues]);
    //         optionLabels[i].textContent = alldepartments[randQues];
    //         options[i].value = alldepartments[randQues];

    //     }
    //     options[i].checked = false;
    //     console.log('option quest :',options[i].value);
    //     console.log('optionLabel quest :',optionLabels[i].textContent);
    // }
}

function randomQuestionNo(){
   return Math.floor(Math.random() * 90);
}

function submitAnswer() {
    // const options = document.querySelectorAll("[id^='option']");
    // const optionLabels = document.querySelectorAll("[id^='label']");

    let userChoice = -1;
    attemptedNo+=1;

    for (let i = 0; i < options.length; i++) {
        console.log('option ans :',options[i].value);
        console.log('optionLabel ans :',optionLabels[i].textContent);

        if (options[i].checked) {
            userChoice = optionLabels[i].textContent;
            break;
        }
    }

    console.log('userChoice answer:',userChoice);
    console.log('correct answer:',questions[currentQuestion].Department);

    if (userChoice == correctAnswer) {
        score++;
    }

  
    let percent = score*100/attemptedNo;
    console.log("==> - submitAnswer - percent:", percent);
    document.getElementById("idscore").textContent = "Score:"+score +"("+ percent +")";
    document.getElementById("idattempted").textContent = "Attempted:"+attemptedNo;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }

}

function hideAnswer(){
    let ans = document.getElementById("idanswer");
    ans.style.display = "none";
    let rem = document.getElementById("idremarks");
    rem.style.display = "none";
}
function showAnswer(){
    let btn = document.getElementById("idShowBtn");
    if(btn.innerHTML == "ShowAnswer"){
        let ans = document.getElementById("idanswer");
        ans.style.display = "block";
        let rem = document.getElementById("idremarks");
        rem.style.display = "block";
        btn.innerHTML = "Next"
    } else {
        btn.innerHTML = "ShowAnswer";
        currentQuestion++;
        displayQuestion();
    }

}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${score}/${questions.length}</p>`;
}

displayQuestion();


  
