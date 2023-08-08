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

const csv = `SNo,Ministry,Department,Item,Remarks,,
1,Cabinet Secretariat,Cabinet Secretariat,Secretarial Assistance to Cabinet/ Cabinet Committees,,,
2,Cabinet Secretariat,Cabinet Secretariat,Rules of Business,,,
3,D/o Atomic Energy,D/o AE,Electronics Corporation of India Ltd.,,,
4,D/o Atomic Energy,D/o AE,National Fertilizers Ltd. in so far as production of heavy water is concerned,,,
5,D/o Atomic Energy,D/o AE,All matters concerned with advancement of higher mathematics,,,
6,D/o Atomic Energy,D/o AE,"TIFR, Mumbai",,,
7,D/o Atomic Energy,D/o AE,"Tata Memorial Center, Mumbai",,,
8,D/o Atomic Energy,D/o AE,"The Institute of Mathematical Sciences, Chennai",,,
9,D/o Atomic Energy,D/o AE,"The Institute of Physics, Bhubaneshwar",,,
10,D/o Atomic Energy,D/o AE,Harish Chandra Research Institute,,,
11,D/o Atomic Energy,D/o AE,The Institute of Plasma Research Gandhinagar,,,
12,D/o Atomic Energy,D/o Atomic Energy,Indian Rare Earths Limited,,,
13,D/o Space,D/o Space,All matters realted to physical research lab. Ahmedabad,,,
14,D/o Space,D/o Space,National Remote Sensing Agency,,,
15,D/o Space,D/o Space,National Natural Resources Management System,,,
16,D/o Space,D/o Space,"Natioanl Mesosphere, Stratosphere and Troposphere Radar Facility",,,
17,D/o Space,D/o Space,Antrix Corporation Ltd.,,,
18,D/o Space,D/o Space,North Eastern Space Application Center,,,
19,M/o Agri. and FW,D/o Ag. & FW,Administration of the Dangerous Machine ( Regulation) Act 1983,,,
20,M/o Agri. and FW,D/o Ag. & FW,Convention on Locust Control,,,
21,M/o Agri. and FW,D/o Ag. & FW,"Liason with international org's, handling CARE goods",,,
22,M/o Agri. and FW,D/o Ag. & FW,Administration of the fertilizer (control) orders 1957,,,
23,M/o Agri. and FW,D/o Ag. & FW,"Administration of the insecticides Act, 1968",,,
24,M/o Agri. and FW,D/o Ag. & FW,Adulteration of agricultural products (other than food stuffs),,,
25,M/o Agri. and FW,D/o Ag. & FW,Agricultural Census,,,
26,M/o Agri. and FW,D/o Ag. & FW,Agricultural Economics & Statistics,,,
27,M/o Agri. and FW,D/o Ag. & FW,Bio-aesthetic planing,,,
28,M/o Agri. and FW,D/o Ag. & FW,Development of Agricultural industries excluding Cotton and Ginning,,,
29,M/o Agri. and FW,D/o Ag. & FW,"Development of Agricultural industries including Machinery, Fertilizer & Seeds (Only formulatin of demands & fixation of Targets)",,,
30,M/o Agri. and FW,D/o Ag. & FW,Financial assistance to State Soil Conservation Schemes,,,
31,M/o Agri. and FW,D/o Ag. & FW,Indian peoples natural calanity trust,,,
32,M/o Agri. and FW,D/o Ag. & FW,Land reclamation,,,
33,M/o Agri. and FW,D/o Ag. & FW,"Matters related to damage to crops and coordinating of relief measures necessiatated by drought, hailstorm, pest-attacks, cold wave and frost",,,
34,M/o Agri. and FW,D/o Ag. & FW,Matters related to loss of human life due to drought ,,,
35,M/o Agri. and FW,D/o Ag. & FW,Monitoring of Pesticide residences at national level,,,
36,M/o Agri. and FW,D/o Ag. & FW,National land use & conservation Board,,,
37,M/o Agri. and FW,D/o Ag. & FW,National Rainfed Area Authority (NRAA),,,
38,M/o Agri. and FW,D/o Ag. & FW,Organisation & development of extension eduction & trainng in the country,,,
39,M/o Agri. and FW,D/o Ag. & FW,Plant Quarantine,,,
40,M/o Agri. and FW,D/o Ag. & FW,"Price control of agricultural commodities except food grains, sugar and vanaspati, oil seeds, vegetable oils, cakes and fats, jute, cotton, tea",,,
41,M/o Agri. and FW,D/o Ag. & FW,Professins excluding veterniary practice,,,
42,M/o Agri. and FW,D/o Ag. & FW,Projection of demand of fertilizers & manures,,,
43,M/o Agri. and FW,D/o Ag. & FW,Quality control of fertilizers,,,
44,M/o Agri. and FW,D/o Ag. & FW,Shellac Industry,,,
45,M/o Agri. and FW,D/o Ag. & FW,Technology mission on oil seeds & pulses ,,,
46,M/o Agri. and FW,D/o Ag. & FW,On Farm Water Management,,,
47,M/o Agri. and FW,D/o Ag. & FW,Crop Insurance.,,,
48,M/o Agri. and FW,D/o Ag. & FW,Warehousing in rural areas including rural godowns.2,,,
49,M/o Agri. and FW,D/o Ag. & FW,"Development of Cotton, Jute and Sugarcane.",,,
50,M/o Agri. and FW,D/o Ag. & FW,All attached and Subordinate Offices or other organisations concerned with any of the subjects specified in this list except the Directorate of Agricultural Aviation.,,,
51,M/o Agri. and FW,D/o Ag. & FW,Ware housing in rural areas including rural godowns,,,
52,M/o Agri. and FW,D/o Agr Res & Edu.,"All India soil and land use survey relating to research, trainig, co-relation, classification soil mapping & interpration",,,
53,M/o Agri. and FW,D/o Agr Res & Edu.,ICAR,,,
54,M/o Agri. and FW,D/o Agr Res & Edu.,Nationl Demonstrations ,,,
55,M/o Agri. and FW,D/o Agr Res & Edu.,Plant animal and fish introduction & exploration,,,
56,M/o Agri. and FW,D/o Agr Res & Edu.,Sugarcane Research,,,
57,M/o Agri. and FW,D/o Agr Res & Edu.,Research and development on production & improvements of bio fuel plants,,,
58,M/o Ayush,M/o Ayush,All matters relating to the National Medicinal Plant Board,,,
59,M/o Ayush,M/o Ayush,"Ayurveda yoga naturopathy, unani, Siddha, Sowa and Homeopathy etc.",,,
60,M/o Ayush,M/o Ayush,Pharmacopoeia Commission for Indian Medicine and Homoeopathy,,,
61,M/o Ayush,M/o Ayush,Indian medicines,,,
62,M/o Ayush,M/o Ayush,Service matters of Indian system of medicine CGHS Doctors,,,
63,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,All organic/inorganic chemicals not specificially allotted to others,,,
64,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,Bhopal Gas Leak Disaster- special laws relating thereto,,,
65,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,Dye- stuffs and dye intermediates,,,
66,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,"Industries relating to production of Non-cellulosic synthetic fibres (Nylon,Polyster,acrylic etc)",,,
67,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,"Insecticides (Excluding the administration of the insecticides Act, 1968)",,,
68,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,Plastics including fabrication of plastic & moulded goods,,,
69,M/o Chemical and Fertilizers,D/o Chem.& Petroch.,Synthetic Rubber,,,
70,M/o Chemical and Fertilizers,D/o Fertilizers,Administrative responsibility for the Indian potash limited,,,
71,M/o Chemical and Fertilizers,D/o Fertilizers,"Adminstration of the fertilizers (Movement control) order, 1960",,,
72,M/o Chemical and Fertilizers,D/o Fertilizers,IFFCO,,,
73,M/o Chemical and Fertilizers,D/o Fertilizers,Allocation and supply linkages for movement and distribution of urea in terms of assessment made by the Department of Agriculture and Farmers Welfare,,,
74,M/o Chemical and Fertilizers,D/o Fertilizers,Krishak Bharati Cooperative Limited (KRIBHCO),,,
75,M/o Chemical and Fertilizers,D/o Pharmaceuticals,"Drugs and Pharmaceuticals, excluding those specifically allotted to other departments.",,,
76,M/o Chemical and Fertilizers,D/o Pharmaceuticals,All matters relating to National Institutes for Pharmacy Education and Research,,,
77,M/o Chemical and Fertilizers,D/o Pharmaceuticals,"Medical Devices – Industry issues relating to promotion, production and manufacture; ",,,
78,M/o Chemical and Fertilizers,D/o Pharmaceuticals,"Bengal Chemicals & Pharmaceuticals limited, ",,,
79,M/o Chemical and Fertilizers,D/o Pharmaceuticals,Hindustan antibiotics Ltd.,,,
80,M/o Chemical and Fertilizers,D/o Pharmaceuticals,Karnatka antibiotics Ltd.,,,
81,M/o Chemical and Fertilizers,D/o Pharmaceuticals,Rajasthan antibiotics Ltd.,,,
82,M/o Civil Aviation,M/o Civil Aviation,Aircraft/ Air navigation/ Aerodrome except sanitized control of air navigation,,,
83,M/o Civil Aviation,M/o Civil Aviation,Commission of Railway safety,,,
84,M/o Civil Aviation,M/o Civil Aviation,Hotel Corporation of India & its subsidiaries  ,,,
85,M/o Coal,M/o Coal,"Coal Mines Labour Welfare Fund Act, 1947",,,
86,M/o Coal,M/o Coal,"Coal Mines PF & MP Act, 1948",,,
87,M/o Coal,M/o Coal,The Coal Mines PF organisation,,,
88,M/o Coal,M/o Coal,Development and operation of coal washeries other than those for which the Department of Steel is responsible.,,,
89,M/o Coal,M/o Coal,Low temperature carbonisation of coal and production of synthetic oil from coal,,,
90,M/o Coal,M/o Coal,The Coal Mines Welfare organisation ,,,
91,M/o Comm & Industry,D/o Commerce,All matters related to foreign Trade,,,
92,M/o Comm & Industry,D/o Commerce,"Cadre Management of -Indian Trade Service, Indian Supply Service, Indian inspection service",,,
93,M/o Comm & Industry,D/o Commerce,Coordination for export Infrastructure,,,
94,M/o Comm & Industry,D/o Commerce,"Development and expansion of export productin in relatin to all commodities including-Agriculture, Marine, Industrial, Fuels, Minerals, Specific export oriented products (including plantation crops but excluding Jute Products & handicrafts)",,,
95,M/o Comm & Industry,D/o Commerce,"Development, Operation & Maintenance of National Public Procurement Portal",,,
96,M/o Comm & Industry,D/o Commerce,Directorate General of commercial intelligence & statistics ,,,
97,M/o Comm & Industry,D/o Commerce,Export and Import trade policy,,,
98,M/o Comm & Industry,D/o Commerce,Directorate General of foreign Trade,,,
99,M/o Comm & Industry,D/o Commerce,Directorate General of Trade Remedies,,,
100,M/o Comm & Industry,D/o Commerce,Export credit & Export insurance,,,
101,M/o Comm & Industry,D/o Commerce,Export credit & Gurantee Corporation Ltd.,,,
102,M/o Comm & Industry,D/o Commerce,Free trade zones,,,
103,M/o Comm & Industry,D/o Commerce,Gems & Jewellary,,,
104,M/o Comm & Industry,D/o Commerce,Govt. e- Market Place,,,
105,M/o Comm & Industry,D/o Commerce,Import and export trade policy (excluding feature films matters),,,
106,M/o Comm & Industry,D/o Commerce,"India Trade Promotion Organisation & its subsidiaries,",,,
107,M/o Comm & Industry,D/o Commerce,Indian Diamond Institute,,,
108,M/o Comm & Industry,D/o Commerce,Indian Insitute of foreign Trade ,,,
109,M/o Comm & Industry,D/o Commerce,Indian Institute of packaging,,,
110,M/o Comm & Industry,D/o Commerce,"International agencies connected with trade policy UNCTAD, ESCAP, ECLA, EEC, GATT/WTO,ITC & CFC",,,
111,M/o Comm & Industry,D/o Commerce,"International Commodity Agreements (otherthan relating to wheat, sugar, jute & cotton)",,,
112,M/o Comm & Industry,D/o Commerce,International Customs Tarriff Bureau/Tarrif Commission,,,
113,M/o Comm & Industry,D/o Commerce,International Trade & Commercial Policy,,,
114,M/o Comm & Industry,D/o Commerce,Marine Products Export Development Authority,,,
115,M/o Comm & Industry,D/o Commerce,Matters related to concerned Export Promotion councils/Export Promotion Organisations,,,
116,M/o Comm & Industry,D/o Commerce,"Matters related to Export Promotion Board, Board of Trade & International Trade Advisory committee.",,,
117,M/o Comm & Industry,D/o Commerce,Minerals & Metals Trading corporation & its subsidiaries,,,
118,M/o Comm & Industry,D/o Commerce,"Policies of State Trading Corporation of India Ltd. And its subsidiaries Excluding- Handicrafts & Handlooms Export Corporation, Central Cottage Industries Corporation, Tea trading corporatio of India Ltd., Spicestrading corporationof India Ltd.",,,
119,M/o Comm & Industry,D/o Commerce,"Production, distribution & development of planatation crops, tea, coffee, rubber, spices, tobacco and cashew instant tea and instant coffee.",,,
120,M/o Comm & Industry,D/o Commerce,Projects & Equipments corporation of India Ltd.,,,
121,M/o Comm & Industry,D/o Commerce,Setting up of EPZ/AEZ/EOUs,,,
122,M/o Comm & Industry,D/o Commerce,Special Economic Zones,,,
123,M/o Comm & Industry,D/o Commerce,"Tea Board, Coffee, Rubber, Cardmom,Tobacco Boards",,,
124,M/o Comm & Industry,D/o Commerce,Trade Remedies,,,
125,M/o Comm & Industry,DPI&IT,"Administration of the Explosive Act, 1884 but not The Explosive substances Act, 1908",,,
126,M/o Comm & Industry,DPI&IT,Administration of the Indian Boilers Act ,,,
127,M/o Comm & Industry,DPI&IT,Assessment/allocation of raw materials ,,,
128,M/o Comm & Industry,DPI&IT,Cables,,,
129,M/o Comm & Industry,DPI&IT,Central Boilers Board ,,,
130,M/o Comm & Industry,DPI&IT,"Copyrights Act, 1957 and international conventions on copy rights",,,
131,M/o Comm & Industry,DPI&IT,Direct foreign and non-resident investment in industrial and service projects,,,
132,M/o Comm & Industry,DPI&IT,Footwear Design & Development Institute,,,
133,M/o Comm & Industry,DPI&IT,Foreign Investment implementation Authority ,,,
134,M/o Comm & Industry,DPI&IT,"Indian Rubber manufacturies research association, Mumbai",,,
135,M/o Comm & Industry,DPI&IT,Integrated development of logistics sector,,,
136,M/o Comm & Industry,DPI&IT,"Leather & leather goods industry, soaps & detergents",,,
137,M/o Comm & Industry,DPI&IT,License for civil aircraft production industry in consultation with M/o Civil Aviation,,,
138,M/o Comm & Industry,DPI&IT,Light Electrical Engineering Industries,,,
139,M/o Comm & Industry,DPI&IT,"Light Engineering Industries- Seving machines , Type writers, Weighing machines, Bicycles etc.",,,
140,M/o Comm & Industry,DPI&IT,"Light Industries- Plywood,Stationary, matches, cigarates etc",,,
141,M/o Comm & Industry,DPI&IT,Materials planning ,,,
142,M/o Comm & Industry,DPI&IT,Matters related to e-Commerce,,,
143,M/o Comm & Industry,DPI&IT,Matters relating to facilitating Ease of doing business,,,
144,M/o Comm & Industry,DPI&IT,Matters relating to start Ups.,,,
145,M/o Comm & Industry,DPI&IT,National council for cement and building materials,,,
146,M/o Comm & Industry,DPI&IT,Promotion of investment by overseas Indian in India,,,
147,M/o Comm & Industry,DPI&IT,Promtion of internal/retail trade,,,
148,M/o Comm & Industry,DPI&IT,"Raw films, Hard Board, Paper & Newsprint",,,
149,M/o Comm & Industry,DPI&IT,"Cables, Salt, Cement, ceramic,tiles & glass",,,
150,M/o Comm & Industry,DPI&IT,Standardisation of international product & Raw Materials,,,
151,M/o Comm & Industry,DPI&IT,Technical development including Tariff commission and United Nations Industrial development organisation,,,
152,M/o Comm & Industry,DPI&IT,"The Design Act, 2000",,,
153,M/o Comm & Industry,DPI&IT,"The Geographical Indications of Goods (Reg & Introduction) Act, 1999",,,
154,M/o Comm & Industry,DPI&IT,"The inflamable sustances Act, 1952",,,
155,M/o Comm & Industry,DPI&IT,"The Patents Act, 1970",,,
156,M/o Comm & Industry,DPI&IT,"The Semiconductor integrated circuits layout design Act, 2000",,,
157,M/o Comm & Industry,DPI&IT,"The Trade & Merchandise Marks Act, 1958",,,
158,M/o Comm & Industry,DPI&IT,Tyres & Tubes,,,
159,M/o Comm & Industry,DPI&IT,Welfare of traders & their employees,,,
160,M/o Comm & Industry,DPI&IT,WIPO,,,
161,M/o Comm & Industry (Vanijya Vibhag),D/o Commerce,Agricultural and processed food products Export Development Authority,,,
162,M/o Communications,D/o Posts,India Post Payment Bank,,,
163,M/o Communications,D/o Telecomm'n,Centre for development o Telematics,,,
164,M/o Communications,D/o Telecomm'n,Post disinvestment matters relating to M/s Hindustan Teleprinters Ltd.,,,
165,M/o Communications,D/o Telecomm'n,Telecom Disputes settlement & Appellate Tribunal,,,
166,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,Cosumer Cooperatives,,,
167,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,National Test House,,,
168,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,"Prevention of the Blackmarketing & Maintenance of supplies of essential commodities Act, 1980",,,
169,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,Regulation of package commodities,,,
170,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,Specifications/standard & cods and ensuring quality control of bio- fuels for end uses,,,
171,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,"The Bureau of Indian Standards Act, 1986",,,
172,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,"The consumer production Act,1986",,,
173,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,"The emblems and names ( Prevention of improper use) Act, 1952",,,
174,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,"The Essential Commodities Act, 1980 ( for matters not being dealt with by other Ministries/ Departments)",,,
175,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,"The Spirituous Preparation (Inter-State Trade & Commerce) control Act, 1955",,,
176,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,"The standards of weigts and measures Act, 1976",,,
177,M/o Consumer Affairs  Food and PD,D/o Consumer Affairs,Training in Legal Meterology,,,
178,M/o Consumer Affairs  Food and PD,D/o Food & PD,Alcohol- industrial/potable from the molasses route.,,,
179,M/o Consumer Affairs  Food and PD,D/o Food & PD,Central Werehosing Corporation,,,
180,M/o Consumer Affairs  Food and PD,D/o Food & PD,"Directorate of Sugar, New Delhi",,,
181,M/o Consumer Affairs  Food and PD,D/o Food & PD,"Directorate of vanaspati, vegetable oil & fats",,,
182,M/o Consumer Affairs  Food and PD,D/o Food & PD,Food Corporation of India ,,,
183,M/o Consumer Affairs  Food and PD,D/o Food & PD,"Industries relating to vanaspati, Oil seeds, Vegetable oils, Cakes, Fats & Sugar ( including development of sugar khandsari )",,,
184,M/o Consumer Affairs  Food and PD,D/o Food & PD,"Price Control of Suger, Food grains & food stuffs ",,,
185,M/o Consumer Affairs  Food and PD,D/o Food & PD,Public distribution system,,,
186,M/o Consumer Affairs  Food and PD,D/o Food & PD,Standalone distilleries,,,
187,M/o Cooperation,M/o Cooperation,"Multi state cooperative sociaties Act,2002",,,
188,M/o Cooperation,M/o Cooperation,National Coopearative development Coopearation,,,
189,M/o Cooperation,M/o Cooperation,National Coopearative Organisation ,,,
190,M/o Cooperation,M/o Cooperation,Training of personnel of coopertive deptts and cooperative institutions,,,
191,M/o Corporate Affairs,M/o Corporate Affairs,Administration of Companies (Donation of National Funds) Act,,,
192,M/o Corporate Affairs,M/o Corporate Affairs,"Administration of the companies Act, 1956",,,
193,M/o Corporate Affairs,M/o Corporate Affairs,"Certain functions under Ch VII of Indian Partneship Act, 1937",,,
194,M/o Corporate Affairs,M/o Corporate Affairs,Competition commission of India,,,
195,M/o Corporate Affairs,M/o Corporate Affairs,"Exercise of functions under the socities registration Act, 1860 ",,,
196,M/o Corporate Affairs,M/o Corporate Affairs,Insolvency & Bankrupty Code,,,
197,M/o Corporate Affairs,M/o Corporate Affairs,Investor Education & protection fund Authority ,,,
198,M/o Corporate Affairs,M/o Corporate Affairs,"Limited liability partnership Acat, 2008",,,
199,M/o Corporate Affairs,M/o Corporate Affairs,National Financing Reporting Authority,,,
200,M/o Corporate Affairs,M/o Corporate Affairs,NCLAT,,,
201,M/o Corporate Affairs,M/o Corporate Affairs,NCLT,,,
202,M/o Corporate Affairs,M/o Corporate Affairs,SFIO,,,
203,M/o Corporate Affairs,M/o Corporate Affairs,"The chartered Accountants Act, 1949",,,
204,M/o Corporate Affairs,M/o Corporate Affairs,"The Coast & Works Accountants Act, 1959",,,
205,M/o Corporate Affairs,M/o Corporate Affairs,"The Companies Act, 2002",,,
206,M/o Corporate Affairs,M/o Corporate Affairs,"The Company Secretaries Act, 1980",,,
207,M/o Culture,M/o Culture,Acquisition of Indian & foreign art objects,,,
208,M/o Culture,M/o Culture,Anthropological survey of India,,,
209,M/o Culture,M/o Culture,"Central Insitutes of Higher Tibetan studies, Sarnath Buddhist Studies, ",,,
210,M/o Culture,M/o Culture,Distributio of gift book received from abroad,,,
211,M/o Culture,M/o Culture,Festivals of India abroad,,,
212,M/o Culture,M/o Culture,Gandhi Peace Prize,,,
213,M/o Culture,M/o Culture,History of Freedom movement,,,
214,M/o Culture,M/o Culture,Indian War Memorial,,,
215,M/o Culture,M/o Culture,Indira Gandhi Rashtriya Manav Sangrahalya,,,
216,M/o Culture,M/o Culture,International congress of orientalists,,,
217,M/o Culture,M/o Culture,Library related matters,,,
218,M/o Culture,M/o Culture,National Memorial Trust,,,
219,M/o Culture,M/o Culture,National School of Drama/ National theatre,,,
220,M/o Culture,M/o Culture,Nav Nalanda Mahavidyalya ,,,
221,M/o Culture,M/o Culture,Observance of centenaies & Anniversaries of importance personalities and events,,,
222,M/o Culture,M/o Culture,Open air theatres in rural areas and theatres in state capitals,,,
223,M/o Culture,M/o Culture,Presentation of books to foreign countries,,,
224,M/o Culture,M/o Culture,"Press Registration of Books Act, 1867",,,
225,M/o Culture,M/o Culture,Revision of Gazetters,,,
226,M/o Culture,M/o Culture,Sahitya/ Lalit Kala/ Sangeet Natak Academy,,,
227,M/o Culture,M/o Culture,"The delivery of Books and newspapers ( public Libraries) Act, 1954",,,
228,M/o Culture,M/o Culture,"The Indian Treasure - Trove Act, 1878",,,
229,M/o Culture,M/o Culture,"The public record Act, 1993",,,
230,M/o Defence,D/o Defence,Acquisitions etc of land and property for defence ,,,
231,M/o Defence,D/o Defence,Border roades development Board an border roads organization,,,
232,M/o Defence,D/o Defence,Canteen Stores Deptt.,,,
233,M/o Defence,D/o Defence,Cantonments/ cantonment Boards,,,
234,M/o Defence,D/o Defence,Capital acquisitions exclusive to defene services,,,
235,M/o Defence,D/o Defence,Central Coordinating agency for combating oil pollution in the coastal & marine environment .,,,
236,M/o Defence,D/o Defence,Civilian Services paid from Defence estimtes,,,
237,M/o Defence,D/o Defence,Coast- Guard Organisation Survillance of martine zone agaisnt oils spills,,,
238,M/o Defence,D/o Defence,Defence Accounts Department,,,
239,M/o Defence,D/o Defence,Hydrographic surveys and proparation of navigational Charts,,,
240,M/o Defence,D/o Defence,Institute for defence studies/ National defence college,,,
241,M/o Defence,D/o Defence,Matters relating to diving and related activities in the country ,,,
242,M/o Defence,D/o Defence,"Remounts, Veterniary and Farms Organization",,,
243,M/o Defence,D/o Defence,The NCC,,,
244,M/o Defence,D/o Defence,"The reserves of Army , Navy and Airforce ",,,
245,M/o Defence,D/o Defence Production,Armoured vhicles Nigam Ltd.,,,
246,M/o Defence,D/o Defence Production,Bharat Dynamic Ltd.,,,
247,M/o Defence,D/o Defence Production,Bharat Earth Moves Ltd.,,,
248,M/o Defence,D/o Defence Production,"Defence quality assurance/ DG, Aeronautical quality assurance ",,,
249,M/o Defence,D/o Defence Production,Garden reach ship builders & Eng Ltd.,,,
250,M/o Defence,D/o Defence Production,Gliders India Ltd.,,,
251,M/o Defence,D/o Defence Production,Goa Shipyard Ltd.,,,
252,M/o Defence,D/o Defence Production,Hindustan Aeronautics Ltd.,,,
253,M/o Defence,D/o Defence Production,Hindustan Shipyard Ltd.,,,
254,M/o Defence,D/o Defence Production,India Optel Ltd.,,,
255,M/o Defence,D/o Defence Production,Mishra Dhatu Nigam Ltd.,,,
256,M/o Defence,D/o Defence Production,Munitions India Ltd.,,,
257,M/o Defence,D/o Defence Production,Troop Comferts Ltd.,,,
258,M/o Defence,D/o Defence Production,Yantra India Ltd.,,,
259,M/o Defence,D/o Ex-Serviceman Welfare,DG Resettlement and Kendriya Sainik Board,,,
260,M/o Defence,D/o Ex-Serviceman Welfare,Mattes related to Armed Force Veterans,,,
261,M/o Defence,D/o Ex-Serviceman Welfare,Pension of armed forces veterans,,,
262,M/o Defence,D/o Military Affairs,Facilitation of restructing of military commands,,,
263,M/o Defence,D/o Military Affairs,"HQs of MoD - Army, Naval, Airforce",,,
264,M/o Defence,D/o Military Affairs,Procurement excusive to the services,,,
265,M/o Defence,D/o Military Affairs,"The armed forces of the Union - Army, Navy & Air Force ",,,
266,M/o Defence,D/o Military Affairs,The Territorial Army,,,
267,M/o Defence,DRDO,Aeronautical Development Agency,,,
268,M/o Defence,DRDO,All matters related to National Security concerning Science and Technology ,,,
269,M/o Defence,DRDO,"To deal with reference made under S.35 of the patents Act, 1970",,,
270,M/o DONER,M/o DONER,Planning of Road and Inland Waterways Transport in the North Eastern Region ,,,
271,M/o DONER,M/o DONER,The Sikkim Mining Corporation Ltd.,,,
272,M/o Earth Sciences,M/o Earth Sciences,Marine Env. on the high seas,,,
273,M/o Earth Sciences,M/o Earth Sciences,Marine/Polar resources,,,
274,M/o Earth Sciences,M/o Earth Sciences,"Matters related to ocean, Atmospheric and meterological sciences, Siesmology and solid earth, Polar Science & earth system sciences specifically allocated to other Deptts.",,,
275,M/o Education,D/o Higher Education,Development and propagation of Hindi including multilingual dictionaries,,,
276,M/o Education,D/o Higher Education,Grant of financial assistance for teaching & Promotion of Hindi,,,
277,M/o Education,D/o Higher Education,Propagation and development of Sanskrit,,,
278,M/o Education,D/o Higher Education,Central Advisory Board of Education,,,
279,M/o Education,D/o Higher Education,UNESCO,,,
280,M/o Education,D/o Higher Education,Indian National Commission for cooperation with UNESCO,,,
281,M/o Education,D/o Higher Education,Education & Welfare of Indian students overseas,,,
282,M/o Education,D/o Higher Education,Vigyan Mandirs,,,
283,M/o Education,D/o Higher Education,Regional School of Printing,,,
284,M/o Education,D/o Higher Education,AICTE,,,
285,M/o Education,D/o Higher Education,National Diploma Examinations,,,
286,M/o Education,D/o Higher Education,National Certification Examinations,,,
287,M/o Education,D/o Higher Education,UGC,,,
288,M/o Education,D/o Higher Education,NBT,,,
289,M/o Education,D/o Higher Education,ASCI,,,
290,M/o Education,D/o Higher Education,ISM,,,
291,M/o Education,D/o Higher Education,IITs/ IIMs/IIS/ TISS,,,
292,M/o Education,D/o Higher Education,"The Architects Act, 1972",,,
293,M/o Education,D/o School Education & Literacy,Bal Bhavan,,,
294,M/o Education,D/o School Education & Literacy,Children's Museum,,,
295,M/o Education,D/o School Education & Literacy,Social Education,,,
296,M/o Education,D/o School Education & Literacy,Adult Education,,,
297,M/o Education,D/o School Education & Literacy,Secondary/ Vocational Education,,,
298,M/o Education,D/o School Education & Literacy,"Books, except for which M/o I & B is responsible",,,
299,M/o Education,D/o School Education & Literacy,NCTE,,,
300,M/o Electronics & IT,MEITY,Digital India Corporation,,,
301,M/o Electronics & IT,MEITY,E- commerce ( E- governance/ E- Medicine / E- Infrastructure,,,
302,M/o Electronics & IT,MEITY,Electronics export and computer software promotion council ,,,
303,M/o Electronics & IT,MEITY,NIC,,,
304,M/o Electronics & IT,MEITY,Policy matters related to IT Electronics & internet ( All matters other then lincensing of ISP),,,
305,M/o Electronics & IT,MEITY,Promotion and manufacturing of semi-conductor devices,,,
306,M/o Electronics & IT,MEITY,Promotion of digital transactions/ digital payments,,,
307,M/o Electronics & IT,MEITY,Semi conductor Laboratory Mohali,,,
308,M/o Electronics & IT,MEITY,UIDAI,,,
309,M/o Env Forest & CC,M/o Env Forest & CC,Desert and desutification,,,
310,M/o Env Forest & CC,M/o Env Forest & CC,Environment / Ecology/ Forest/ Biodiversity etc.,,,
311,M/o Env Forest & CC,M/o Env Forest & CC,Higher eduction in forestry,,,
312,M/o Env Forest & CC,M/o Env Forest & CC,Indian plywood industries research & training institute bangalore,,,
313,M/o Env Forest & CC,M/o Env Forest & CC,National museum of natural history ,,,
314,M/o Env Forest & CC,M/o Env Forest & CC,The public liability insurance Act,,,
315,M/o External Affairs,M/o External Affairs,Border raides and incidents on the land borders of India ,,,
316,M/o External Affairs,M/o External Affairs,Colombo Plan,,,
317,M/o External Affairs,M/o External Affairs,Demarcation of the Land frontiers of India,,,
318,M/o External Affairs,M/o External Affairs,"Diplomatic flight clearances for non - scheduled chartered flight of foreign, Civil and Military aircrafts",,,
319,M/o External Affairs,M/o External Affairs,"Grant of loans and credits to Nepal, Bhutan and Bangladesh",,,
320,M/o External Affairs,M/o External Affairs,Himalayan expedition: permission to foreigners to travel to protected areas other than those with which MHA is Concerned.,,,
321,M/o External Affairs,M/o External Affairs,Hospitality grant of GOI,,,
322,M/o External Affairs,M/o External Affairs,IFS/Foreign service training institute,,,
323,M/o External Affairs,M/o External Affairs,Indian Council for cultural Relations,,,
324,M/o External Affairs,M/o External Affairs,Indian pilgim ships Rules 1933,,,
325,M/o External Affairs,M/o External Affairs,"Laws of Sea, EEZ, High Seas",,,
326,M/o External Affairs,M/o External Affairs,Notification regarding commencement or cessation of war ,,,
327,M/o External Affairs,M/o External Affairs,Passports and visas ( Excluding the grant of visas or endorsments for entry into India) But including the grant of entry permits to South Africans of non- India origin and grant of entry visas for Srilankan nationals except missionaries,,,
328,M/o External Affairs,M/o External Affairs,Political pensons paid to foreign refugees and discendents of those who rendered services abroad,,,
329,M/o External Affairs,M/o External Affairs,Port Mirza agreement of 1955,,,
330,M/o External Affairs,M/o External Affairs,Trade arrangments for trades and pilgrims from India to Tibet region of China,,,
331,M/o External Affairs,M/o External Affairs,Abducted persons ( Recovery & Restoration),,,
332,M/o Finance,DEA,"Administration of the Public Debt Act, 1944",,,
333,M/o Finance,DEA,"All matter to credits by GoI except for Nepal, Bhutan & Bangladesh",,,
334,M/o Finance,DEA,All matters of tax free bonds,,,
335,M/o Finance,DEA,All matters related to foreign voluntiers programmes in India including the incoming UN volunteers but excluding programmes in India for overseas Indian volunteers and out going volunteers under UNV,,,
336,M/o Finance,DEA,Approval of foreign travels of Ministers/MPs/MLAs,,,
337,M/o Finance,DEA,Budget- Ways & means,,,
338,M/o Finance,DEA,Central Road and Infrastructure fund,,,
339,M/o Finance,DEA,Commonwealth funds for Technical Cooperation ,,,
340,M/o Finance,DEA,"contingency fund of India& administration of contingency fund of India Act,1950",,,
341,M/o Finance,DEA,"Control of Future trading: The Forward Contracts ( Regulation) Act, 1952",,,
342,M/o Finance,DEA,Credit Fiscal and Monetary Policies,,,
343,M/o Finance,DEA,"Currency/coinage, its designing",,,
344,M/o Finance,DEA,Deposit Schemes of CG,,,
345,M/o Finance,DEA,Domestic Finance,,,
346,M/o Finance,DEA,Duties & powers of CAG,,,
347,M/o Finance,DEA,Finance commission,,,
348,M/o Finance,DEA,Financial emeregency,,,
349,M/o Finance,DEA,Fixation of interst rates for CGs borowig and lending ,,,
350,M/o Finance,DEA,Flotation of market loans by CG and issue and discharge of tresurry bills,,,
351,M/o Finance,DEA,Foreign aid for economic development,,,
352,M/o Finance,DEA,Foreign exchange Management,,,
353,M/o Finance,DEA,Foreign investment promotion board,,,
354,M/o Finance,DEA,Govt. Guarantees,,,
355,M/o Finance,DEA,"Govt. Savings Bank Act, 1873",,,
356,M/o Finance,DEA,India development forum,,,
357,M/o Finance,DEA,Indian Economic Service ,,,
358,M/o Finance,DEA,Laying f audit reports before parliament U/A 151 of Constitution,,,
359,M/o Finance,DEA,Matters concerning gold & silver,,,
360,M/o Finance,DEA,National Investment Fund,,,
361,M/o Finance,DEA,National Savings Institute,,,
362,M/o Finance,DEA,Policy regarding accounting and audit procedures including classification of transactions,,,
363,M/o Finance,DEA,PPF,,,
364,M/o Finance,DEA,Resources of five years & annual plans,,,
365,M/o Finance,DEA,"S-20 of Indian Trusts Act, 1882",,,
366,M/o Finance,DEA,"Securities Contract Act, 1956",,,
367,M/o Finance,DEA,Security market/ Investor protection,,,
368,M/o Finance,DEA,Sterling pension ,,,
369,M/o Finance,DEA,"The African development Bank Act, 1983",,,
370,M/o Finance,DEA,"The African developmet fund Act, 1982",,,
371,M/o Finance,DEA,"The Depositories Act, 1996",,,
372,M/o Finance,DEA,"The Indian Coinage Act, 1906",,,
373,M/o Finance,DEA,"The Indian Security Act, 1920",,,
374,M/o Finance,DEA,"The international Finance corporatin Act, 1958",,,
375,M/o Finance,DEA,"The International Monteary Fund and Bank Act, 1945",,,
376,M/o Finance,DEA,"The Metal Tokens Act, 1889",,,
377,M/o Finance,DEA,"The SEBI Act, 1992",,,
378,M/o Finance,DEA,Treasurer of charitable endowments of India,,,
379,M/o Finance,DEA,UNFPA,,,
380,M/o Finance,DFS,"Administration of the shipping Development fund committee ( Abolition Act, 1986)",,,
381,M/o Finance,DFS,Appellate Authority for industrial financial reconstruction ,,,
382,M/o Finance,DFS,Banking,,,
383,M/o Finance,DFS,Board for industrial fin. Reconstruction ,,,
384,M/o Finance,DFS,Chitfunds/ other non banking companies accepting deposits,,,
385,M/o Finance,DFS,Cooperative Banking,,,
386,M/o Finance,DFS,"Depost insurance & credit guarntee corporation Act, 1961",,,
387,M/o Finance,DFS,Foreign Banks' operation in India,,,
388,M/o Finance,DFS,"General Insurance Business (nationalisation) Act, 1972",,,
389,M/o Finance,DFS,General insurance/ re insurance companies in public sector ,,,
390,M/o Finance,DFS,"IDBI, IFCI, SIDBI, IIBI, Exim Bank of India",,,
391,M/o Finance,DFS,Infrastructure Development finance corporations/ infrastructure Leasing and financial services,,,
392,M/o Finance,DFS,Insurance,,,
393,M/o Finance,DFS,"Insurance Act, 1938",,,
394,M/o Finance,DFS,"IRDA Act, 1999",,,
395,M/o Finance,DFS,"LIC, LIC Act, 1956",,,
396,M/o Finance,DFS,Mattes related to Indian Banks ( whether nationalised or not),,,
397,M/o Finance,DFS,NABARD,,,
398,M/o Finance,DFS,"National Bank for financing infrastructure & Development Act,2021",,,
399,M/o Finance,DFS,National Housing Bank,,,
400,M/o Finance,DFS,"Negotiable instruments Act, 1881",,,
401,M/o Finance,DFS,Pesion Reforms,,,
402,M/o Finance,DFS,"Public Financial Institutions Act, 1983",,,
403,M/o Finance,DFS,RBI,,,
404,M/o Finance,DFS,"RRB Act, 1976",,,
405,M/o Finance,DFS,Scindia steamship Navigation company ,,,
406,M/o Finance,DFS,Securitisation & foreclosure,,,
407,M/o Finance,DFS,"Sick industrial companies ( SP) Act, 1985",,,
408,M/o Finance,DFS,"Special Court ( trial of offences relating to transaction in secrities) Act, 1992",,,
409,M/o Finance,DFS,"State  Agricultural Credit Corporation Act, 1968",,,
410,M/o Finance,DFS,"State Financial Corpiration Act, 1951",,,
411,M/o Finance,DFS,"Status Regulation & laws connected to enteries of Union List. RBI, Banking bills of exchange/ cheques/ Promissory notes",,,
412,M/o Finance,DIPAM,Advise the Govt. in matters of financial restructing of CPSEs and for attracting investment in the said Enterprises through capital market,,,
413,M/o Finance,DIPAM,Disinvestment of equity in PSUs,,,
414,M/o Finance,DIPAM,Disinvestment related matters,,,
415,M/o Finance,DIPAM,Matters relted to management of CG investments in equity ,,,
416,M/o Finance,DIPAM,"The Unit Trust of India Act,1963",,,
417,M/o Finance,DoE,Advice to Ministries on cost accounting,,,
418,M/o Finance,DoE,Appraisal/ Approval of capital Restructuring/ Revival proposals of central public sector undertakings ( PSUs),,,
419,M/o Finance,DoE,Civil Accounts Service ,,,
420,M/o Finance,DoE,Disbursements of pension through PSB,,,
421,M/o Finance,DoE,EFC/ Public Investment Board (PIB),,,
422,M/o Finance,DoE,Financial rules & regulations and DFPR,,,
423,M/o Finance,DoE,Financial sanctions,,,
424,M/o Finance,DoE,Indian Audit and accouts deptts.,,,
425,M/o Finance,DoE,Matters related to CGA,,,
426,M/o Finance,DoE,Participation in formulation of annual/ Five year plan of central ministries/ PSUs,,,
427,M/o Finance,DoE,"Release of control Assistance for -The State's Annual plan, Centre's share of State's Calamity Relief fund, Assistance from national Calamity Contigency Fund, Upgradation grants and grants for rural/urban local bodies & other grants as recommended by the successive finance comm.",,,
428,M/o Finance,DoE,Scrutiny of central & state legislation having financial & economic implications ,,,
429,M/o Finance,DoR,"Administration of Excise in UTs - Alcoholic liquors , opium, cannabis & other narcotics drugs, Narcotic drugs & psychotrophic substances Act, 1985",,,
430,M/o Finance,DoR,"Administration of Prevention of Money laundering Act, 2002",,,
431,M/o Finance,DoR,All Matters related to CBEC & CBDT,,,
432,M/o Finance,DoR,All matters related to Econmic Intelligence,,,
433,M/o Finance,DoR,"All questions in relation to income tax, except Income Tax Appelate Tribunal",,,
434,M/o Finance,DoR,All questions related to income tax ( except questions- related to income tax appellate tribunal),,,
435,M/o Finance,DoR,"Benami Transaction  (Prohibition) Act, 1988",,,
436,M/o Finance,DoR,Central Board of Direct Taxes,,,
437,M/o Finance,DoR,Central Board of Excise and customs,,,
438,M/o Finance,DoR,Cess related matter ( invalidatin of surgarcane cess),,,
439,M/o Finance,DoR,Customs Excise & service tax appelate tribunal,,,
440,M/o Finance,DoR,Customs related to all matters,,,
441,M/o Finance,DoR,DG of Revenue Intelligence,,,
442,M/o Finance,DoR,Financial Action task force and related inter - ministerial coordination,,,
443,M/o Finance,DoR,Grants in aid to national institute of Public Finance & Policy ,,,
444,M/o Finance,DoR,Grants in aid to the National Institue of Public Finance and Policy,,,
445,M/o Finance,DoR,GST council/ GST appellate Tribunal/ GST matters,,,
446,M/o Finance,DoR,"Investigations under Foreign Exchange Management Act, 1999",,,
447,M/o Finance,DoR,Preventive detention for augmentation of foreign exchange prevention of smuggling activities,,,
448,M/o Finance,DoR,Sales tax and excise related all matters,,,
449,M/o Finance,DoR,"Smugglers & foreign exchange manipulator Act, 1976",,,
450,M/o Finance,DoR,"Stamp duties on bills of exchange, cheques, promissory notes",,,
451,M/o Finance,DPE,Public Enterprises and PSUs related matters,,,
452,M/o Fish  Animal Husbandry and Dairying,Animal Husbandry &Dairying,"Livestocks, Dairy, Poultry",,,
453,M/o Fish  Animal Husbandry and Dairying,Animal Husbandry &Dairying,Cruelty to Animal ,,,
454,M/o Fish  Animal Husbandry and Dairying,Animal Husbandry &Dairying,Profession veternioary practice ,,,
455,M/o Fish  Animal Husbandry and Dairying,Animal Husbandry &Dairying,Insurance of live stocks and birds ,,,
456,M/o Fish  Animal Husbandry and Dairying,Animal Husbandry &Dairying,Fodder development ,,,
457,M/o Fish  Animal Husbandry and Dairying,Animal Husbandry &Dairying,Courts of Wards,,,
458,M/o Fish  Animal Husbandry and Dairying,Fisheries,Regulatio of fish stock importation guarantee and certification ,,,
459,M/o Food Proc'g Indust.,M/o FPI,Processing of dairy products/ Fish,,,
460,M/o Food Proc'g Indust.,M/o FPI,Food grains milling industry,,,
461,M/o Food Proc'g Indust.,M/o FPI,Protien etc industries planning/ development and control,,,
462,M/o Food Proc'g Indust.,M/o FPI,Bear including non- alcoholic beer,,,
463,M/o Food Proc'g Indust.,M/o FPI,Alcoholic drinks from non- molasses base,,,
464,M/o Food Proc'g Indust.,M/o FPI,Aerated water and soft drinks,,,
465,M/o Health & FW,D/o Health Research,Clinical research/ Clinical Trial,,,
466,M/o Health & FW,D/o Health Research,Ethical issues in Medical & health reasearch,,,
467,M/o Health & FW,D/o Health Research,Technical support for dealing with epdimics & natural calamities,,,
468,M/o Health & FW,D/o Health Research,ICMR,,,
469,M/o Health & FW,D/o HFW,Central Research Institute,,,
470,M/o Health & FW,D/o HFW,Central Drugs Laboratory,,,
471,M/o Health & FW,D/o HFW,Serologist & Chemical Examiner to the Govt. Of India,,,
472,M/o Health & FW,D/o HFW,Central food laboratory/ Food & standardise Laboratory,,,
473,M/o Health & FW,D/o HFW,Central Indian Pharamacopolia Labority ,,,
474,M/o Health & FW,D/o HFW,All India Institute of Physical Medicine & Relief,,,
475,M/o Health & FW,D/o HFW,"The food & afety and standards Act, 2006",,,
476,M/o Health & FW,D/o HFW,"The prevention of Food Advantation Act, 1954",,,
477,M/o Health & FW,D/o HFW,The central food Laboratory,,,
478,M/o Health & FW,D/o HFW,Pharmacists and pharmacy education,,,
479,M/o Health & FW,D/o HFW,Durgs standards,,,
480,M/o Health & FW,D/o HFW,Advt. relating to drugs & medicines,,,
481,M/o Health & FW,D/o HFW,Regulatory aspects: quality/safty/Cabuling & Performance of medical devices,,,
482,M/o Health & FW,D/o HFW,Grants to Indian Red Cross Society,,,
483,M/o Health & FW,D/o HFW,Spas and health Resorts,,,
484,M/o Health & FW,D/o HFW,National board of Examination,,,
485,M/o Health & FW,D/o HFW,Indian Institue of Speech & hearing,,,
486,M/o Health & FW,D/o HFW,Past insitute of India,,,
487,M/o Health & FW,D/o HFW,National Commission on population,,,
488,M/o Health & FW,D/o HFW,Reporductive and child health,,,
489,M/o Health & FW,D/o HFW,Inter- sectoral coordination in accordance with National Population Policy,,,
490,M/o Health & FW,D/o HFW,Jansakhya Sathiarta Kosh & Empowered Actin Group ,,,
491,M/o Health & FW,D/o HFW,Family Planning ,,,
492,M/o Health & FW,D/o HFW,Family welfare schems & Projects,,,
493,M/o Health & FW,D/o HFW,International Institute of population sciences Mumbai,,,
494,M/o Health & FW,D/o HFW,Hindustan Latex limited thiruvanatapuram,,,
495,M/o Health & FW,D/o HFW,"MTP Act, 1971, Prohibition of Sex selection Act, 1994",,,
496,M/o Heavy Industries,M/o HE,Mining and allied machinery corporation ltd,,,
497,M/o Heavy Industries,M/o HE,BHEL,,,
498,M/o Heavy Industries,M/o HE,HMT,,,
499,M/o Heavy Industries,M/o HE,Scooters India Ltd.,,,
500,M/o Heavy Industries,M/o HE,Andrew Yule & Company Ltd.,,,
501,M/o Heavy Industries,M/o HE,Bharat Opthalmic,,,
502,M/o Heavy Industries,M/o HE,Bharat Glass,,,
503,M/o Heavy Industries,M/o HE,Cement Corporation of India Ltd.,,,
504,M/o Heavy Industries,M/o HE,Cycle Corporation of India Ltd.,,,
505,M/o Heavy Industries,M/o HE,The National Indutrial Development corp.Ltd.,,,
506,M/o Heavy Industries,M/o HE,NEPA Ltd.,,,
507,M/o Heavy Industries,M/o HE,Rajasthan Elect. & instruments Ltd.,,,
508,M/o Heavy Industries,M/o HE,Hindustan News Print Ltd.,,,
509,M/o Heavy Industries,M/o HE,Fluid control Research Institute,,,
510,M/o Heavy Industries,M/o HE,Weigh Bird (India) Ltd.,,,
511,M/o Heavy Industries,M/o HE,The Haara heavy Plates & vesuels Ltd.,,,
512,M/o Heavy Industries,M/o HE,Natinal Automative teting & Reserch & Oer.Infra. Project (NATRIP) & ( NATIS),,,
513,M/o Home Affairs,D/o Border Management,Management of international land & coastal Borders,,,
514,M/o Home Affairs,D/o Border Management,Border area destroy,,,
515,M/o Home Affairs,D/o Border Management,Creation of infrastructure in border area.,,,
516,M/o Home Affairs,D/o Home,Notificatin for Pres./ V.P/ PM/ Other ministers,,,
517,M/o Home Affairs,D/o Home,Nomination to R.S/L.S,,,
518,M/o Home Affairs,D/o Home,Appointment/ Resignation/Removalof Governors,,,
519,M/o Home Affairs,D/o Home,Bills passed by legislatures of states reserved by Governor for the consideratio of the president/prior approval of the presidence to the promulgation of ordinances by Governor of states,,,
520,M/o Home Affairs,D/o Home,Property accruing to the union by escheat or lapse of a bon,,,
521,M/o Home Affairs,D/o Home,Financial emergency / Emergency provisions,,,
522,M/o Home Affairs,D/o Home,Special provisions relatig to language spoken by subsitutional proportion of population,,,
523,M/o Home Affairs,D/o Home,Conventions with other countries in Judicial matters including question ruatted to to ICJ and referene from UN relating to obscene publication ,,,
524,M/o Home Affairs,D/o Home,Code of cnduct of legislatures/minsters,,,
525,M/o Home Affairs,D/o Home,Employment of wires/dependents of Govt. servants in foreing missio in India.,,,
526,M/o Home Affairs,D/o Home,Exchang of viits b/w civil & military officers,,,
527,M/o Home Affairs,D/o Home,Lotteries organised by GOI/GOI of States/Uts,,,
528,M/o Home Affairs,D/o Home,"Census of population including adminstratino of the census Art, 1948",,,
529,M/o Home Affairs,D/o Home,Emoluments etc of Ministers,,,
530,M/o Home Affairs,D/o Home,National anthem/Flag/Endax/Warrants & precedence,,,
531,M/o Home Affairs,D/o Home,Awards & Recognitions,,,
532,M/o Home Affairs,D/o Home,Nationl Festivals/ National Integration/ Comm wal harmony,,,
533,M/o Home Affairs,D/o Home,change in geographical names,,,
534,M/o Home Affairs,D/o Home,Poisons,,,
535,M/o Home Affairs,D/o Home,Registration of Births and Deaths,,,
536,M/o Home Affairs,D/o Home,"Newspapers, books and printing pressed The commission of Inquiry Act1952",,,
537,M/o Home Affairs,D/o Home,"The prevention of insults to nationa honour Act, 1971",,,
538,M/o Home Affairs,D/o Home,"The religious Institutions (prevention of Misue ) Act, 1991",,,
539,M/o Home Affairs,D/o Home,"The acquisitions of certain areas at ayodhya Act, 1993",,,
540,M/o Home Affairs,D/o Home,D/o J & K and Ladakh Affairs,,,
541,M/o Home Affairs,D/o Home,All matters related to J&K and Ladakh,,,
542,M/o Home Affairs,D/o States,Establishment of new states,,,
543,M/o Home Affairs,D/o States,Inter - state council/ Inter- state migration,,,
544,M/o Home Affairs,D/o States,UTS with legislature/ NCT/puducherri,,,
545,M/o Home Affairs,D/o States,Pension/fcitites to freedom fighters,,,
546,M/o Home Affairs,D/o States,Human rights,,,
547,M/o Home Affairs,D/o States,Bureau of police Research & Den,,,
548,M/o Home Affairs,D/o States,National civil defence/fire service college,,,
549,M/o Home Affairs,D/o States,Development of fire services,,,
550,M/o Home Affairs,D/o States,Police reforms/ Irison reforms,,,
551,M/o Home Affairs,D/o States,Regulations framed by Governors of states for tribal areas,,,
552,M/o Home Affairs,Internal Security,Assam Rifles/ BSF/ITBP/SSB/ National Police Academy/ NCRB/IB,,,
553,M/o Home Affairs,Internal Security,CFSL/Govt. Examiners of questioned documents,,,
554,M/o Home Affairs,Internal Security,CISF/CRPF/NSG/IPS,,,
555,M/o Home Affairs,Internal Security,Grant of Indian citizenship by registration & naturalization,,,
556,M/o Home Affairs,Internal Security,Matters related to Bureau of Immigration,,,
557,M/o Home Affairs,Internal Security,Grant of Visa iro citizens of Af/Ban/Pak & SL for their logn term stay regulti of entry/ stay of all foreigness into/ in India,,,
558,M/o Home Affairs,Internal Security,Deporation/Repatriation of citizens,,,
559,M/o Home Affairs,Internal Security,Acceptance & utilization of foreign contribution/ hostality by assciations and  persons,,,
560,M/o Home Affairs,Internal Security,"The Essential service smaintenance Act,1981",,,
561,M/o Home Affairs,Internal Security,Matter srelated to sikkim/ Nagaland,,,
562,M/o Home Affairs,Internal Security,"Arms, Fire arms and ammunition",,,
563,M/o Home Affairs,Internal Security,Relief and rehab of refugees etc,,,
564,M/o Home Affairs,Internal Security,Ddadakaranya development scheme/Develoment Authority,,,
565,M/o Home Affairs,Internal Security,Au matters related to narcotics control Beurau,,,
566,M/o Home Affairs,Internal Security,"The young persons harmful publicati Act, 1956",,,
567,M/o Home Affairs,Internal Security,"The foreigners Act, 1946",,,
568,M/o Home Affairs,Internal Security,"The passport (entry into India) mAct, 1920",,,
569,M/o Home Affairs,Internal Security,"The registration of Foreignes Act, 1939",,,
570,M/o Home Affairs,Internal Security,"The immigration (carries liability) Act, 2000",,,
571,M/o Home Affairs,Internal Security,"The foreign contribution (Ry.) Act, 1976",,,
572,M/o Home Affairs,Internal Security,Matter related to many property,,,
573,M/o Home Affairs,Official Language,Hindi/ Kendriya Hindi Samiti/Central translation Bureau,,,
574,M/o Housing & Ur. Aff.,MoHUA,Horticulture Operations,,,
575,M/o Housing & Ur. Aff.,MoHUA,"Administration of 4 rehab. Markets viz. Sarojini Nagar, Shankar, Pleasure Garden, Kamla Market",,,
576,M/o Housing & Ur. Aff.,MoHUA,Stationery and printing for GoI incuding official publication,,,
577,M/o Housing & Ur. Aff.,MoHUA,Planning and Coordination of Urban Transport System,,,
578,M/o Housing & Ur. Aff.,MoHUA,Tramways/ Town and Country Planning,,,
579,M/o Housing & Ur. Aff.,MoHUA,DDA,,,
580,M/o Housing & Ur. Aff.,MoHUA,Erection of memorials in honour of freedom fighters,,,
581,M/o Housing & Ur. Aff.,MoHUA,The Central Council for Local Self Govt.,,,
582,M/o Housing & Ur. Aff.,MoHUA,Adminisration of Raj Ghat Samadhi Committee,,,
583,M/o Housing & Ur. Aff.,MoHUA,Plannding and Dev. Of NCR/ NCR planning board 1985,,,
584,M/o Housing & Ur. Aff.,MoHUA,Indian National Trust for Art & Culture Heritage,,,
585,M/o Housing & Ur. Aff.,MoHUA,HUDCO,,,
586,M/o Housing & Ur. Aff.,MoHUA,NBCC,,,
587,M/o Housing & Ur. Aff.,MoHUA,Hindustan Prefab. Ltd.,,,
588,M/o Housing & Ur. Aff.,MoHUA,National Housing Policy,,,
589,M/o Housing & Ur. Aff.,MoHUA,National Cooperative Housing Federation,,,
590,M/o Housing & Ur. Aff.,MoHUA,"Requisitioning and Acquistion of Immovable Property Act, 1955",,,
591,M/o Housing & Ur. Aff.,MoHUA,"Delhi Hotels (Control of Accomodation) Act, 1949",,,
592,M/o Housing & Ur. Aff.,MoHUA,"The Public Premises (Eviction of unauthorised occupants) Act, 1971",,,
593,M/o Housing & Ur. Aff.,MoHUA,Delhi Urban Arts Commission,,,
594,M/o Housing & Ur. Aff.,MoHUA,"Street Vendors Act, 2014",,,
595,M/o Housing & Ur. Aff.,MoHUA,"Real State Regulation and Development Act, 2016",,,
596,M/o I & B,M/o I & B,Import of feature and short films for theatrical and non-theatrical viewing,,,
597,M/o I & B,M/o I & B,Import of unexposed cinemotography films/ various types of equipment required by the film industry,,,
598,M/o I & B,M/o I & B,Organisation of / participation in International Film Festivals,,,
599,M/o I & B,M/o I & B,Film Society Movement,,,
600,M/o I & B,M/o I & B,Films/ audio-visual/ News & C.A. content on online platforms,,,
601,M/o I & B,M/o I & B,Production & release of advertisements on behalf of GoI,,,
602,M/o I & B,M/o I & B,Liaison b/w Govt & the press,,,
603,M/o I & B,M/o I & B,Publicity to and for the Armed Forces,,,
604,M/o I & B,M/o I & B,"Administration of the Press & Registration of Books Act, 1867 relating to newspaper",,,
605,M/o I & B,M/o I & B,"Administration of the Press Council Act, 1978",,,
606,M/o I & B,M/o I & B,Allocation of newsprint to Newspapers,,,
607,M/o I & B,M/o I & B,Indian Information Service,,,
608,M/o I & B,M/o I & B,Office of the Registrar of Newspapers of India,,,
609,M/o I & B,M/o I & B,CBFC,,,
610,M/o I & B,M/o I & B,Directorate of Field Publicity,,,
611,M/o I & B,M/o I & B,"Research, Reference & Training Division",,,
612,M/o I & B,M/o I & B,Central Monitoring Service,,,
613,M/o I & B,M/o I & B,Children Film Society of India,,,
614,M/o I & B,M/o I & B,Broadcast Engineers Consultants (India) Ltd.,,,
615,M/o Jal Shakti,D/o WR RD & GR,National Water Resources Council,,,
616,M/o Jal Shakti,D/o WR RD & GR,Water Quality Assessment,,,
617,M/o Jal Shakti,D/o WR RD & GR,"Conservation, development, management and abatement of pollution of rivers",,,
618,M/o Jal Shakti,D/o WR RD & GR,Internationa water laws,,,
619,M/o Jal Shakti,D/o WR RD & GR,"The Northern India Canal and Drainage Act, 1873",,,
620,M/o Jal Shakti,DDWS,Rural Water Supply,,,
621,M/o Jal Shakti,DDWS,Drinking Water realted matters,,,
622,M/o Labour and Employment,M/o L & E,I.r.o. Union Railways: Payment of wages/ trade disputes/ hours of work,,,
623,M/o Labour and Employment,M/o L & E,"I.r.o. Docks: Regulation of safety, health, welfare measures",,,
624,M/o Labour and Employment,M/o L & E,Regulation of labour and safety in mines and oildfields,,,
625,M/o Labour and Employment,M/o L & E,Unemployment Insurance,,,
626,M/o Labour and Employment,M/o L & E,Employment & Unemployment except rural employment & Unemployment,,,
627,M/o Labour and Employment,M/o L & E,Employment Exchanges,,,
628,M/o Labour and Employment,M/o L & E,"The war injuries (Compensation Insurance) Act, 1943",,,
629,M/o Labour and Employment,M/o L & E,"Administration of the working journalists and other newspaper employees (conditions of service) & MP Act, 1955",,,
630,M/o Labour and Employment,M/o L & E,Prime Minister Shram Awards,,,
631,M/o Labour and Employment,M/o L & E,National Safety Awards (for mines and factories),,,
632,M/o Labour and Employment,M/o L & E,Rashtriay Vishwakarma Puraskar,,,
633,M/o Law and Justice,D/o Justice,Appointment/ Resignation/Removal of CJI/ Judges of SC/HC,,,
634,M/o Law and Justice,D/o Justice,Appointment/ Resignation/Removal of Judicial Commissions/ Officers in Uts,,,
635,M/o Law and Justice,D/o Justice,Creation of all India Judicial Service,,,
636,M/o Law and Justice,D/o Justice,Legal aid to poor,,,
637,M/o Law and Justice,D/o Justice,"Access to justice, justice delivery and legal reforms",,,
638,M/o Law and Justice,D/o Legal Affairs,Advice to Ministries on Legal matters,,,
639,M/o Law and Justice,D/o Legal Affairs,Engagement of Counsels,,,
640,M/o Law and Justice,D/o Legal Affairs,AG of India,,,
641,M/o Law and Justice,D/o Legal Affairs,SG of India,,,
642,M/o Law and Justice,D/o Legal Affairs,Authorization of officers to execute contracts and assurances and of property on behalf of the President U/A 399 (1),,,
643,M/o Law and Justice,D/o Legal Affairs,Indian Legal Service,,,
644,M/o Law and Justice,D/o Legal Affairs,Treaties/ Agreements with foreign in matters of civil law,,,
645,M/o Law and Justice,D/o Legal Affairs,Law Commission,,,
646,M/o Law and Justice,D/o Legal Affairs,Legal Profession,,,
647,M/o Law and Justice,D/o Legal Affairs,Enlargement of jurisdiction of SC,,,
648,M/o Law and Justice,D/o Legal Affairs,References to SC U/A 143,,,
649,M/o Law and Justice,D/o Legal Affairs,"Adminstration of the Notaries Act, 1952",,,
650,M/o Law and Justice,D/o Legal Affairs,Income Tax Appellate Tribunal,,,
651,M/o Law and Justice,D/o Legal Affairs,Appellate Tribunal for Foreign Exchange,,,
652,M/o Law and Justice,Legislative Department,Drafting of Bills/ Ordinances/ Regulations,,,
653,M/o Law and Justice,Legislative Department,Hindi Translation of Bills/Ordinanes/ Regulations,,,
654,M/o Law and Justice,Legislative Department,Elections to Parliament/ Legislatures of States/ President/ VP,,,
655,M/o Law and Justice,Legislative Department,Election Commission,,,
656,M/o Law and Justice,Legislative Department,Publication of law books & Law journals in Hindi,,,
657,M/o Law and Justice,Legislative Department,Marriage/ Divorce/ Infants/ Minors/ Adoptions/ Wills/ Intestate & Succession/ Joint Family & Partition,,,
658,M/o Law and Justice,Legislative Department,Transfer of property/ other than agricultural land (excluding benami transactions),,,
659,M/o Law and Justice,Legislative Department,Contracts but not including those relating to agricultal land ,,,
660,M/o Law and Justice,Legislative Department,Actionable wrongs,,,
661,M/o Law and Justice,Legislative Department,Trusts/ Trustees,,,
662,M/o Law and Justice,Legislative Department,Evidence & Oaths,,,
663,M/o Law and Justice,Legislative Department,Civil Procedure including Limitation & Arbitration,,,
664,M/o Mines,M/o Mines,Geological Survey of India,,,
665,M/o Mines,M/o Mines,Indian Bureau of Mines,,,
666,M/o Mines,M/o Mines,Metallurgical grade Silicon,,,
667,M/o Minority Affairs,M/o Minority Affairs,All matters relating to minority communities except matters relating to law and order,,,
668,M/o Minority Affairs,M/o Minority Affairs,"Evacuee Waqf Property Act, 1950",,,
669,M/o Minority Affairs,M/o Minority Affairs,"The Waqf Act, 1955",,,
670,M/o Minority Affairs,M/o Minority Affairs,Represenation of the Anglo-Indian community,,,
671,M/o Minority Affairs,M/o Minority Affairs,Pant-Mirza agreement of 1955 (Protection and preservationof non muslim shrines in Pakistan and muslim shrines in India),,,
672,M/o Minority Affairs,M/o Minority Affairs,Maulana Azas Education Foundation,,,
673,M/o Minority Affairs,M/o Minority Affairs,National Commission for Socially and Economically Backward Sections among religious & linguistic minorities,,,
674,M/o Minority Affairs,M/o Minority Affairs,"Management of Haj Pilgrimage, including administration of the Haj Committee Act, 1959 (51 of 1959) and the rules made thereunder.",,,
675,M/o Minority Affairs,M/o Minority Affairs,All matters related to Justice Sacchar Committee,,,
676,M/o New & RE,M/o N&RE,Research and Development of Biogas/ Biogas Units,,,
677,M/o New & RE,M/o N&RE,Commission for additional sourceds of Energy,,,
678,M/o New & RE,M/o N&RE,Solar energy including photovoltaic devices,,,
679,M/o New & RE,M/o N&RE,All matters relating to small/ mini/ micro hydel projects of and below 25 MW capacity,,,
680,M/o New & RE,M/o N&RE,Tidal Energy,,,
681,M/o New & RE,M/o N&RE,Integrated Rural Energy Programme,,,
682,M/o New & RE,M/o N&RE,Geothermal Energy,,,
683,M/o Panchayati Raj,M/o Panchayati Raj,All matters related to Panchayati Raj/ PR institutions,,,
684,M/o Panchayati Raj,M/o Panchayati Raj,District Planning Committees,,,
685,M/o Parliamentary Affairs,M/o Parliamentary Affairs,Implementation of assurances given by Ministers in Parliament,,,
686,M/o Parliamentary Affairs,M/o Parliamentary Affairs,Officially sponsored visits of MPs to places of interest,,,
687,M/o Parliamentary Affairs,M/o Parliamentary Affairs,Organisations of youth parliaments competitions in Schools/ Colleges,,,
688,M/o Parliamentary Affairs,M/o Parliamentary Affairs,"Salaries, allowances of MPs and LoOpposition etc.",,,
689,M/o Pers. Pub Gr&Pen.,DARPG,Administrative Reforms/ E-governance,,,
690,M/o Pers. Pub Gr&Pen.,DARPG,O&M,,,
691,M/o Pers. Pub Gr&Pen.,DARPG,Research in public management,,,
692,M/o Pers. Pub Gr&Pen.,DARPG,Administration of CSMOP,,,
693,M/o Pers. Pub Gr&Pen.,DoPT,Reservations of Posts in Services,,,
694,M/o Pers. Pub Gr&Pen.,DoPT,Central Vigilance Commission,,,
695,M/o Pers. Pub Gr&Pen.,DoPT,Relationship b/w MPs and Administration,,,
696,M/o Pers. Pub Gr&Pen.,DoPT,"The Prevention of Corruption Act, 1947",,,
697,M/o Pers. Pub Gr&Pen.,DoPT,CBI,,,
698,M/o Pers. Pub Gr&Pen.,DoPT,Delhi Special Police Establishment,,,
699,M/o Pers. Pub Gr&Pen.,DoPT,The Food Offences Wing,,,
700,M/o Pers. Pub Gr&Pen.,DoPT,The Economic Offences Wing,,,
701,M/o Pers. Pub Gr&Pen.,DoPT,Administration of Central Civil Services (Safeguarding of National Security) Rules,,,
702,M/o Pers. Pub Gr&Pen.,DoPT,Oath of allegiance to the Constitution,,,
703,M/o Pers. Pub Gr&Pen.,DoPT,ACC,,,
704,M/o Pers. Pub Gr&Pen.,DoPT,Central Establishment Board,,,
705,M/o Pers. Pub Gr&Pen.,DoPT,Service Associations of the Industrial & Non-industrial employees of GoI,,,
706,M/o Pers. Pub Gr&Pen.,DoPT,Joint Consultative Machinery,,,
707,M/o Pers. Pub Gr&Pen.,DoPT,"staff welfare including sports, cultural activities, Grih Kalyan Kendras, Canteens, Cooperative stores etc.",,,
708,M/o Pers. Pub Gr&Pen.,DoPT,All matters of CAT/SAT,,,
709,M/o Pers. Pub Gr&Pen.,DoPT,UPSC,,,
710,M/o Pers. Pub Gr&Pen.,DoPT,Allocation of service personnel affected by re-organization of States,,,
711,M/o Pers. Pub Gr&Pen.,DoPT,Public Enterprises Selection Board,,,
712,M/o Pers. Pub Gr&Pen.,DPPW,"Formulation and coordination of matters relating to retirement benefits to Central Govt. employees (Civil, Defence and Railway Pensioners)",,,
713,M/o Planning,M/o Planning,Responsibility to Parliament in regard to NITI Aayog,,,
714,M/o PNG,M/o PNG,Exploration/exploitation of petroleum including natural gas/ methane,,,
715,M/o PNG,M/o PNG,All concerning Biofuels and National Policy on biofuels,,,
716,M/o PNG,M/o PNG,Tube blending and greases,,,
717,M/o PNG,M/o PNG,Engineers India Ltd,,,
718,M/o PNG,M/o PNG,Indo-Burman Petroleum Company,,,
719,M/o PNG,M/o PNG,"The ESSO (Acquisition of undertakings in India) Act, 1974",,,
720,M/o PNG,M/o PNG,"The Burmah Shell (Acquisition of Underakings) Act, 1976",,,
721,M/o PNG,M/o PNG,"The Caltex (India) Ltd. Act, 1977",,,
722,M/o PNG,M/o PNG,Administration of Balmer Lawrie Investments Ltd.,,,
723,M/o Ports  Shipping and Waterways,M/o PS&W,Light houses and Light ships,,,
724,M/o Ports  Shipping and Waterways,M/o PS&W,Fishing vessels Industry,,,
725,M/o Ports  Shipping and Waterways,M/o PS&W,Floating Craft Industry,,,
726,M/o Ports  Shipping and Waterways,M/o PS&W,Organisation and maintenance of mainland islands and inter-island shipping services,,,
727,M/o Ports  Shipping and Waterways,M/o PS&W,"Administration of the Dock workers (Regulation of Employment) Act, 1948",,,
728,M/o Ports  Shipping and Waterways,M/o PS&W,Planning of inland water transport,,,
729,M/o Ports  Shipping and Waterways,M/o PS&W,The development of township of Gandhidham,,,
730,M/o Ports  Shipping and Waterways,M/o PS&W,Prevention and control of pollutiondue to ships/ ship wreckage/ oil pollution in port areas,,,
731,M/o Ports  Shipping and Waterways,M/o PS&W,Dock Labour Boards,,,
732,M/o Ports  Shipping and Waterways,M/o PS&W,Inland Waterways Authority of India,,,
733,M/o Ports  Shipping and Waterways,M/o PS&W,Seamen's Provident Fund Organization/Act,,,
734,M/o Ports  Shipping and Waterways,M/o PS&W,Seafarers Welfare Fund Society,,,
735,M/o Ports  Shipping and Waterways,M/o PS&W,Cohin Shipyard Ltd.,,,
736,M/o Ports  Shipping and Waterways,M/o PS&W,Dredging Corporation of India ,,,
737,M/o Ports  Shipping and Waterways,M/o PS&W,Ennore Port Ltd.,,,
738,M/o Ports  Shipping and Waterways,M/o PS&W,International Maritime Organization,,,
739,M/o Ports  Shipping and Waterways,M/o PS&W,"The merchant Shipping Act, 1958",,,
740,M/o Ports  Shipping and Waterways,M/o PS&W,"The Inland Waterways Authority of India Act, 1985",,,
741,M/o Ports  Shipping and Waterways,M/o PS&W,"The multimodal Transportation of Goods Act, 1993",,,
742,M/o Power,M/o Power,The Damodar Valley Corporation,,,
743,M/o Power,M/o Power,The Bhakra Beas Mgmt. Board (Except Irrigation),,,
744,M/o Power,M/o Power,Power Finance Corporation Ltd.,,,
745,M/o Power,M/o Power,Tehri Hydro Dev. Corporation Ltd.,,,
746,M/o Power,M/o Power,Nathpa Jhakri Power Corporation,,,
747,M/o Power,M/o Power,Power Trading Corporation of India Ltd.,,,
748,M/o Power,M/o Power,Matters related to Bureau of Energy Efficiency,,,
749,M/o Power,M/o Power,Narmada Hydro Dev. Corporation (Joint venture),,,
750,M/o Railways,M/o Railways,Govt. Railways except Railway inspectorate & Railway audit,,,
751,M/o Railways,M/o Railways,Non-Govt. Railways except work allocated to MoHUA,,,
752,M/o Railways,M/o Railways,Administration of Pension Rules applicable to Railway Employees,,,
753,M/o RTH*,M/o RTH,"Coordination, research, standards and policy matters in r/o ropeways and other innovative/ alternative mobility solutions",,,
754,M/o Rural Development,D/o Land Resources,Recovery of claims in a State in r/o taxes and other public demands including arrears of land revenue.,,,
755,M/o Rural Development,D/o Land Resources,"Land: Collection of rent, transfer, alienation of land",,,
756,M/o Rural Development,D/o Land Resources,Land improvements and agricultural loans,,,
757,M/o Rural Development,D/o Land Resources,Land revenue,,,
758,M/o Rural Development,D/o Land Resources,Duties i.r.o. succession to agricultural land,,,
759,M/o Rural Development,D/o Land Resources,National Wasteland Dev.  Board,,,
760,M/o Rural Development,D/o Land Resources,Natioanl Land Use and Watershed Development Council,,,
761,M/o Rural Development,D/o Land Resources,"Promotion of production of fuelwood, fodder and timber on non-forest lands including private wastelands",,,
762,M/o Rural Development,D/o Land Resources,Drought prone area programme,,,
763,M/o Rural Development,D/o Land Resources,Deser Develompent Programmes,,,
764,M/o Rural Development,D/o Land Resources,"The Regisration Act, 1908",,,
765,M/o Rural Development,D/o Land Resources,National Mission on Bio-Fuels ,(National Policy of Biofuels by M/o PNG & Biodiesel in M/o New and renewal energy),,
766,M/o Rural Development,D/o RD,Council of advancement of People's action and Rural Technology (CAPART),,,
767,M/o Rural Development,D/o RD,Road works financed by CG in Tribal areas of Assam,,,
768,M/o Rural Development,D/o RD,Rural employment/ unemployment etc.,,,
769,M/o Rural Development,D/o RD,Small farmers development agency/ marginal farmers/ agricultural labourers etc.,,,
770,M/o Rural Development,D/o RD,Rural connectivity,,,
771,M/o Rural Development,D/o RD,Pradhanmantri Gram Sadak Yojana,,,
772,M/o Science and Tech,D/o Biotechnology,"Policy in Biotechnology, biologicals",,,
773,M/o Science and Tech,D/o Biotechnology,Research and Development programme on bio-diesel,,,
774,M/o Science and Tech,D/o Biotechnology,Lab studies on Jatropha/ Pogamia/ Madhura/ Slavadora and Mixed oils,,,
775,M/o Science and Tech,D/o Biotechnology,Research & Develoment for bio-ethanol recovery,,,
776,M/o Science and Tech,D/o Biotechnology,Central agency for DNA/RNA/ Culture/ Cells etc.,,,
777,M/o Science and Tech,D/o Biotechnology,International Centre for Genetic Engg. & Bio-Technology,,,
778,M/o Science and Tech,D/o Biotechnology,"National Institute of Immunology, New Delhi",,,
779,M/o Science and Tech,D/o Biotechnology,"National Center for Cell Sciences, Pune",,,
780,M/o Science and Tech,D/o Biotechnology,"National Center for Plant Genome Research, New Delhi",,,
781,M/o Science and Tech,D/o Biotechnology,"National Brain Research Center, Gurugram",,,
782,M/o Science and Tech,D/o Biotechnology,Bharat Immunologicals & Biologicals Corporation Ltd.,,,
783,M/o Science and Tech,D/o Biotechnology,"Institute for bioresource and sustainable development, Imphal",,,
784,M/o Science and Tech,D/o Biotechnology,Indian Vaccines Corporation Ltd. (IVCOL) Manesar,,,
785,M/o Science and Tech,D/o Sci & Tech,Science and Engineering research council,Other research items in D/o Scientific and industrial research,,
786,M/o Science and Tech,D/o Sci & Tech,Futurology,,,
787,M/o Science and Tech,D/o Sci & Tech,Technology Development Board,,,
788,M/o Science and Tech,D/o Sci & Tech,The Survey of India,,,
789,M/o Science and Tech,D/o Sci & Tech,Natinal Atlas and Thematic Mapping Organization (NATMO),,,
790,M/o Science and Tech,D/o Sci & Tech,National Spatial data infrastructure & Promotion of GIS,,,
791,M/o Science and Tech,D/o Sci & Tech,The National Innovation Foundation Ahmedabad,,,
792,M/o Science and Tech,D/o Scientific & Industrial Research,National Research Development Corporation,,,
793,M/o Science and Tech,D/o Scientific & Industrial Research,All matters related to Central Electronics Ltd.,,,
794,M/o Science and Tech,D/o Scientific & Industrial Research,Registration and recognnition of R&D Units,,,
795,M/o Science and Tech,D/o Scientific & Industrial Research,Technical matters related to UNCTAD & WIPO,,,
796,M/o Science and Tech,D/o Scientific & Industrial Research,National Register for foreign collaborators,,,
797,M/o Skill Dev. & Entrepreneurship,M/o SD&E,Doing market research and devising training curriculum in important secotrs ,,,
798,M/o Skill Dev. & Entrepreneurship,M/o SD&E,Industry-institute linkage & Work related to Industrial Training Institute,,,
799,M/o Skill Dev. & Entrepreneurship,M/o SD&E,"National Institute for Entrepreneurship and Small Business Development, NOIDA",,,
800,M/o Skill Dev. & Entrepreneurship,M/o SD&E,"Indian Institute of Entrepreneurship, Guwahati",,,
801,M/o SME,MSME,"Cooperation in the MSME sector including Cottage, Khadi, Village and Coir industries, except Cooperative Sugar Factories.",,,
802,M/o SME,MSME,Development of flavour & fragrances,,,
803,M/o SME,MSME,KVIC Mumbai,,,
804,M/o SME,MSME,"Coir Board, Kochi",,,
805,M/o SME,MSME,Central Footwear Training Institute,,,
806,M/o SME,MSME,"Institute for design of electrical measuring instruments, Mumbai",,,
807,M/o SME,MSME,"Electronic sevice and training centre, Ramnagar",,,
808,M/o SME,MSME,Process & Product Dev. Center Agra/ Meerut,,,
809,M/o SME,MSME,Fragrane & flavour Dev. Center ,,,
810,M/o SME,MSME,"Center for the development of glass industry, Firozabad",,,
811,M/o SME,MSME,"Mahatma Gandhi Institute of Rural Industrialization, Wardha",,,
812,M/o Social Justice and Empowerment,D/o Empowerment of Persons with Disabilities,"The Indian Sign Language Research & Training Center, New Delhi",,,
813,M/o Social Justice and Empowerment,D/o Empowerment of Persons with Disabilities,Indo-US/ Indo-UK/ Indo-German/Indo-Swiss/Indo-Swedish agreements for duty free import of donated relief goods/supplies,,,
814,M/o Social Justice and Empowerment,D/o Empowerment of Persons with Disabilities,Social security/ Social insurance,,,
815,M/o Social Justice and Empowerment,D/o Empowerment of Persons with Disabilities,Education & Training of rehabilitation professionals,,,
816,M/o Social Justice and Empowerment,D/o Empowerment of Persons with Disabilities,Charitable and religours endowments,,,
817,M/o Social Justice and Empowerment,D/o Empowerment of Persons with Disabilities,"The Rehabilitation Council of India Act, 1992",,,
818,M/o Social Justice and Empowerment,D/o Soc Jus & Emp,Nomadic and Migratory Tribes,Falls under List-III  - Concurrent List of Seventh Schedule of the Constitution,,
819,M/o Social Justice and Empowerment,D/o Soc Jus & Emp,Nodal Departments for SCs/Socially and Educationally Backward classes/ Denotified Tribes/ EBCs & Senior Citizens/ Transgender persons,,,
820,M/o Social Justice and Empowerment,D/o Soc Jus & Emp,Rebh./ Employment of manual scavangers,,,
821,M/o Social Justice and Empowerment,D/o Soc Jus & Emp,"Construction of dry latrines (Prohibition) Act, 1993",,,
822,M/o Social Justice and Empowerment,D/o Soc Jus & Emp,"The protection of Civil Rights Act, 1955",,,
823,M/o Social Justice and Empowerment,D/o Soc Jus & Emp,National SC/ Safaikarmchari/ Backward Classes Finance & Development Corporation,,,
824,M/o Social Justice and Empowerment,D/o Soc Jus & Emp,National Institute of Social Defence,,,
825,M/o Social Justice and Empowerment,D/o Soc Jus & Emp,Dr. Ambedkar/ Baba Jagjivan Ram Foundation,,,
826,M/o Steel,M/o Steel,National arc Furnace,,,
827,M/o Steel,M/o Steel,Induction Furnace Units,,,
828,M/o Steel,M/o Steel,"Development of Iron ore mines/ ore mines (manganese, chrome, limestone, sillimanite, kaynite & other minerals used in iron and steel industry)",,,
829,M/o Steel,M/o Steel,National Mineral Development Corporation Ltd.,,,
830,M/o Steel,M/o Steel,Metallurgical & Engineering Consultants (India) Ltd. MECON,,,
831,M/o Steel,M/o Steel,Bharat Refractories Ltd.,,,
832,M/o Steel,M/o Steel,Bird Group of Companies,,,
833,M/o Textiles,M/o Textiles,Cotton including gining & processing,,,
834,M/o Textiles,M/o Textiles,Price control of Cotton,,,
835,M/o Textiles,M/o Textiles,Cellulosic fibres but excluding non-cellulosic fibre,,,
836,M/o Textiles,M/o Textiles,Sericulture/ Jute and Jute products,,,
837,M/o Textiles,M/o Textiles,Handicrafts,,,
838,M/o Textiles,M/o Textiles,Export/ Promotion of Textiles/ Handloom/ Woolen/ Powerlooms etc. ,,,
839,M/o Textiles,M/o Textiles,"O/o Commissioner of Payments, New Delhi",,,
840,M/o Textiles,M/o Textiles,"National Institute of Fashion Technology, New Delhi",,,
841,M/o Textiles,M/o Textiles,"National Center for Design and Product Development, Delhi",,,
842,M/o Textiles,M/o Textiles,"Metal Handicrafts Service Center, Moradabad",,,
843,M/o Textiles,M/o Textiles,"Central Cottage Industries Corporation, New Delhi",,,
844,M/o Textiles,M/o Textiles,British India Corporation Ltd. Kanpur,,,
845,M/o Textiles,M/o Textiles,All India Powerloom Board,,,
846,M/o Textiles,M/o Textiles,"The synthetic and Rayon textiles Export Promotion Council, Mumbai",,,
847,M/o Textiles,M/o Textiles,Apparel Export Promotion Council Mumbai,,,
848,M/o Textiles,M/o Tourism,ITDC,,,
849,M/o Tribal Affairs,M/o Tribal Affairs,"Scheduled Areas & Protection of Civil Rights Act, 1955",,,
850,M/o Tribal Affairs,M/o Tribal Affairs,Monitoring of Tribal Subplan basd on the framework and mechanism designed by NITI Aayog,,,
851,M/o WCD,M/o WCD,Welfare of the family,,,
852,M/o WCD,M/o WCD,Care of pre-school children including pre-primary education,,,
853,M/o WCD,M/o WCD,National Nutrition Policy,,,
854,M/o WCD,M/o WCD,National Nutrition Mission,,,
855,M/o WCD,M/o WCD,"The Immoral Traffic (prevention) Act, 1956",,,
856,M/o WCD,M/o WCD,"The Indecent Represenation of Women (prevention) Act, 1986",,,
857,M/o WCD,M/o WCD,"The Dowry Prohibition Act, 1961",,,
858,M/o WCD,M/o WCD,"The Commission of Sati (Prevention) Act, 1987",,,
859,M/o WCD,M/o WCD,Implementation of the infant milk substitutes/ feeding bottles and infant foods,,,
860,M/o WCD,M/o WCD,Coordination of activities and programmes of cooperative for assistance and relief everywhere (CARE),,,
861,M/o WCD,M/o WCD,Central Social Welfare Board,,,
862,M/o WCD,M/o WCD,Food and Nutrition Board,,,
863,M/o WCD,M/o WCD,Juvenile delinquency & vagrancy,,,
864,M/o WCD,M/o WCD,Probation of juvenile offenders,,,
865,M/o WCD,M/o WCD,CARA,,,
866,M/o WCD,M/o WCD,Children Act/ JJ Act,,,
867,M/o WCD,M/o WCD,"The child marriage-restraint Act, 1929",,,
868,M/o WCD,M/o WCD,Nutrition Extension and Development and popularisation of subsidary and protective foods.,,,
869,M/o WCD,M/o WCD,Orphans and orphanage,,,
870,M/o Youth Aff. & Sports,D/o Sports,Physical Education,,,
871,M/o Youth Aff. & Sports,D/o Youth Affairs,National Reconstruction Corps Scheme,,,
872,M/o Youth Aff. & Sports,D/o Youth Affairs,National Service Scheme And residual work of earstwhile National Descipline Scheme.,,,
873,M/o Youth Aff. & Sports,D/o Youth Affairs,National Service Volunteer Scheme,,,
874,M/o Youth Aff. & Sports,D/o Youth Affairs,Boy Scouts,,,
875,M/o Youth Aff. & Sports,D/o Youth Affairs,Girl Guides,,,
876,MoSPI,MoSPI,Preparation of national accounts/ publication of annual estimates of national income/gdp/ndp,,,
877,MoSPI,MoSPI,Preparation of national input-output Transactions Table,,,
878,MoSPI,MoSPI,Index of Industrial production,,,
879,MoSPI,MoSPI,Environment Statistics,,,
880,MoSPI,MoSPI,National Resource Accounts for India,,,
881,MoSPI,MoSPI,All India Economic Census and follow up sample surveys,,,
882,MoSPI,MoSPI,Monitoring of 20 point programme,,,
883,MoSPI,MoSPI,Monitoring of projects of Rs. 150 Crore and above,,,
884,MoSPI,MoSPI,Monitoring of the performance of infrastructure sector,,,
885,MoSPI,MoSPI,MP LAD Scheme,,,
886,MoSPI,MoSPI,National Common Minimum Programme,,,
887,NITI Aayog,NITI Aayog,Shared vision of National Development priorities with active involvement of States,,,
888,NITI Aayog,NITI Aayog,To foster cooperative federalism,,,
889,NITI Aayog,NITI Aayog,To develop mechanism to formulate plans at the village level,,,
890,NITI Aayog,NITI Aayog,To pay special attention to the society at economic risk,,,
891,NITI Aayog,NITI Aayog,"To create knowledge, innovation & entrepreneurial support system",,,
892,NITI Aayog,NITI Aayog,To offer platform for inter-sectoral & inter-departmental issues,,,
893,NITI Aayog,NITI Aayog,To maintain a state of the art Resource Centre/ Repository of research on good governance and best practices in sustainable and equitable development,,,
894,NITI Aayog,NITI Aayog,To focus on technology upgradation for programmes,,,
895,NITI Aayog,NITI Aayog,To design a framework and mechanism for monitoring of SC subplan and Tribal Subplan,,,
896,NITI Aayog,NITI Aayog,National Institute of Labour Economics Research and Development (NILERD),,,`;



const departments = new Set();

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

  let ministryQuestionsDict = {};

function csvToJson(csv) {
    // \n or \r\n depending on the EOL sequence
    const lines = csv.split('\n');
    const delimeter = ',';
  
    const result = [];
  
    // const headers = lines[0].split(delimeter);
    const headers = lines[0].splitCSV();

    for (const line of lines) {
      const obj = {};
    //   const row = line.split(delimeter);
      const row = parse(line);
    //   console.log("==> - csvToJson - line:", line);
    //   console.log("==> - csvToJson - row:", row);
      
    let tempMinQuestArray = ministryQuestionsDict[row[1]];
    if(tempMinQuestArray == undefined) {
      let arr1 = [];
      arr1.push(row[0]);
      ministryQuestionsDict[row[1]] = arr1;
    } else {
      tempMinQuestArray.push(row[0]);
    }
      
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
  
  console.log('Ministry dict array :', ministryQuestionsDict);

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



let score = 0;
let correctAnswer = '';
let correctMinistry = '';
let selectedAnswer = '';
let ansRemark = '';
let attemptedNo = 0;
let Ministries = {};
let totalQuestions = 896;
let checkboxStatus = false;
let currentQuestion;
let previousQuestion;
let isBackClicked = false;
let optionLabels;
let options;
let randomQuesArray ;
let impQuestIndex = 0;
let impQuestArray = [];
let ifShowImpQuestions = false;

// set important question in localstorage;
console.log('Questions marked as Important :', getImportantQuestArray());

function setCurrentQuestion(no){
  localStorage.setItem('currentQuestion', no);
}

function getCurrentQuestion(){
  let cq = localStorage.getItem('currentQuestion');
  if(isNaN(cq) || !cq || cq < 1 || cq > totalQuestions) {cq = 1;}
  return cq;
}

currentQuestion = getCurrentQuestion();
document.getElementById("idSpanShowTotalQuestions").innerHTML = totalQuestions;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

function randomQuestionArray(totalQuestions){
  for (var a=[],i=0;i<totalQuestions;++i) a[i]=i;
  return shuffle(a);
}



function randomQuestionFromRange(){
  let start = document.getElementById("idShuffleStartNo").value;
  let end = document.getElementById("idShuffleEndNo").value;
  if(isNaN(start) || start > totalQuestions || start < 1) start = 1;
  if(isNaN(end) || end > totalQuestions || end < 1) end = totalQuestions;
  let lengthOfArray = end-start +1;
  console.log('length of Array :', lengthOfArray);
  let tempArray = randomQuestionArray(lengthOfArray);
  tempArray = tempArray.map( a => parseFloat(a) + parseFloat(start));
  console.log('final temp array :', tempArray);
  return tempArray;
}
// let randomQuesArray = randomQuestionArray(totalQuestions);

// randomQuesArray  = randomQuestionFromRange();

// On input of custom question in text box
function onUpdateCurrentQuestion(){
    currentQuestion = document.getElementById("idStartQuesNo").value;
    if(isNaN(currentQuestion)) {
      return;
    };

    console.log('updateCurrentQuestion:crrent questions :', currentQuestion);
    document.getElementsByClassName('randomCheckBox')[0].checked = false;
    checkboxStatus = false;
    setCurrentQuestion(currentQuestion);
    displayQuestion();
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


// selecting random question checkbox
function onRandomQuestionCheckboxSelect(){
  checkboxStatus = document.getElementsByClassName('randomCheckBox')[0].checked
  console.log('Random questions on - ', checkboxStatus);
  if(checkboxStatus === true) {
    console.log('Random questions selected on');
    randomQuesArray  = randomQuestionFromRange();
    updateCurrentQuestion();
    displayQuestion();
  }
}

function onClickBackQuestion(){
  isBackClicked = true;
  if(isNaN(previousQuestion) || previousQuestion <= 0 || (currentQuestion == previousQuestion)) return;
  randomQuesArray.push(currentQuestion-1);
  currentQuestion = previousQuestion;
  if(!checkboxStatus) --previousQuestion;
  --attemptedNo;
  displayQuestion();
  
}

function onClickImportantQuestion(){
  if(isNaN(currentQuestion)) return;
  let questionImpStatus = document.getElementsByClassName('selectImpCheckBox')[0].checked;
  let tempImpQuestArray = getImportantQuestArray();

  let index = tempImpQuestArray.indexOf(parseFloat(currentQuestion));
  console.log('index:',index,'status:', questionImpStatus);
  if(questionImpStatus){
    if(index > -1) return;
    setImportantQuestInArray(currentQuestion);
  } else {
    if(index >= 0){
      tempImpQuestArray.splice(index, 1);
      setImpQuestionArray(tempImpQuestArray);
    }
  }

}

function showImportantQuestions(){
  ifShowImpQuestions = document.getElementsByClassName('showImpCheckBox')[0].checked;
  if(ifShowImpQuestions){
    updateCurrentQuestion();
    displayQuestion();
  }
}

function resetImportantQuestions(){
  if(document.getElementsByClassName('resetImpCheckBox')[0].checked){
    document.getElementsByClassName('showImpCheckBox')[0].checked = false;
    impQuestArray = [];
    impQuestIndex = 0;
    setImpQuestionArray([]);
  }
}

function displayQuestion() {
      const questionElement = document.getElementById("question");
      document.getElementsByClassName('selectImpCheckBox')[0].checked = false;
     optionLabels = document.querySelectorAll("[id^='label']");
     options = document.querySelectorAll("[id^='option']");

     if(isNaN(currentQuestion) || !currentQuestion || currentQuestion < 0 || currentQuestion > totalQuestions) {
       console.log('currentQuestion :', currentQuestion);
      console.log('Not a valid questions :');
      document.getElementById("idmessage").textContent = "No question left"
      return;
    };

    document.getElementById("idmessage").textContent = "";
    console.log('current question no :', questions[currentQuestion].SNo);
    console.log('Subject    :', questions[currentQuestion].Item);
    console.log('Department :', questions[currentQuestion].Department);
    console.log('Ministry   :', questions[currentQuestion].Ministry);
    console.log('------------------------------');

    questionElement.textContent = questions[currentQuestion].SNo +". "+ questions[currentQuestion].Item;
    attemptedNo+=1;
    document.getElementById("idattempted").textContent = "Attempted:"+attemptedNo;
    if(checkboxStatus) {
      document.getElementById("idRemainingQuestionsNo").textContent = "   (Remaining:"+randomQuesArray.length+" ) ";
    }

    // let opts = [];
    // opts[0] = questions[currentQuestion].Department;
    // for (let i = 1; i < optionLabels.length; i++) {
    //     opts[i] = questions[randomQuestionNo()].Department;
    // }


    ansRemark = questions[currentQuestion].Remarks;
    document.getElementById("idanswer").textContent = questions[currentQuestion].Department;
    // console.log('questions[currentQuestion].Ministry :',questions[currentQuestion].Ministry);
    document.getElementById("idministry").textContent = questions[currentQuestion].Ministry;

    if(ansRemark)
        document.getElementById("idremarks").textContent = "Remarks::"+ansRemark;
    else
        document.getElementById("idremarks").textContent = "";

    hideAnswer();
    correctAnswer = questions[currentQuestion].Department;

    let randomOption = Math.floor(Math.random()*4);
    // console.log(' ansOptionNO:',randomOption);
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
    if(isBackClicked) showAnswerDiv();
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
    let min = document.getElementById("idministry");
    min.style.display = "none";
}

function onQuestionBtnClick(){
    isBackClicked = false;
    let btn = document.getElementById("idShowBtn");
    if(btn.innerHTML == "ShowAnswer"){
        showAnswerDiv();
    } else {
        btn.innerHTML = "ShowAnswer";
        updateCurrentQuestion();
        displayQuestion();
    }

}

function showAnswerDiv(){
  let ans = document.getElementById("idanswer");
  let btn = document.getElementById("idShowBtn");
  ans.style.display = "block";
  let min = document.getElementById("idministry");
  min.style.display = "block";
  let rem = document.getElementById("idremarks");
  rem.style.display = "block";
  btn.innerHTML = "Next"
}

function updateCurrentQuestion(){
  previousQuestion = currentQuestion;
  ifShowImpQuestions = document.getElementsByClassName('showImpCheckBox')[0].checked;
  checkboxStatus =  document.getElementsByClassName('randomCheckBox')[0].checked;
  if(ifShowImpQuestions) {
    console.log('showing imp quest only :');
    let tempArray = getImportantQuestArray();
    impQuestArray = tempArray;
    if(impQuestIndex >= impQuestArray.length) impQuestIndex = 0;
    currentQuestion = impQuestArray[impQuestIndex]; 
    impQuestIndex++;
  }
  else if(checkboxStatus){
      console.log('showing random questions :', checkboxStatus);
      currentQuestion = randomQuesArray.pop() + 1;
  } else {
    currentQuestion++;
  }

  setCurrentQuestion(currentQuestion);
}

function setImportantQuestInArray(no){
  let tempString = localStorage.getItem("impQuestions");
  if(!tempString) return [parseFloat(no)];

  let tempArray = JSON.parse(tempString);
  tempArray.push(no);
  localStorage.setItem("impQuestions", JSON.stringify(tempArray))
  console.log('tempImpQuestArray :', tempArray);
}

function setImpQuestionArray(arr){
  localStorage.setItem("impQuestions", JSON.stringify(arr));
  console.log('tempImpQuestArray :', getImportantQuestArray());
}

function getImportantQuestArray(){
  let tempString = localStorage.getItem("impQuestions");
  if(!tempString) return [];

  let tempArray = JSON.parse(tempString);
  console.log('tempImpQuestArray :', tempArray);
  return tempArray; 
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${score}/${questions.length}</p>`;
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
       onClickBackQuestion();
    }
    else if (e.keyCode == '39' || e.keyCode == '32') {
       // right arrow
       onQuestionBtnClick();
    }
}

displayQuestion();


  
