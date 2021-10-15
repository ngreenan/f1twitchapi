const WEATHERTYPE = [
    'Clear', 
    'Light Cloud', 
    'Overcast', 
    'Light Rain', 
    'Heavy Rain', 
    'Storm'
]

const SESSIONTYPE = [
    'unknown', 
    'P1', 'P2', 'P3', 'P', 
    'Q1', 'Q2', 'Q3', 'Q', 'OSQ',
    'R', 'R2', 'R3',
    'TT'
]

const TRACK = [
    'Albert Park Circuit',
    'Circuit Paul Ricard',
    'Shanghai International Circuit',
    'Bahrain International Circuit',
    'Circuit de Barcelona-Catalunya',
    'Circuit de Monaco',
    'Circuit Gilles Villeneuve',
    'Silverstone Circuit',
    'Hockenheimring',
    'Hungaroring',
    'Circuit de Spa-Francorchamps',
    'Autodromo Nazionale Monza',
    'Marina Bay Street Circuit',
    'Suzuka International Racing Course',
    'Yas Marina Circuit',
    'Circuit of the Americas',
    'Autódromo José Carlos Pace',
    'Red Bull Ring',
    'Sochi Autodrom',
    'Autódromo Hermanos Rodríguez',
    'Baku City Circuit',
    'Bahrain International Circuit - Short',
    'Silverstone Circuit - Short',
    'Circuit of the Americas - Short',
    'Suzuka International Racing Course - Short',
    'Hanoi Street Circuit',
    'Circuit Zandvoort',
    'Autodromo Internazionale Enzo e Dino Ferrari',
    'Autódromo Internacional do Algarve',
    'Jeddah Corniche Circuit'
]

const CARTYPE = [
    'F1 Modern',
    'F1 Classic',
    'F2',
    'F1 Generic'
]

const SAFETYCARSTATUS = [
    'None',
    'SC',
    'VSC',
    'Formation Lap'
]

const VISUALTYRECOMPOUND = [
    '','','','','','','',
    'inter', //7
    'wet', //8
    '','','','','','','',
    'soft', //16
    'medium', //17
    'hard' //18
]

const PITSTATUS = [
    'none',
    'pitting',
    'in pit area'
]

const DRIVERSTATUS = [
    'in garage',
    'flying lap',
    'in lap',
    'out lap',
    'on track'
]

const RESULTSTATUS = [
    'invalid',
    'inactive',
    'active',
    'finished',
    'dnf',
    'dsq',
    'not classified',
    'retired'
]

const TEAM = [
    { id: 0, team: 'Mercedes' },
    { id: 1, team: 'Ferrari' },
    { id: 2, team: 'Red Bull Racing' },
    { id: 3, team: 'Williams' },
    { id: 4, team: 'Aston Martin' },
    { id: 5, team: 'Alpine' },
    { id: 6, team: 'Alpha Tauri' },
    { id: 7, team: 'Haas' },
    { id: 8, team: 'McLaren' },
    { id: 9, team: 'Alfa Romeo' },
    { id: 42, team: 'Art GP ’19' },
    { id: 43, team: 'Campos ’19' },
    { id: 44, team: 'Carlin ’19' },
    { id: 45, team: 'Sauber Junior Charouz ’19' },
    { id: 46, team: 'Dams ’19' },
    { id: 47, team: 'Uni-Virtuosi ‘19' },
    { id: 48, team: 'MP Motorsport ‘19' },
    { id: 49, team: 'Prema ’19' },
    { id: 50, team: 'Trident ’19' },
    { id: 51, team: 'Arden ’19' },
    { id: 70, team: 'Art GP ‘20' },
    { id: 71, team: 'Campos ‘20' },
    { id: 72, team: 'Carlin ‘20' },
    { id: 73, team: 'Charouz ‘20' },
    { id: 74, team: 'Dams ‘20' },
    { id: 75, team: 'Uni-Virtuosi ‘20' },
    { id: 76, team: 'MP Motorsport ‘20' },
    { id: 77, team: 'Prema ‘20' },
    { id: 78, team: 'Trident ‘20' },
    { id: 79, team: 'BWT ‘20' },
    { id: 80, team: 'Hitech ‘20' },
    { id: 85, team: 'Mercedes 2020' },
    { id: 86, team: 'Ferrari 2020' },
    { id: 87, team: 'Red Bull 2020' },
    { id: 88, team: 'Williams 2020' },
    { id: 89, team: 'Racing Point 2020' },
    { id: 90, team: 'Renault 2020' },
    { id: 91, team: 'Alpha Tauri 2020' },
    { id: 92, team: 'Haas 2020' },
    { id: 93, team: 'McLaren 2020' },
    { id: 94, team: 'Alfa Romeo 2020' }
]

const DRIVER = [
    { id: 0, fullname: 'Carlos Sainz', lastname: 'SAINZ', shortname: 'SAI' },
    { id: 1, fullname: 'Daniil Kvyat', lastname: 'KVYAT', shortname: 'KVY' },
    { id: 2, fullname: 'Daniel Ricciardo', lastname: 'RICCIARDO', shortname: 'RIC' },
    { id: 3, fullname: 'Fernando Alonso', lastname: 'ALONSO', shortname: 'ALO' },
    { id: 4, fullname: 'Felipe Massa', lastname: 'MASSA', shortname: 'MAS' },
    { id: 6, fullname: 'Kimi Räikkönen', lastname: 'RAIKKONEN', shortname: 'RAI' },
    { id: 7, fullname: 'Lewis Hamilton', lastname: 'HAMILTON', shortname: 'HAM' },
    { id: 9, fullname: 'Max Verstappen', lastname: 'VERSTAPPEN', shortname: 'VER' },
    { id: 10, fullname: 'Nico Hulkenburg', lastname: 'HULKENBURG', shortname: 'HUL' },
    { id: 11, fullname: 'Kevin Magnussen', lastname: 'MAGNUSSEN', shortname: 'MAG' },
    { id: 12, fullname: 'Romain Grosjean', lastname: 'GROSJEAN', shortname: 'GRO' },
    { id: 13, fullname: 'Sebastian Vettel', lastname: 'VETTEL', shortname: 'VET' },
    { id: 14, fullname: 'Sergio Perez', lastname: 'PEREZ', shortname: 'PER' },
    { id: 15, fullname: 'Valtteri Bottas', lastname: 'BOTTAS', shortname: 'BOT' },
    { id: 17, fullname: 'Esteban Ocon', lastname: 'OCON', shortname: 'OCO' },
    { id: 19, fullname: 'Lance Stroll', lastname: 'STROLL', shortname: 'STR' },
    { id: 20, fullname: 'Arron Barnes', lastname: 'BARNES', shortname: 'BAR' },
    { id: 21, fullname: 'Martin Giles', lastname: 'GILES', shortname: 'GIL' },
    { id: 22, fullname: 'Alex Murray', lastname: 'MURRAY', shortname: 'MUR' },
    { id: 23, fullname: 'Lucas Roth', lastname: 'ROTH', shortname: 'ROT' },
    { id: 24, fullname: 'Igor Correia', lastname: 'CORREIA', shortname: 'COR' },
    { id: 25, fullname: 'Sophie Levasseur', lastname: 'LEVASSEUR', shortname: 'LEV' },
    { id: 26, fullname: 'Jonas Schiffer', lastname: 'SCHIFFER', shortname: 'SCH' },
    { id: 27, fullname: 'Alain Forest', lastname: 'FOREST', shortname: 'FOR' },
    { id: 28, fullname: 'Jay Letourneau', lastname: 'LETOURNEAU', shortname: 'LET' },
    { id: 29, fullname: 'Esto Saari', lastname: 'SAARI', shortname: 'SAA' },
    { id: 30, fullname: 'Yasar Atiyeh', lastname: 'ATIYEH', shortname: 'ATI' },
    { id: 31, fullname: 'Callisto Calabresi', lastname: 'CALABRESI', shortname: 'CAL' },
    { id: 32, fullname: 'Naota Izum', lastname: 'IZUM', shortname: 'IZU' },
    { id: 33, fullname: 'Howard Clarke', lastname: 'CLARKE', shortname: 'CLA' },
    { id: 34, fullname: 'Wilheim Kaufmann', lastname: 'KAUFMANN', shortname: 'KAU' },
    { id: 35, fullname: 'Marie Laursen', lastname: 'LAURSEN', shortname: 'LAU' },
    { id: 36, fullname: 'Flavio Nieves', lastname: 'NIEVES', shortname: 'NIE' },
    { id: 37, fullname: 'Peter Belousov', lastname: 'BELOUSOV', shortname: 'BEL' },
    { id: 38, fullname: 'Klimek Michalski', lastname: 'MICHALSKI', shortname: 'MIC' },
    { id: 39, fullname: 'Santiago Moreno', lastname: 'MORENO', shortname: 'MOR' },
    { id: 40, fullname: 'Benjamin Coppens', lastname: 'COPPENS', shortname: 'COP' },
    { id: 41, fullname: 'Noah Visser', lastname: 'VISSER', shortname: 'VIS' },
    { id: 42, fullname: 'Gert Waldmuller', lastname: 'WALDMULLER', shortname: 'WAL' },
    { id: 43, fullname: 'Julian Quesada', lastname: 'QUESADA', shortname: 'QUE' },
    { id: 44, fullname: 'Daniel Jones', lastname: 'JONES', shortname: 'JON' },
    { id: 45, fullname: 'Artem Markelov', lastname: 'MARKELOV', shortname: 'MAR' },
    { id: 46, fullname: 'Tadasuke Makino', lastname: 'MAKINO', shortname: 'MAK' },
    { id: 47, fullname: 'Sean Gelael', lastname: 'GELAEL', shortname: 'GEL' },
    { id: 48, fullname: 'Nyck De Vries', lastname: 'DE VRIES', shortname: 'DEV' },
    { id: 49, fullname: 'Jack Aitken', lastname: 'AITKEN', shortname: 'AIT' },
    { id: 50, fullname: 'George Russell', lastname: 'RUSSELL', shortname: 'RUS' },
    { id: 51, fullname: 'Maximilian Günther', lastname: 'GUNTHER', shortname: 'GUN' },
    { id: 52, fullname: 'Nirei Fukuzumi', lastname: 'FUKUZUMI', shortname: 'FUK' },
    { id: 53, fullname: 'Luca Ghiotto', lastname: 'GHIOTTO', shortname: 'GHI' },
    { id: 54, fullname: 'Lando Norris', lastname: 'NORRIS', shortname: 'NOR' },
    { id: 55, fullname: 'Sérgio Sette Câmara', lastname: 'SETTE CAMARA', shortname: 'SET' },
    { id: 56, fullname: 'Louis Delétraz', lastname: 'DELETRAZ', shortname: 'DEL' },
    { id: 57, fullname: 'Antonio Fuoco', lastname: 'FUOCO', shortname: 'FUO' },
    { id: 58, fullname: 'Charles Leclerc', lastname: 'LECLERC', shortname: 'LEC' },
    { id: 59, fullname: 'Pierre Gasly', lastname: 'GASLY', shortname: 'GAS' },
    { id: 62, fullname: 'Alexander Albon', lastname: 'ALBON', shortname: 'ALB' },
    { id: 63, fullname: 'Nicholas Latifi', lastname: 'LATIFI', shortname: 'LAT' },
    { id: 64, fullname: 'Dorian Boccolacci', lastname: 'BOCCOLACCI', shortname: 'BOC' },
    { id: 65, fullname: 'Niko Kari', lastname: 'KARI', shortname: 'KAR' },
    { id: 66, fullname: 'Roberto Merhi', lastname: 'MERHI', shortname: 'MER' },
    { id: 67, fullname: 'Arjun Maini', lastname: 'MAINI', shortname: 'MAI' },
    { id: 68, fullname: 'Alessio Lorandi', lastname: 'LORANDI', shortname: 'LOR' },
    { id: 69, fullname: 'Ruben Meijer', lastname: 'MEIJER', shortname: 'MEI' },
    { id: 70, fullname: 'Rashid Nair', lastname: 'NAIR', shortname: 'NAI' },
    { id: 71, fullname: 'Jack Tremblay', lastname: 'TREMBLAY', shortname: 'TRE' },
    { id: 72, fullname: 'Devon Butler', lastname: 'BUTLER', shortname: 'BUT' },
    { id: 73, fullname: 'Lukas Weber', lastname: 'WEBER', shortname: 'WEB' },
    { id: 74, fullname: 'Antonio Giovinazzi', lastname: 'GIOVINAZZI', shortname: 'GIO' },
    { id: 75, fullname: 'Robert Kubica', lastname: 'KUBICA', shortname: 'KUB' },
    { id: 76, fullname: 'Alain Prost', lastname: 'PROST', shortname: 'PRO' },
    { id: 77, fullname: 'Ayrton Senna', lastname: 'SENNA', shortname: 'SEN' },
    { id: 78, fullname: 'Nobuharu Matsushita', lastname: 'MATSUSHITA', shortname: 'MAT' },
    { id: 79, fullname: 'Nikita Mazepin', lastname: 'MAZEPIN', shortname: 'MAZ' },
    { id: 80, fullname: 'Guanya Zhou', lastname: 'ZHOU', shortname: 'ZHO' },
    { id: 81, fullname: 'Mick Schumacher', lastname: 'SCHUMACHER', shortname: 'MSC' },
    { id: 82, fullname: 'Callum Ilott', lastname: 'ILOTT', shortname: 'ILO' },
    { id: 83, fullname: 'Juan Manuel Correa', lastname: 'CORREA', shortname: 'COR' },
    { id: 84, fullname: 'Jordan King', lastname: 'KING', shortname: 'KIN' },
    { id: 85, fullname: 'Mahaveer Raghunathan', lastname: 'RAGHUNATHAN', shortname: 'RAG' },
    { id: 86, fullname: 'Tatiana Calderon', lastname: 'CALDERON', shortname: 'CAL' },
    { id: 87, fullname: 'Anthoine Hubert', lastname: 'HUBERT', shortname: 'HUB' },
    { id: 88, fullname: 'Guiliano Alesi', lastname: 'ALESI', shortname: 'ALE' },
    { id: 89, fullname: 'Ralph Boschung', lastname: 'BOSCHUNG', shortname: 'BOS' },
    { id: 90, fullname: 'Michael Schumacher', lastname: 'SCHUMACHER', shortname: 'MSC' },
    { id: 91, fullname: 'Dan Ticktum', lastname: 'TICKTUM', shortname: 'TIC' },
    { id: 92 , fullname: 'Marcus Armstrong', lastname: 'ARMSTRONG', shortname: 'ARM' },
    { id: 93 , fullname: 'Christian Lundgaard', lastname: 'LUNDGAARD', shortname: 'LUN' },
    { id: 94 , fullname: 'Yuki Tsunoda', lastname: 'TSUNODA', shortname: 'TSU' },
    { id: 95 , fullname: 'Jehan Daruvala', lastname: 'DARUVALA', shortname: 'DAR' },
    { id: 96 , fullname: 'Gulherme Samaia', lastname: 'SAMAIA', shortname: 'SAM' },
    { id: 97 , fullname: 'Pedro Piquet', lastname: 'PIQUET', shortname: 'PIQ' },
    { id: 98 , fullname: 'Felipe Drugovich', lastname: 'DRUGOVICH', shortname: 'DRU' },
    { id: 99 , fullname: 'Robert Schwartzman', lastname: 'SCHWARTZMAN', shortname: 'SCH' },
    { id: 100 , fullname: 'Roy Nissany', lastname: 'NISSANY', shortname: 'NIS' },
    { id: 101 , fullname: 'Marino Sato', lastname: 'SATO', shortname: 'SAT' },
    { id: 102, fullname: 'Aidan Jackson', lastname: 'JACKSON', shortname: 'JAC' },
    { id: 103, fullname: 'Casper Akkerman', lastname: 'AKKERMAN', shortname: 'AKK' },
    { id: 109, fullname: 'Jenson Button', lastname: 'BUTTON', shortname: 'BUT' },
    { id: 110, fullname: 'David Coulthard', lastname: 'COULTHARD', shortname: 'COU' },
    { id: 111, fullname: 'Nico Rosberg', lastname: 'ROSBERG', shortname: 'ROS' },
]

const NATIONALITY = [
    { id: 1, nationality: 'American' },
    { id: 2, nationality: 'Argentinean' },
    { id: 3, nationality: 'Australian' },
    { id: 4, nationality: 'Austrian' },
    { id: 5, nationality: 'Azerbaijani' },
    { id: 6, nationality: 'Bahraini' },
    { id: 7, nationality: 'Belgian' },
    { id: 8, nationality: 'Bolivian' },
    { id: 9, nationality: 'Brazilian' },
    { id: 10, nationality: 'British' },
    { id: 11, nationality: 'Bulgarian' },
    { id: 12, nationality: 'Cameroonian' },
    { id: 13, nationality: 'Canadian' },
    { id: 14, nationality: 'Chilean' },
    { id: 15, nationality: 'Chinese' },
    { id: 16, nationality: 'Colombian' },
    { id: 17, nationality: 'Costa Rican' },
    { id: 18, nationality: 'Croatian' },
    { id: 19, nationality: 'Cypriot' },
    { id: 20, nationality: 'Czech' },
    { id: 21, nationality: 'Danish' },
    { id: 22, nationality: 'Dutch' },
    { id: 23, nationality: 'Ecuadorian' },
    { id: 24, nationality: 'English' },
    { id: 25, nationality: 'Emirian' },
    { id: 26, nationality: 'Estonian' },
    { id: 27, nationality: 'Finnish' },
    { id: 28, nationality: 'French' },
    { id: 29, nationality: 'German' },
    { id: 30, nationality: 'Ghanaian' },
    { id: 31, nationality: 'Greek' },
    { id: 32, nationality: 'Guatemalan' },
    { id: 33, nationality: 'Honduran' },
    { id: 34, nationality: 'Hong Konger' },
    { id: 35, nationality: 'Hungarian' },
    { id: 36, nationality: 'Icelander' },
    { id: 37, nationality: 'Indian' },
    { id: 38, nationality: 'Indonesian' },
    { id: 39, nationality: 'Irish' },
    { id: 40, nationality: 'Israeli' },
    { id: 41, nationality: 'Italian' },
    { id: 42, nationality: 'Jamaican' },
    { id: 43, nationality: 'Japanese' },
    { id: 44, nationality: 'Jordanian' },
    { id: 45, nationality: 'Kuwaiti' },
    { id: 46, nationality: 'Latvian' },
    { id: 47, nationality: 'Lebanese' },
    { id: 48, nationality: 'Lithuanian' },
    { id: 49, nationality: 'Luxembourger' },
    { id: 50, nationality: 'Malaysian' },
    { id: 51, nationality: 'Maltese' },
    { id: 52, nationality: 'Mexican' },
    { id: 53, nationality: 'Monegasque' },
    { id: 54, nationality: 'New Zealander' },
    { id: 55, nationality: 'Nicaraguan' },
    { id: 56, nationality: 'Northern Irish' },
    { id: 57, nationality: 'Norwegian' },
    { id: 58, nationality: 'Omani' },
    { id: 59, nationality: 'Pakistani' },
    { id: 60, nationality: 'Panamanian' },
    { id: 61, nationality: 'Paraguayan' },
    { id: 62, nationality: 'Peruvian' },
    { id: 63, nationality: 'Polish' },
    { id: 64, nationality: 'Portuguese' },
    { id: 65, nationality: 'Qatari' },
    { id: 66, nationality: 'Romanian' },
    { id: 67, nationality: 'Russian' },
    { id: 68, nationality: 'Salvadoran' },
    { id: 69, nationality: 'Saudi' },
    { id: 70, nationality: 'Scottish' },
    { id: 71, nationality: 'Serbian' },
    { id: 72, nationality: 'Singaporean' },
    { id: 73, nationality: 'Slovakian' },
    { id: 74, nationality: 'Slovenian' },
    { id: 75, nationality: 'South Korean' },
    { id: 76, nationality: 'South African' },
    { id: 77, nationality: 'Spanish' },
    { id: 78, nationality: 'Swedish' },
    { id: 79, nationality: 'Swiss' },
    { id: 80, nationality: 'Thai' },
    { id: 81, nationality: 'Turkish' },
    { id: 82, nationality: 'Uruguayan' },
    { id: 83, nationality: 'Ukrainian' },
    { id: 84, nationality: 'Venezuelan' },
    { id: 85, nationality: 'Barbadian' },
    { id: 86, nationality: 'Welsh' },
    { id: 87, nationality: 'Vietnamese' }
]

module.exports = { WEATHERTYPE, SESSIONTYPE, TRACK, CARTYPE, SAFETYCARSTATUS, VISUALTYRECOMPOUND, PITSTATUS, DRIVERSTATUS, RESULTSTATUS, TEAM, DRIVER, NATIONALITY }