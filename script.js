const foodData = {
    meat: {
        'beef-steak': {
            name: 'Bistecca di Manzo',
            temperature: '54.4°C',
            time: {
                '2cm': '1 ora',
                '3cm': '2 ore',
                '4cm': '3 ore',
                '5cm': '4 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- Bistecca spessa 2 cm: 1 ora esatta
- Bistecca spessa 3 cm: 2 ore esatte
- Bistecca spessa 4 cm: 3 ore esatte
- Bistecca spessa 5 cm: 4 ore esatte

Istruzioni:
1. Riempire il contenitore con 6-15L di acqua
2. Fissare il ROY5H verticalmente con la morsa fornita
3. Impostare temperatura a 54.4°C usando i pulsanti +/-
4. Attendere che l'acqua raggiunga la temperatura
5. Immergere la bistecca sottovuoto
6. Impostare il timer in base allo spessore della carne
7. Mantenere il livello dell'acqua tra MIN e MAX`
        },
        'beef-tenderloin': {
            name: 'Filetto di Manzo',
            temperature: '54.4°C',
            time: {
                '3cm': '2 ore',
                '4cm': '2 ore e 30 minuti',
                '5cm': '3 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- Filetto spesso 3 cm: 2 ore esatte
- Filetto spesso 4 cm: 2 ore e 30 minuti esatti
- Filetto spesso 5 cm: 3 ore esatte

Riempire con 8-10L di acqua. Rosolare brevemente dopo la cottura.`
        },
        'beef-brisket': {
            name: 'Punta di Petto',
            temperature: '68°C',
            time: {
                'standard': '24 ore',
                'extra-tenero': '36 ore'
            },
            notes: `Tempi di cottura:
- Cottura standard: 24 ore esatte
- Per risultato extra-tenero: 36 ore esatte

Utilizzare 10-15L di acqua. Controllare livello ogni 4 ore.`
        },
        'lamb-chops': {
            name: 'Costolette di Agnello',
            temperature: '57°C',
            time: {
                '2cm': '1 ora',
                '3cm': '1 ora e 30 minuti',
                '4cm': '2 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- Costolette spesse 2 cm: 1 ora esatta
- Costolette spesse 3 cm: 1 ora e 30 minuti esatti
- Costolette spesse 4 cm: 2 ore esatte

Utilizzare 6-8L di acqua.`
        },
        'veal-cutlet': {
            name: 'Cotoletta di Vitello',
            temperature: '58°C',
            time: {
                '1.5cm': '45 minuti',
                '2cm': '1 ora',
                '3cm': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura in base allo spessore:
- Cotoletta spessa 1.5 cm: 45 minuti esatti
- Cotoletta spessa 2 cm: 1 ora esatta
- Cotoletta spessa 3 cm: 1 ora e 30 minuti esatti

Utilizzare 6-8L di acqua.`
        },
        'pork-tenderloin': {
            name: 'Filetto di Maiale',
            temperature: '60°C',
            time: {
                '3cm': '1 ora e 30 minuti',
                '4cm': '2 ore',
                '5cm': '2 ore e 30 minuti'
            },
            notes: `Tempi di cottura in base allo spessore:
- Filetto spesso 3 cm: 1 ora e 30 minuti esatti
- Filetto spesso 4 cm: 2 ore esatte
- Filetto spesso 5 cm: 2 ore e 30 minuti esatti

Utilizzare 8-10L di acqua. Rosolare dopo la cottura.`
        },
        'beef-short-ribs': {
            name: 'Costine di Manzo',
            temperature: '68°C',
            time: {
                'standard': '24 ore',
                'extra-tenere': '48 ore'
            },
            notes: `Tempi di cottura:
- Cottura standard: 24 ore esatte
- Per risultato extra-tenero: 48 ore esatte

Utilizzare 10-15L di acqua. Controllare livello ogni 6 ore.`
        },
        'osso-buco': {
            name: 'Osso Buco',
            temperature: '65°C',
            time: {
                'standard': '24 ore',
                'extra-tenero': '36 ore'
            },
            notes: `Tempi di cottura:
- Cottura standard: 24 ore esatte
- Per risultato extra-tenero: 36 ore esatte

Utilizzare 10-15L di acqua. Controllare livello ogni 4 ore.`
        },
        'pork-belly': {
            name: 'Pancetta di Maiale',
            temperature: '74°C',
            time: {
                'standard': '12 ore',
                'extra-tenera': '24 ore'
            },
            notes: `Tempi di cottura:
- Cottura standard: 12 ore esatte
- Per risultato extra-tenero: 24 ore esatte

Utilizzare 8-12L di acqua. Controllare livello ogni 4 ore.`
        },
        'ribeye': {
            name: 'Costata di Manzo',
            temperature: '54.4°C',
            time: {
                '2.5cm': '1 ora e 30 minuti',
                '3.5cm': '2 ore',
                '5cm': '3 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- Costata spessa 2.5 cm: 1 ora e 30 minuti esatti
- Costata spessa 3.5 cm: 2 ore esatte
- Costata spessa 5 cm: 3 ore esatte

Utilizzare 8-12L di acqua. Rosolare dopo la cottura per creare la crosta.`
        },
        't-bone': {
            name: 'T-Bone',
            temperature: '54.4°C',
            time: {
                '3cm': '2 ore',
                '4cm': '2 ore e 30 minuti',
                '5cm': '3 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- T-Bone spesso 3 cm: 2 ore esatte
- T-Bone spesso 4 cm: 2 ore e 30 minuti esatti
- T-Bone spesso 5 cm: 3 ore esatte

Utilizzare 10-15L di acqua per coprire completamente il taglio.`
        },
        'flank-steak': {
            name: 'Bavetta di Manzo',
            temperature: '54.4°C',
            time: {
                '1.5cm': '1 ora e 30 minuti',
                '2cm': '2 ore',
                '2.5cm': '2 ore e 30 minuti'
            },
            notes: `Tempi di cottura in base allo spessore:
- Bavetta spessa 1.5 cm: 1 ora e 30 minuti esatti
- Bavetta spessa 2 cm: 2 ore esatte
- Bavetta spessa 2.5 cm: 2 ore e 30 minuti esatti

Utilizzare 6-8L di acqua. Tagliare contro fibra dopo la cottura.`
        },
        'picanha': {
            name: 'Picanha',
            temperature: '54.4°C',
            time: {
                '3cm': '2 ore',
                '4cm': '2 ore e 30 minuti',
                '5cm': '3 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- Picanha spessa 3 cm: 2 ore esatte
- Picanha spessa 4 cm: 2 ore e 30 minuti esatti
- Picanha spessa 5 cm: 3 ore esatte

Utilizzare 8-10L di acqua. Mantenere il cappello di grasso durante la cottura.`
        },
        'chuck-roast': {
            name: 'Spalla di Manzo',
            temperature: '68°C',
            time: {
                'standard': '24 ore',
                'extra-tenera': '36 ore',
                'molto-tenera': '48 ore'
            },
            notes: `Tempi di cottura:
- Cottura standard: 24 ore esatte
- Per risultato extra-tenero: 36 ore esatte
- Per risultato molto tenero: 48 ore esatte

Utilizzare 10-15L di acqua. Controllare livello ogni 6 ore.`
        },
        'veal-shank': {
            name: 'Stinco di Vitello',
            temperature: '65°C',
            time: {
                'piccolo': '20 ore',
                'medio': '24 ore',
                'grande': '30 ore'
            },
            notes: `Tempi di cottura in base alla dimensione:
- Stinco piccolo (800g): 20 ore esatte
- Stinco medio (1-1.2kg): 24 ore esatte
- Stinco grande (1.2-1.5kg): 30 ore esatte

Utilizzare 10-15L di acqua. Controllare livello ogni 4 ore.`
        },
        'lamb-leg': {
            name: 'Cosciotto di Agnello',
            temperature: '57°C',
            time: {
                'disossato': '18 ore',
                'con osso piccolo': '24 ore',
                'con osso grande': '30 ore'
            },
            notes: `Tempi di cottura:
- Cosciotto disossato: 18 ore esatte
- Cosciotto con osso piccolo (1.5kg): 24 ore esatte
- Cosciotto con osso grande (2kg+): 30 ore esatte

Utilizzare 12-15L di acqua. Controllare livello ogni 6 ore.`
        },
        'pork-shoulder': {
            name: 'Spalla di Maiale',
            temperature: '74°C',
            time: {
                'piccola': '16 ore',
                'media': '20 ore',
                'grande': '24 ore'
            },
            notes: `Tempi di cottura in base alla dimensione:
- Spalla piccola (1kg): 16 ore esatte
- Spalla media (1.5kg): 20 ore esatte
- Spalla grande (2kg+): 24 ore esatte

Utilizzare 10-15L di acqua. Controllare livello ogni 4 ore.`
        },
        'tomahawk': {
            name: 'Tomahawk',
            temperature: '54.4°C',
            time: {
                '4cm': '3 ore',
                '5cm': '4 ore',
                '6cm': '5 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- Tomahawk spesso 4 cm: 3 ore esatte
- Tomahawk spesso 5 cm: 4 ore esatte
- Tomahawk spesso 6 cm: 5 ore esatte

Utilizzare 12-15L di acqua. Rosolare l'osso e la carne dopo la cottura.`
        },
        'fiorentina': {
            name: 'Fiorentina',
            temperature: '54.4°C',
            time: {
                '4cm': '3 ore',
                '5cm': '4 ore',
                '6cm': '5 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- Fiorentina spessa 4 cm: 3 ore esatte
- Fiorentina spessa 5 cm: 4 ore esatte
- Fiorentina spessa 6 cm: 5 ore esatte

Utilizzare 12-15L di acqua. Rosolare dopo la cottura per la classica crosta.`
        },
        'costata-scottona': {
            name: 'Costata di Scottona',
            temperature: '54.4°C',
            time: {
                '3cm': '2 ore',
                '4cm': '3 ore',
                '5cm': '4 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- Costata spessa 3 cm: 2 ore esatte
- Costata spessa 4 cm: 3 ore esatte
- Costata spessa 5 cm: 4 ore esatte

Utilizzare 10-12L di acqua. Ideale per una cottura media al sangue.`
        },
        'filetto-cervo': {
            name: 'Filetto di Cervo',
            temperature: '57°C',
            time: {
                '2cm': '1 ora e 30 minuti',
                '3cm': '2 ore',
                '4cm': '2 ore e 30 minuti'
            },
            notes: `Tempi di cottura in base allo spessore:
- Filetto spesso 2 cm: 1 ora e 30 minuti esatti
- Filetto spesso 3 cm: 2 ore esatte
- Filetto spesso 4 cm: 2 ore e 30 minuti esatti

Utilizzare 8-10L di acqua. Carne magra, non eccedere con la temperatura.`
        },
        'cinghiale-spalla': {
            name: 'Spalla di Cinghiale',
            temperature: '68°C',
            time: {
                'piccola': '24 ore',
                'media': '36 ore',
                'grande': '48 ore'
            },
            notes: `Tempi di cottura in base alla dimensione:
- Spalla piccola (1kg): 24 ore esatte
- Spalla media (1.5-2kg): 36 ore esatte
- Spalla grande (>2kg): 48 ore esatte

Utilizzare 12-15L di acqua. Controllare il livello ogni 6 ore.`
        },
        'guanciale-manzo': {
            name: 'Guanciale di Manzo',
            temperature: '68°C',
            time: {
                'standard': '24 ore',
                'extra-tenero': '36 ore',
                'molto-tenero': '48 ore'
            },
            notes: `Tempi di cottura:
- Cottura standard: 24 ore esatte
- Per risultato extra-tenero: 36 ore esatte
- Per risultato molto tenero: 48 ore esatte

Utilizzare 10-12L di acqua. Controllare il livello ogni 6 ore.`
        },
        'costine-maiale': {
            name: 'Costine di Maiale',
            temperature: '74°C',
            time: {
                'mezza rack': '12 ore',
                'rack intera': '18 ore',
                'doppia rack': '24 ore'
            },
            notes: `Tempi di cottura:
- Mezza rack (500g): 12 ore esatte
- Rack intera (1kg): 18 ore esatte
- Doppia rack (2kg): 24 ore esatte

Utilizzare 10-15L di acqua. Controllare il livello ogni 4 ore.`
        },
        'lingua-manzo': {
            name: 'Lingua di Manzo',
            temperature: '70°C',
            time: {
                'piccola': '24 ore',
                'media': '36 ore',
                'grande': '48 ore'
            },
            notes: `Tempi di cottura:
- Lingua piccola: 24 ore esatte
- Lingua media: 36 ore esatte
- Lingua grande: 48 ore esatte

Utilizzare 8-10L di acqua. Controllare il livello ogni 6 ore.`
        },
        'coda-manzo': {
            name: 'Coda di Manzo',
            temperature: '70°C',
            time: {
                'sezioni piccole': '24 ore',
                'sezioni medie': '36 ore',
                'intera': '48 ore'
            },
            notes: `Tempi di cottura:
- Sezioni piccole: 24 ore esatte
- Sezioni medie: 36 ore esatte
- Coda intera: 48 ore esatte

Utilizzare 10-12L di acqua. Controllare il livello ogni 6 ore.`
        }
    },
    poultry: {
        'chicken-breast': {
            name: 'Petto di Pollo',
            temperature: '62.8°C',
            time: {
                'sottile (2cm)': '1 ora e 30 minuti',
                'medio (3cm)': '2 ore',
                'spesso (4cm)': '2 ore e 30 minuti'
            },
            notes: `Tempi di cottura in base allo spessore:
- Petto sottile (2 cm): 1 ora e 30 minuti esatti
- Petto medio (3 cm): 2 ore esatte
- Petto spesso (4 cm): 2 ore e 30 minuti esatti

Riempire con 8-10L di acqua per una cottura uniforme.`
        },
        'turkey-breast': {
            name: 'Petto di Tacchino',
            temperature: '62.8°C',
            time: {
                '3cm': '2 ore e 30 minuti',
                '4cm': '3 ore',
                '5cm': '3 ore e 30 minuti'
            },
            notes: `Tempi di cottura in base allo spessore:
- Petto spesso 3 cm: 2 ore e 30 minuti esatti
- Petto spesso 4 cm: 3 ore esatte
- Petto spesso 5 cm: 3 ore e 30 minuti esatti

Utilizzare 8-12L di acqua.`
        },
        'duck-breast': {
            name: 'Petto d\'Anatra',
            temperature: '57°C',
            time: {
                '2cm': '2 ore',
                '3cm': '2 ore e 30 minuti',
                '4cm': '3 ore'
            },
            notes: `Tempi di cottura in base allo spessore:
- Petto spesso 2 cm: 2 ore esatte
- Petto spesso 3 cm: 2 ore e 30 minuti esatti
- Petto spesso 4 cm: 3 ore esatte

Utilizzare 6-8L di acqua. Rosolare la pelle dopo la cottura.`
        },
        'chicken-thighs': {
            name: 'Cosce di Pollo',
            temperature: '74°C',
            time: {
                'disossate': '2 ore',
                'con osso': '4 ore'
            },
            notes: `Tempi di cottura:
- Cosce disossate: 2 ore esatte
- Cosce con osso: 4 ore esatte

Utilizzare 8-10L di acqua.`
        },
        'turkey-legs': {
            name: 'Cosce di Tacchino',
            temperature: '74°C',
            time: {
                'standard': '8 ore',
                'extra-tenere': '12 ore'
            },
            notes: `Tempi di cottura:
- Cottura standard: 8 ore esatte
- Per risultato extra-tenero: 12 ore esatte

Utilizzare 10-15L di acqua.`
        },
        'quail': {
            name: 'Quaglia',
            temperature: '62°C',
            time: {
                'intera': '2 ore',
                'petto': '1 ora'
            },
            notes: `Tempi di cottura:
- Quaglia intera: 2 ore esatte
- Solo petto: 1 ora esatta

Utilizzare 6-8L di acqua.`
        },
        'faraona-petto': {
            name: 'Petto di Faraona',
            temperature: '62°C',
            time: {
                'sottile': '1 ora e 30 minuti',
                'medio': '2 ore',
                'spesso': '2 ore e 30 minuti'
            },
            notes: `Tempi di cottura in base allo spessore:
- Petto sottile (2cm): 1 ora e 30 minuti esatti
- Petto medio (3cm): 2 ore esatte
- Petto spesso (4cm): 2 ore e 30 minuti esatti

Utilizzare 8-10L di acqua. Carne magra, attenzione a non eccedere con la temperatura.`
        },
        'faraona-intera': {
            name: 'Faraona Intera',
            temperature: '65°C',
            time: {
                'piccola': '4 ore',
                'media': '5 ore',
                'grande': '6 ore'
            },
            notes: `Tempi di cottura in base al peso:
- Faraona piccola (800g-1kg): 4 ore esatte
- Faraona media (1-1.3kg): 5 ore esatte
- Faraona grande (1.3-1.5kg): 6 ore esatte

Utilizzare 12-15L di acqua. Controllare il livello ogni ora.`
        },
        'piccione': {
            name: 'Piccione',
            temperature: '62°C',
            time: {
                'petto': '1 ora e 30 minuti',
                'intero piccolo': '2 ore e 30 minuti',
                'intero grande': '3 ore'
            },
            notes: `Tempi di cottura:
- Solo petto: 1 ora e 30 minuti esatti
- Piccione intero piccolo (<400g): 2 ore e 30 minuti esatti
- Piccione intero grande (>400g): 3 ore esatte

Utilizzare 8-10L di acqua. Ideale per una cottura rosata.`
        },
        'anatra-intera': {
            name: 'Anatra Intera',
            temperature: '65°C',
            time: {
                'piccola': '6 ore',
                'media': '8 ore',
                'grande': '10 ore'
            },
            notes: `Tempi di cottura in base al peso:
- Anatra piccola (1.5-2kg): 6 ore esatte
- Anatra media (2-2.5kg): 8 ore esatte
- Anatra grande (2.5-3kg): 10 ore esatte

Utilizzare 12-15L di acqua. Controllare il livello ogni 2 ore.`
        },
        'pollo-intero': {
            name: 'Pollo Intero',
            temperature: '65°C',
            time: {
                'piccolo': '4 ore',
                'medio': '5 ore',
                'grande': '6 ore'
            },
            notes: `Tempi di cottura in base al peso:
- Pollo piccolo (1-1.2kg): 4 ore esatte
- Pollo medio (1.2-1.5kg): 5 ore esatte
- Pollo grande (1.5-2kg): 6 ore esatte

Utilizzare 12-15L di acqua. Controllare il livello ogni ora.`
        },
        'tacchino-intero': {
            name: 'Tacchino Intero',
            temperature: '65°C',
            time: {
                'piccolo': '8 ore',
                'medio': '10 ore',
                'grande': '12 ore'
            },
            notes: `Tempi di cottura in base al peso:
- Tacchino piccolo (3-4kg): 8 ore esatte
- Tacchino medio (4-5kg): 10 ore esatte
- Tacchino grande (5-6kg): 12 ore esatte

Utilizzare 12-15L di acqua. Controllare il livello ogni 2 ore.`
        },
        'pollo-ali': {
            name: 'Ali di Pollo',
            temperature: '74°C',
            time: {
                'intere': '2 ore',
                'drumettes': '1 ora e 30 minuti',
                'wingettes': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Ali intere: 2 ore esatte
- Drumettes (parte superiore): 1 ora e 30 minuti esatti
- Wingettes (parte piatta): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Ottimo per preparazioni successive come frittura o griglia.`
        },
        'pollo-rotolo': {
            name: 'Rotolo di Pollo',
            temperature: '65°C',
            time: {
                'piccolo': '2 ore',
                'medio': '2 ore e 30 minuti',
                'grande': '3 ore'
            },
            notes: `Tempi di cottura in base al diametro:
- Rotolo piccolo (5cm): 2 ore esatte
- Rotolo medio (7cm): 2 ore e 30 minuti esatti
- Rotolo grande (9cm): 3 ore esatte

Utilizzare 10-12L di acqua. Sigillare bene il rotolo sottovuoto.`
        },
        'gallina': {
            name: 'Gallina',
            temperature: '74°C',
            time: {
                'piccola': '5 ore',
                'media': '6 ore',
                'grande': '7 ore'
            },
            notes: `Tempi di cottura in base al peso:
- Gallina piccola (1-1.5kg): 5 ore esatte
- Gallina media (1.5-2kg): 6 ore esatte
- Gallina grande (2-2.5kg): 7 ore esatte

Utilizzare 12-15L di acqua. Controllare il livello ogni ora.`
        },
        'cappone': {
            name: 'Cappone',
            temperature: '65°C',
            time: {
                'piccolo': '6 ore',
                'medio': '8 ore',
                'grande': '10 ore'
            },
            notes: `Tempi di cottura in base al peso:
- Cappone piccolo (2-2.5kg): 6 ore esatte
- Cappone medio (2.5-3kg): 8 ore esatte
- Cappone grande (3-3.5kg): 10 ore esatte

Utilizzare 12-15L di acqua. Controllare il livello ogni 2 ore.`
        }
    },
    fish: {
        'salmon': {
            name: 'Filetto di Salmone',
            temperature: '50°C',
            time: {
                'sottile (1cm)': '30 minuti',
                'medio (2cm)': '40 minuti',
                'spesso (3cm)': '45 minuti'
            },
            notes: `Tempi di cottura in base allo spessore:
- Filetto sottile (1 cm): 30 minuti esatti
- Filetto medio (2 cm): 40 minuti esatti
- Filetto spesso (3 cm): 45 minuti esatti

Utilizzare 6-8L di acqua. La bassa temperatura è cruciale.`
        },
        'cod': {
            name: 'Merluzzo',
            temperature: '54°C',
            time: {
                '1cm': '20 minuti',
                '2cm': '30 minuti',
                '3cm': '40 minuti'
            },
            notes: `Tempi di cottura in base allo spessore:
- Filetto spesso 1 cm: 20 minuti esatti
- Filetto spesso 2 cm: 30 minuti esatti
- Filetto spesso 3 cm: 40 minuti esatti

Utilizzare 6-8L di acqua.`
        },
        'sea-bass': {
            name: 'Branzino',
            temperature: '54°C',
            time: {
                'filetto 1cm': '20 minuti',
                'filetto 2cm': '30 minuti',
                'intero': '40 minuti'
            },
            notes: `Tempi di cottura:
- Filetto spesso 1 cm: 20 minuti esatti
- Filetto spesso 2 cm: 30 minuti esatti
- Branzino intero: 40 minuti esatti

Utilizzare 8-10L di acqua.`
        },
        'octopus': {
            name: 'Polpo',
            temperature: '77°C',
            time: {
                'tentacoli': '4 ore e 30 minuti',
                'intero piccolo': '5 ore',
                'intero grande': '6 ore'
            },
            notes: `Tempi di cottura:
- Solo tentacoli: 4 ore e 30 minuti esatti
- Polpo intero piccolo (fino a 1kg): 5 ore esatte
- Polpo intero grande (1-2kg): 6 ore esatte

Utilizzare 10-15L di acqua.`
        },
        'tuna-steak': {
            name: 'Trancio di Tonno',
            temperature: '43°C',
            time: {
                '2cm': '30 minuti',
                '3cm': '45 minuti',
                '4cm': '1 ora'
            },
            notes: `Tempi di cottura in base allo spessore:
- Trancio spesso 2 cm: 30 minuti esatti
- Trancio spesso 3 cm: 45 minuti esatti
- Trancio spesso 4 cm: 1 ora esatta

Utilizzare 6-8L di acqua. Per tonno rosato all'interno.`
        },
        'lobster-tail': {
            name: 'Coda di Aragosta',
            temperature: '60°C',
            time: {
                'piccola': '30 minuti',
                'media': '45 minuti',
                'grande': '1 ora'
            },
            notes: `Tempi di cottura in base alla dimensione:
- Coda piccola (100-150g): 30 minuti esatti
- Coda media (150-250g): 45 minuti esatti
- Coda grande (250-350g): 1 ora esatta

Utilizzare 8-10L di acqua.`
        },
        'scallops': {
            name: 'Capesante',
            temperature: '52°C',
            time: {
                'piccole': '20 minuti',
                'medie': '30 minuti',
                'grandi': '40 minuti'
            },
            notes: `Tempi di cottura in base alla dimensione:
- Capesante piccole: 20 minuti esatti
- Capesante medie: 30 minuti esatti
- Capesante grandi: 40 minuti esatti

Utilizzare 6-8L di acqua.`
        },
        'orata': {
            name: 'Orata',
            temperature: '54°C',
            time: {
                'filetto 1cm': '20 minuti',
                'filetto 2cm': '30 minuti',
                'intera piccola': '35 minuti',
                'intera grande': '45 minuti'
            },
            notes: `Tempi di cottura:
- Filetto spesso 1 cm: 20 minuti esatti
- Filetto spesso 2 cm: 30 minuti esatti
- Orata intera piccola (400-600g): 35 minuti esatti
- Orata intera grande (600-800g): 45 minuti esatti

Utilizzare 8-10L di acqua. Ideale per mantenere la carne morbida.`
        },
        'trota': {
            name: 'Trota',
            temperature: '52°C',
            time: {
                'filetto sottile': '25 minuti',
                'filetto spesso': '35 minuti',
                'intera': '40 minuti'
            },
            notes: `Tempi di cottura:
- Filetto sottile (1cm): 25 minuti esatti
- Filetto spesso (2cm): 35 minuti esatti
- Trota intera (300-400g): 40 minuti esatti

Utilizzare 6-8L di acqua. Ottima per preservare i sapori delicati.`
        },
        'sogliola': {
            name: 'Sogliola',
            temperature: '50°C',
            time: {
                'sottile': '15 minuti',
                'media': '20 minuti',
                'spessa': '25 minuti'
            },
            notes: `Tempi di cottura:
- Sogliola sottile (< 1cm): 15 minuti esatti
- Sogliola media (1-1.5cm): 20 minuti esatti
- Sogliola spessa (> 1.5cm): 25 minuti esatti

Utilizzare 6-8L di acqua. Pesce molto delicato, evitare temperature eccessive.`
        },
        'rombo': {
            name: 'Rombo',
            temperature: '54°C',
            time: {
                'filetto 1cm': '25 minuti',
                'filetto 2cm': '35 minuti',
                'intero piccolo': '45 minuti',
                'intero grande': '1 ora'
            },
            notes: `Tempi di cottura:
- Filetto spesso 1 cm: 25 minuti esatti
- Filetto spesso 2 cm: 35 minuti esatti
- Rombo intero piccolo (600g): 45 minuti esatti
- Rombo intero grande (800g-1kg): 1 ora esatta

Utilizzare 10-15L di acqua per pesci interi.`
        },
        'cozze': {
            name: 'Cozze',
            temperature: '60°C',
            time: {
                'standard': '20 minuti',
                'con guscio': '30 minuti'
            },
            notes: `Tempi di cottura:
- Polpa sgusciata: 20 minuti esatti
- Con guscio: 30 minuti esatti

Utilizzare 6-8L di acqua. Aggiungere aromi nel sacchetto sottovuoto.`
        },
        'gamberi-rossi': {
            name: 'Gamberi Rossi',
            temperature: '58°C',
            time: {
                'piccoli': '15 minuti',
                'medi': '20 minuti',
                'grandi': '25 minuti'
            },
            notes: `Tempi di cottura:
- Gamberi piccoli (< 30g): 15 minuti esatti
- Gamberi medi (30-50g): 20 minuti esatti
- Gamberi grandi (> 50g): 25 minuti esatti

Utilizzare 6-8L di acqua. Sgusciare prima della cottura per risultati migliori.`
        },
        'calamari': {
            name: 'Calamari',
            temperature: '59°C',
            time: {
                'anelli': '1 ora',
                'interi piccoli': '1 ora e 30 minuti',
                'interi grandi': '2 ore'
            },
            notes: `Tempi di cottura:
- Anelli di calamaro: 1 ora esatta
- Calamari interi piccoli: 1 ora e 30 minuti esatti
- Calamari interi grandi: 2 ore esatte

Utilizzare 8-10L di acqua. La cottura lenta li rende tenerissimi.`
        },
        'rana-pescatrice': {
            name: 'Rana Pescatrice (Coda di Rospo)',
            temperature: '54°C',
            time: {
                'medaglioni 2cm': '25 minuti',
                'medaglioni 3cm': '35 minuti',
                'filetto intero': '45 minuti'
            },
            notes: `Tempi di cottura:
- Medaglioni spessi 2 cm: 25 minuti esatti
- Medaglioni spessi 3 cm: 35 minuti esatti
- Filetto intero: 45 minuti esatti

Utilizzare 8-10L di acqua. Pesce ideale per la cottura sottovuoto.`
        },
        'spigola-selvaggia': {
            name: 'Spigola Selvaggia',
            temperature: '54°C',
            time: {
                'filetto 1cm': '20 minuti',
                'filetto 2cm': '30 minuti',
                'intera piccola': '40 minuti',
                'intera grande': '50 minuti'
            },
            notes: `Tempi di cottura:
- Filetto spesso 1 cm: 20 minuti esatti
- Filetto spesso 2 cm: 30 minuti esatti
- Spigola intera piccola (600g): 40 minuti esatti
- Spigola intera grande (800g-1kg): 50 minuti esatti

Utilizzare 10-15L di acqua per pesci interi.`
        },
        'dentice': {
            name: 'Dentice',
            temperature: '54°C',
            time: {
                'filetto 1cm': '20 minuti',
                'filetto 2cm': '30 minuti',
                'intero piccolo': '40 minuti',
                'intero grande': '50 minuti'
            },
            notes: `Tempi di cottura:
- Filetto spesso 1 cm: 20 minuti esatti
- Filetto spesso 2 cm: 30 minuti esatti
- Dentice intero piccolo (600g): 40 minuti esatti
- Dentice intero grande (800g-1kg): 50 minuti esatti

Utilizzare 10-12L di acqua. Pesce pregiato, mantenere temperatura costante.`
        },
        'ricciola': {
            name: 'Ricciola',
            temperature: '54°C',
            time: {
                'trancio 2cm': '25 minuti',
                'trancio 3cm': '35 minuti',
                'trancio 4cm': '45 minuti'
            },
            notes: `Tempi di cottura:
- Trancio spesso 2 cm: 25 minuti esatti
- Trancio spesso 3 cm: 35 minuti esatti
- Trancio spesso 4 cm: 45 minuti esatti

Utilizzare 8-10L di acqua. Ottima per mantenere la succulenza del pesce.`
        },
        'pesce-spada': {
            name: 'Pesce Spada',
            temperature: '54°C',
            time: {
                'trancio sottile': '20 minuti',
                'trancio medio': '30 minuti',
                'trancio spesso': '40 minuti'
            },
            notes: `Tempi di cottura:
- Trancio sottile (1.5cm): 20 minuti esatti
- Trancio medio (2.5cm): 30 minuti esatti
- Trancio spesso (3.5cm): 40 minuti esatti

Utilizzare 8-10L di acqua. Ideale per mantenere la consistenza.`
        },
        'cernia': {
            name: 'Cernia',
            temperature: '54°C',
            time: {
                'filetto 2cm': '30 minuti',
                'filetto 3cm': '40 minuti',
                'trancio': '50 minuti'
            },
            notes: `Tempi di cottura:
- Filetto spesso 2 cm: 30 minuti esatti
- Filetto spesso 3 cm: 40 minuti esatti
- Trancio intero: 50 minuti esatti

Utilizzare 10-12L di acqua. Pesce dalla carne compatta.`
        },
        'ombrina': {
            name: 'Ombrina',
            temperature: '54°C',
            time: {
                'filetto 1cm': '20 minuti',
                'filetto 2cm': '30 minuti',
                'intera': '45 minuti'
            },
            notes: `Tempi di cottura:
- Filetto spesso 1 cm: 20 minuti esatti
- Filetto spesso 2 cm: 30 minuti esatti
- Ombrina intera: 45 minuti esatti

Utilizzare 8-10L di acqua. Pesce delicato, controllare temperatura.`
        },
        'persico': {
            name: 'Persico',
            temperature: '52°C',
            time: {
                'filetto sottile': '15 minuti',
                'filetto medio': '25 minuti',
                'intero': '35 minuti'
            },
            notes: `Tempi di cottura:
- Filetto sottile (1cm): 15 minuti esatti
- Filetto medio (2cm): 25 minuti esatti
- Persico intero: 35 minuti esatti

Utilizzare 6-8L di acqua. Pesce di acqua dolce molto delicato.`
        },
        'sgombro': {
            name: 'Sgombro',
            temperature: '52°C',
            time: {
                'filetto': '20 minuti',
                'intero piccolo': '30 minuti',
                'intero grande': '40 minuti'
            },
            notes: `Tempi di cottura:
- Filetto: 20 minuti esatti
- Sgombro intero piccolo (300g): 30 minuti esatti
- Sgombro intero grande (500g): 40 minuti esatti

Utilizzare 8-10L di acqua. Pesce grasso, ottimo per cottura sottovuoto.`
        },
        'sarago': {
            name: 'Sarago',
            temperature: '54°C',
            time: {
                'filetto': '20 minuti',
                'intero piccolo': '35 minuti',
                'intero grande': '45 minuti'
            },
            notes: `Tempi di cottura:
- Filetto: 20 minuti esatti
- Sarago intero piccolo (400g): 35 minuti esatti
- Sarago intero grande (600g): 45 minuti esatti

Utilizzare 8-10L di acqua. Mantenere temperatura costante.`
        },
        'gallinella': {
            name: 'Gallinella',
            temperature: '54°C',
            time: {
                'filetti': '25 minuti',
                'intera piccola': '35 minuti',
                'intera grande': '45 minuti'
            },
            notes: `Tempi di cottura:
- Filetti: 25 minuti esatti
- Gallinella intera piccola (400g): 35 minuti esatti
- Gallinella intera grande (600g): 45 minuti esatti

Utilizzare 8-10L di acqua. Ottima per zuppe e brodetti.`
        },
        'nasello': {
            name: 'Nasello',
            temperature: '54°C',
            time: {
                'filetto sottile': '20 minuti',
                'filetto spesso': '30 minuti',
                'trancio': '40 minuti'
            },
            notes: `Tempi di cottura:
- Filetto sottile (1cm): 20 minuti esatti
- Filetto spesso (2cm): 30 minuti esatti
- Trancio: 40 minuti esatti

Utilizzare 8-10L di acqua. Carne bianca e delicata.`
        }
    },
    vegetables: {
        'carrots': {
            name: 'Carote',
            temperature: '83.9°C',
            time: {
                'intere': '60 minuti',
                'tagliate (1cm)': '30 minuti',
                'baby carote': '25 minuti'
            },
            notes: `Tempi di cottura in base al taglio:
- Carote intere: 60 minuti esatti
- Carote tagliate a rondelle (1 cm): 30 minuti esatti
- Baby carote: 25 minuti esatti

Riempire con 6-8L. Controllare il livello dell'acqua ogni 15 minuti.`
        },
        'asparagus': {
            name: 'Asparagi',
            temperature: '82°C',
            time: {
                'sottili': '12 minuti',
                'medi': '15 minuti',
                'spessi': '20 minuti'
            },
            notes: `Tempi di cottura in base al diametro:
- Asparagi sottili (< 1cm): 12 minuti esatti
- Asparagi medi (1-1.5cm): 15 minuti esatti
- Asparagi spessi (> 1.5cm): 20 minuti esatti

Utilizzare 6-8L di acqua.`
        },
        'potatoes': {
            name: 'Patate',
            temperature: '85°C',
            time: {
                'a cubetti 2cm': '45 minuti',
                'intere piccole': '1 ora',
                'intere medie': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Patate a cubetti (2cm): 45 minuti esatti
- Patate intere piccole (3-4cm): 1 ora esatta
- Patate intere medie (5-6cm): 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua.`
        },
        'artichokes': {
            name: 'Carciofi',
            temperature: '85°C',
            time: {
                'cuori': '45 minuti',
                'interi piccoli': '1 ora',
                'interi grandi': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Solo cuori: 45 minuti esatti
- Carciofi interi piccoli: 1 ora esatta
- Carciofi interi grandi: 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua.`
        },
        'pumpkin': {
            name: 'Zucca',
            temperature: '85°C',
            time: {
                'cubetti 2cm': '45 minuti',
                'fette 3cm': '1 ora',
                'spicchi': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura in base al taglio:
- Cubetti da 2 cm: 45 minuti esatti
- Fette spesse 3 cm: 1 ora esatta
- Spicchi grandi: 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua.`
        },
        'beetroot': {
            name: 'Barbabietole',
            temperature: '85°C',
            time: {
                'piccole intere': '2 ore',
                'medie intere': '3 ore',
                'grandi intere': '4 ore'
            },
            notes: `Tempi di cottura in base alla dimensione:
- Barbabietole piccole (5cm): 2 ore esatte
- Barbabietole medie (7cm): 3 ore esatte
- Barbabietole grandi (10cm): 4 ore esatte

Utilizzare 8-10L di acqua.`
        },
        'zucchine': {
            name: 'Zucchine',
            temperature: '83°C',
            time: {
                'rondelle 1cm': '20 minuti',
                'bastoncini': '25 minuti',
                'intere piccole': '35 minuti',
                'intere medie': '45 minuti'
            },
            notes: `Tempi di cottura:
- Rondelle spesse 1 cm: 20 minuti esatti
- Bastoncini (stick): 25 minuti esatti
- Zucchine intere piccole (12-15cm): 35 minuti esatti
- Zucchine intere medie (15-20cm): 45 minuti esatti

Utilizzare 6-8L di acqua. Ideali per mantenere la consistenza croccante.`
        },
        'melanzane': {
            name: 'Melanzane',
            temperature: '85°C',
            time: {
                'cubetti 2cm': '30 minuti',
                'fette 1cm': '25 minuti',
                'intere piccole': '1 ora',
                'intere medie': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Cubetti da 2 cm: 30 minuti esatti
- Fette spesse 1 cm: 25 minuti esatti
- Melanzane intere piccole: 1 ora esatta
- Melanzane intere medie: 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Ottimo per preparazioni successive come parmigiana.`
        },
        'broccoli': {
            name: 'Broccoli',
            temperature: '83°C',
            time: {
                'cimette piccole': '30 minuti',
                'cimette medie': '40 minuti',
                'gambi a fette': '35 minuti'
            },
            notes: `Tempi di cottura:
- Cimette piccole (2-3cm): 30 minuti esatti
- Cimette medie (4-5cm): 40 minuti esatti
- Gambi tagliati a fette: 35 minuti esatti

Utilizzare 8-10L di acqua. Mantengono il colore verde brillante.`
        },
        'cavolfiore': {
            name: 'Cavolfiore',
            temperature: '83°C',
            time: {
                'cimette piccole': '30 minuti',
                'cimette medie': '45 minuti',
                'fette 2cm': '40 minuti'
            },
            notes: `Tempi di cottura:
- Cimette piccole (2-3cm): 30 minuti esatti
- Cimette medie (4-5cm): 45 minuti esatti
- Fette spesse 2 cm: 40 minuti esatti

Utilizzare 8-10L di acqua. Perfetto per purè o gratin.`
        },
        'fagiolini': {
            name: 'Fagiolini',
            temperature: '83°C',
            time: {
                'sottili': '30 minuti',
                'medi': '45 minuti',
                'spessi': '1 ora'
            },
            notes: `Tempi di cottura:
- Fagiolini sottili: 30 minuti esatti
- Fagiolini medi: 45 minuti esatti
- Fagiolini spessi: 1 ora esatta

Utilizzare 6-8L di acqua. Mantengono la croccantezza.`
        },
        'piselli': {
            name: 'Piselli',
            temperature: '83°C',
            time: {
                'freschi': '30 minuti',
                'surgelati': '20 minuti'
            },
            notes: `Tempi di cottura:
- Piselli freschi: 30 minuti esatti
- Piselli surgelati: 20 minuti esatti

Utilizzare 6-8L di acqua. Dolci e teneri.`
        },
        'spinaci': {
            name: 'Spinaci',
            temperature: '83°C',
            time: {
                'foglie': '10 minuti',
                'gambi': '15 minuti',
                'interi': '20 minuti'
            },
            notes: `Tempi di cottura:
- Solo foglie: 10 minuti esatti
- Solo gambi: 15 minuti esatti
- Spinaci interi: 20 minuti esatti

Utilizzare 6-8L di acqua. Mantengono il colore vivace.`
        },
        'peperoni': {
            name: 'Peperoni',
            temperature: '83°C',
            time: {
                'strisce': '25 minuti',
                'cubetti': '20 minuti',
                'interi': '1 ora'
            },
            notes: `Tempi di cottura:
- Strisce di 1cm: 25 minuti esatti
- Cubetti di 2cm: 20 minuti esatti
- Peperoni interi: 1 ora esatta

Utilizzare 8-10L di acqua. Ottimi per conservare.`
        },
        'finocchi': {
            name: 'Finocchi',
            temperature: '83°C',
            time: {
                'spicchi sottili': '30 minuti',
                'spicchi spessi': '45 minuti',
                'interi piccoli': '1 ora',
                'interi grandi': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Spicchi sottili (1cm): 30 minuti esatti
- Spicchi spessi (2cm): 45 minuti esatti
- Finocchi interi piccoli: 1 ora esatta
- Finocchi interi grandi: 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Mantengono la dolcezza naturale.`
        },
        'sedano-rapa': {
            name: 'Sedano Rapa',
            temperature: '85°C',
            time: {
                'cubetti 1cm': '45 minuti',
                'fette 2cm': '1 ora',
                'intero piccolo': '2 ore',
                'intero grande': '3 ore'
            },
            notes: `Tempi di cottura:
- Cubetti da 1 cm: 45 minuti esatti
- Fette spesse 2 cm: 1 ora esatta
- Sedano rapa intero piccolo: 2 ore esatte
- Sedano rapa intero grande: 3 ore esatte

Utilizzare 8-10L di acqua. Ideale per purè.`
        },
        'carciofi-romani': {
            name: 'Carciofi Romani',
            temperature: '85°C',
            time: {
                'piccoli': '45 minuti',
                'medi': '1 ora',
                'grandi': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Carciofi piccoli: 45 minuti esatti
- Carciofi medi: 1 ora esatta
- Carciofi grandi: 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Pulire bene e rimuovere le foglie esterne più dure.`
        },
        'radicchio': {
            name: 'Radicchio',
            temperature: '83°C',
            time: {
                'tagliato': '20 minuti',
                'intero piccolo': '30 minuti',
                'intero grande': '40 minuti'
            },
            notes: `Tempi di cottura:
- Radicchio tagliato: 20 minuti esatti
- Radicchio intero piccolo: 30 minuti esatti
- Radicchio intero grande: 40 minuti esatti

Utilizzare 6-8L di acqua. Ottimo per mantenere il colore e il sapore.`
        },
        'indivia-belga': {
            name: 'Indivia Belga',
            temperature: '83°C',
            time: {
                'tagliata': '20 minuti',
                'intera piccola': '30 minuti',
                'intera grande': '40 minuti'
            },
            notes: `Tempi di cottura:
- Indivia tagliata: 20 minuti esatti
- Indivia intera piccola: 30 minuti esatti
- Indivia intera grande: 40 minuti esatti

Utilizzare 6-8L di acqua. Mantenere integra per le preparazioni ripiene.`
        },
        'topinambur': {
            name: 'Topinambur',
            temperature: '85°C',
            time: {
                'fette sottili': '45 minuti',
                'pezzi medi': '1 ora',
                'interi': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Fette sottili (5mm): 45 minuti esatti
- Pezzi medi (2cm): 1 ora esatta
- Topinambur interi: 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Ideale per purè o vellutate.`
        },
        'rape': {
            name: 'Rape',
            temperature: '85°C',
            time: {
                'cubetti': '45 minuti',
                'intere piccole': '1 ora',
                'intere grandi': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Cubetti (2cm): 45 minuti esatti
- Rape intere piccole: 1 ora esatta
- Rape intere grandi: 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Ottimo per zuppe e contorni.`
        },
        'cavolo-rapa': {
            name: 'Cavolo Rapa',
            temperature: '83°C',
            time: {
                'cubetti': '40 minuti',
                'fette': '50 minuti',
                'intero': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Cubetti (2cm): 40 minuti esatti
- Fette (1cm): 50 minuti esatti
- Cavolo rapa intero: 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Perfetto per purè o gratin.`
        },
        'scorzonera': {
            name: 'Scorzonera',
            temperature: '85C',
            time: {
                'pezzi piccoli': '30 minuti',
                'pezzi medi': '45 minuti',
                'intera': '1 ora'
            },
            notes: `Tempi di cottura:
- Pezzi piccoli (3cm): 30 minuti esatti
- Pezzi medi (6cm): 45 minuti esatti
- Scorzonera intera: 1 ora esatta

Utilizzare 6-8L di acqua. Mantenere in acqua acidulata prima della cottura.`
        },
        'cardi': {
            name: 'Cardi',
            temperature: '85°C',
            time: {
                'coste sottili': '45 minuti',
                'coste medie': '1 ora',
                'coste spesse': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Coste sottili: 45 minuti esatti
- Coste medie: 1 ora esatta
- Coste spesse: 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Pulire e immergere in acqua acidulata prima della cottura.`
        },
        'pastinaca': {
            name: 'Pastinaca',
            temperature: '85°C',
            time: {
                'cubetti': '45 minuti',
                'bastoncini': '1 ora',
                'intera': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Cubetti (2cm): 45 minuti esatti
- Bastoncini: 1 ora esatta
- Pastinaca intera: 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Ottima per purè o come contorno.`
        },
        'catalogna': {
            name: 'Catalogna',
            temperature: '83°C',
            time: {
                'foglie': '20 minuti',
                'coste sottili': '30 minuti',
                'coste spesse': '40 minuti'
            },
            notes: `Tempi di cottura:
- Solo foglie: 20 minuti esatti
- Coste sottili: 30 minuti esatti
- Coste spesse: 40 minuti esatti

Utilizzare 6-8L di acqua. Mantenere croccante per un risultato ottimale.`
        }
    },
    seafood: {
        'gamberoni': {
            name: 'Gamberoni',
            temperature: '58°C',
            time: {
                'sgusciati': '20 minuti',
                'con guscio': '25 minuti',
                'jumbo': '30 minuti'
            },
            notes: `Tempi di cottura:
- Gamberoni sgusciati: 20 minuti esatti
- Gamberoni con guscio: 25 minuti esatti
- Gamberoni jumbo (>100g): 30 minuti esatti

Utilizzare 6-8L di acqua. Perfetti per mantenere la dolcezza naturale.`
        },
        'astice': {
            name: 'Astice',
            temperature: '60°C',
            time: {
                'coda': '45 minuti',
                'chele': '1 ora',
                'intero piccolo': '1 ora e 15 minuti',
                'intero grande': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Solo coda: 45 minuti esatti
- Solo chele: 1 ora esatta
- Astice intero piccolo (500g): 1 ora e 15 minuti esatti
- Astice intero grande (>500g): 1 ora e 30 minuti esatti

Utilizzare 12-15L di acqua per astici interi.`
        },
        'granchio': {
            name: 'Granchio',
            temperature: '60°C',
            time: {
                'zampe': '45 minuti',
                'intero piccolo': '1 ora',
                'intero grande': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Solo zampe: 45 minuti esatti
- Granchio intero piccolo: 1 ora esatta
- Granchio intero grande: 1 ora e 30 minuti esatti

Utilizzare 10-12L di acqua.`
        },
        'capesante-fresche': {
            name: 'Capesante Fresche',
            temperature: '52°C',
            time: {
                'piccole': '25 minuti',
                'medie': '30 minuti',
                'grandi': '35 minuti'
            },
            notes: `Tempi di cottura:
- Capesante piccole (<30g): 25 minuti esatti
- Capesante medie (30-40g): 30 minuti esatti
- Capesante grandi (>40g): 35 minuti esatti

Utilizzare 6-8L di acqua. Ideali per mantenere la consistenza delicata.`
        },
        'vongole': {
            name: 'Vongole',
            temperature: '60°C',
            time: {
                'sgusciate': '20 minuti',
                'con guscio': '30 minuti'
            },
            notes: `Tempi di cottura:
- Vongole sgusciate: 20 minuti esatti
- Vongole con guscio: 30 minuti esatti

Utilizzare 6-8L di acqua. Aggiungere aromi nel sacchetto.`
        },
        'scampi': {
            name: 'Scampi',
            temperature: '58°C',
            time: {
                'piccoli': '15 minuti',
                'medi': '20 minuti',
                'grandi': '25 minuti'
            },
            notes: `Tempi di cottura:
- Scampi piccoli (<30g): 15 minuti esatti
- Scampi medi (30-50g): 20 minuti esatti
- Scampi grandi (>50g): 25 minuti esatti

Utilizzare 6-8L di acqua. Mantenere il guscio per un sapore più intenso.`
        },
        'cozze-pelose': {
            name: 'Cozze Pelose',
            temperature: '60°C',
            time: {
                'sgusciate': '20 minuti',
                'con guscio': '30 minuti'
            },
            notes: `Tempi di cottura:
- Cozze sgusciate: 20 minuti esatti
- Cozze con guscio: 30 minuti esatti

Utilizzare 6-8L di acqua. Perfette per sughi e risotti.`
        },
        'fasolari': {
            name: 'Fasolari',
            temperature: '60°C',
            time: {
                'sgusciati': '25 minuti',
                'con guscio': '35 minuti'
            },
            notes: `Tempi di cottura:
- Fasolari sgusciati: 25 minuti esatti
- Fasolari con guscio: 35 minuti esatti

Utilizzare 6-8L di acqua. Ottimi per insalate di mare.`
        },
        'cannolicchi': {
            name: 'Cannolicchi',
            temperature: '60°C',
            time: {
                'sgusciati': '15 minuti',
                'con guscio': '25 minuti'
            },
            notes: `Tempi di cottura:
- Cannolicchi sgusciati: 15 minuti esatti
- Cannolicchi con guscio: 25 minuti esatti

Utilizzare 6-8L di acqua. Delicati, non eccedere con il tempo di cottura.`
        },
        'moscardini': {
            name: 'Moscardini',
            temperature: '77°C',
            time: {
                'piccoli': '3 ore',
                'medi': '4 ore',
                'grandi': '5 ore'
            },
            notes: `Tempi di cottura:
- Moscardini piccoli (<50g): 3 ore esatte
- Moscardini medi (50-80g): 4 ore esatte
- Moscardini grandi (>80g): 5 ore esatte

Utilizzare 8-10L di acqua. La cottura lenta li rende tenerissimi.`
        },
        'seppioline': {
            name: 'Seppioline',
            temperature: '77°C',
            time: {
                'piccole': '2 ore',
                'medie': '3 ore',
                'grandi': '4 ore'
            },
            notes: `Tempi di cottura:
- Seppioline piccole (<100g): 2 ore esatte
- Seppioline medie (100-150g): 3 ore esatte
- Seppioline grandi (>150g): 4 ore esatte

Utilizzare 8-10L di acqua. Perfette per insalate di mare.`
        },
        'mazzancolle': {
            name: 'Mazzancolle',
            temperature: '58°C',
            time: {
                'sgusciate': '20 minuti',
                'con guscio': '25 minuti',
                'jumbo': '30 minuti'
            },
            notes: `Tempi di cottura:
- Mazzancolle sgusciate: 20 minuti esatti
- Mazzancolle con guscio: 25 minuti esatti
- Mazzancolle jumbo: 30 minuti esatti

Utilizzare 6-8L di acqua. Mantenere il guscio per un sapore più intenso.`
        },
        'cicale-di-mare': {
            name: 'Cicale di Mare',
            temperature: '60°C',
            time: {
                'piccole': '25 minuti',
                'medie': '30 minuti',
                'grandi': '35 minuti'
            },
            notes: `Tempi di cottura:
- Cicale piccole (<50g): 25 minuti esatti
- Cicale medie (50-80g): 30 minuti esatti
- Cicale grandi (>80g): 35 minuti esatti

Utilizzare 6-8L di acqua. Crostacei delicati, non eccedere con la cottura.`
        },
        'tartufi-di-mare': {
            name: 'Tartufi di Mare',
            temperature: '60°C',
            time: {
                'piccoli': '20 minuti',
                'medi': '25 minuti',
                'grandi': '30 minuti'
            },
            notes: `Tempi di cottura:
- Tartufi piccoli: 20 minuti esatti
- Tartufi medi: 25 minuti esatti
- Tartufi grandi: 30 minuti esatti

Utilizzare 6-8L di acqua. Ottimi per risotti e pasta.`
        },
        'lumachine-di-mare': {
            name: 'Lumachine di Mare',
            temperature: '60°C',
            time: {
                'sgusciate': '20 minuti',
                'con guscio': '30 minuti'
            },
            notes: `Tempi di cottura:
- Lumachine sgusciate: 20 minuti esatti
- Lumachine con guscio: 30 minuti esatti

Utilizzare 6-8L di acqua. Ideali per zuppe di pesce.`
        },
        'telline': {
            name: 'Telline',
            temperature: '60°C',
            time: {
                'sgusciate': '15 minuti',
                'con guscio': '25 minuti'
            },
            notes: `Tempi di cottura:
- Telline sgusciate: 15 minuti esatti
- Telline con guscio: 25 minuti esatti

Utilizzare 6-8L di acqua. Perfette per spaghetti alle vongole.`
        },
        'gamberi-viola': {
            name: 'Gamberi Viola',
            temperature: '58°C',
            time: {
                'sgusciati': '15 minuti',
                'con guscio': '20 minuti',
                'jumbo': '25 minuti'
            },
            notes: `Tempi di cottura:
- Gamberi sgusciati: 15 minuti esatti
- Gamberi con guscio: 20 minuti esatti
- Gamberi jumbo: 25 minuti esatti

Utilizzare 6-8L di acqua. Molto delicati, attenzione alla temperatura.`
        },
        'pannocchie': {
            name: 'Pannocchie',
            temperature: '60°C',
            time: {
                'piccole': '20 minuti',
                'medie': '25 minuti',
                'grandi': '30 minuti'
            },
            notes: `Tempi di cottura:
- Pannocchie piccole: 20 minuti esatti
- Pannocchie medie: 25 minuti esatti
- Pannocchie grandi: 30 minuti esatti

Utilizzare 6-8L di acqua. Ottimo sapore dolce naturale.`
        },
        'granseola': {
            name: 'Granseola',
            temperature: '60°C',
            time: {
                'zampe': '40 minuti',
                'corpo piccolo': '50 minuti',
                'corpo grande': '1 ora'
            },
            notes: `Tempi di cottura:
- Solo zampe: 40 minuti esatti
- Corpo piccolo (<800g): 50 minuti esatti
- Corpo grande (>800g): 1 ora esatta

Utilizzare 10-12L di acqua. Ideale per insalate di mare.`
        }
    },
    desserts: {
        'crema-pasticcera': {
            name: 'Crema Pasticcera',
            temperature: '82°C',
            time: {
                'vasetti piccoli': '1 ora',
                'vasetti medi': '1 ora e 15 minuti',
                'vasetti grandi': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Vasetti 100ml: 1 ora esatta
- Vasetti 200ml: 1 ora e 15 minuti esatti
- Vasetti 300ml: 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Sigillare bene i vasetti.`
        },
        'budino': {
            name: 'Budino',
            temperature: '80°C',
            time: {
                'monoporzione': '1 ora',
                'medio': '1 ora e 30 minuti',
                'grande': '2 ore'
            },
            notes: `Tempi di cottura:
- Monoporzione (120ml): 1 ora esatta
- Formato medio (250ml): 1 ora e 30 minuti esatti
- Formato grande (500ml): 2 ore esatte

Utilizzare 8-10L di acqua. Coprire completamente i contenitori.`
        },
        'cheesecake': {
            name: 'Cheesecake',
            temperature: '80°C',
            time: {
                'monoporzione': '1 ora',
                'media': '1 ora e 30 minuti',
                'grande': '2 ore'
            },
            notes: `Tempi di cottura:
- Monoporzione (100g): 1 ora esatta
- Media (500g): 1 ora e 30 minuti esatti
- Grande (1kg): 2 ore esatte

Utilizzare 10-12L di acqua. Sigillare bene per evitare infiltrazioni.`
        },
        'creme-caramel': {
            name: 'Creme Caramel',
            temperature: '82°C',
            time: {
                'piccolo': '45 minuti',
                'medio': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (100ml): 45 minuti esatti
- Formato medio (200ml): 1 ora esatta
- Formato grande (300ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Verificare la sigillatura dei contenitori.`
        },
        'panna-cotta': {
            name: 'Panna Cotta',
            temperature: '82°C',
            time: {
                'piccola': '1 ora',
                'media': '1 ora e 15 minuti',
                'grande': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (100ml): 1 ora esatta
- Formato medio (200ml): 1 ora e 15 minuti esatti
- Formato grande (300ml): 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Importante: contenitori ben sigillati.`
        },
        'crema-catalana': {
            name: 'Crema Catalana',
            temperature: '82°C',
            time: {
                'monoporzione': '1 ora',
                'media': '1 ora e 15 minuti',
                'grande': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Monoporzione (120ml): 1 ora esatta
- Media (200ml): 1 ora e 15 minuti esatti
- Grande (300ml): 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Caramellizzare la superficie dopo il raffreddamento.`
        },
        'mousse-cioccolato': {
            name: 'Mousse al Cioccolato',
            temperature: '75°C',
            time: {
                'piccola': '45 minuti',
                'media': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (100ml): 45 minuti esatti
- Formato medio (200ml): 1 ora esatta
- Formato grande (300ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Importante: sigillare ermeticamente i contenitori.`
        },
        'creme-brulee': {
            name: 'Crème Brûlée',
            temperature: '82°C',
            time: {
                'piccola': '1 ora',
                'media': '1 ora e 15 minuti',
                'grande': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (100ml): 1 ora esatta
- Formato medio (200ml): 1 ora e 15 minuti esatti
- Formato grande (300ml): 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Caramellizzare dopo il raffreddamento completo.`
        },
        'zabaione': {
            name: 'Zabaione',
            temperature: '82°C',
            time: {
                'monoporzione': '45 minuti',
                'medio': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Monoporzione (100ml): 45 minuti esatti
- Formato medio (200ml): 1 ora esatta
- Formato grande (300ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Servire freddo o caldo.`
        },
        'bavarese': {
            name: 'Bavarese',
            temperature: '82°C',
            time: {
                'piccola': '1 ora',
                'media': '1 ora e 15 minuti',
                'grande': '1 ora e 30 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (150ml): 1 ora esatta
- Formato medio (250ml): 1 ora e 15 minuti esatti
- Formato grande (400ml): 1 ora e 30 minuti esatti

Utilizzare 8-10L di acqua. Raffreddare completamente prima di servire.`
        },
        'creme-anglaise': {
            name: 'Crème Anglaise',
            temperature: '82°C',
            time: {
                'piccola': '45 minuti',
                'media': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Porzione piccola (200ml): 45 minuti esatti
- Porzione media (400ml): 1 ora esatta
- Porzione grande (600ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Importante: filtrare prima della cottura.`
        },
        'budino-riso': {
            name: 'Budino di Riso',
            temperature: '82°C',
            time: {
                'monoporzione': '1 ora',
                'formato famiglia': '1 ora e 30 minuti',
                'formato grande': '2 ore'
            },
            notes: `Tempi di cottura:
- Monoporzione (150ml): 1 ora esatta
- Formato famiglia (500ml): 1 ora e 30 minuti esatti
- Formato grande (750ml): 2 ore esatte

Utilizzare 8-10L di acqua. Il riso deve essere precotto.`
        },
        'crema-mascarpone': {
            name: 'Crema al Mascarpone',
            temperature: '75°C',
            time: {
                'piccola': '45 minuti',
                'media': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Porzione piccola (150ml): 45 minuti esatti
- Porzione media (300ml): 1 ora esatta
- Porzione grande (450ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Temperatura più bassa per mantenere la consistenza.`
        },
        'semifreddo': {
            name: 'Base per Semifreddo',
            temperature: '75°C',
            time: {
                'piccolo': '45 minuti',
                'medio': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Stampo piccolo (300ml): 45 minuti esatti
- Stampo medio (500ml): 1 ora esatta
- Stampo grande (750ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Congelare dopo il raffreddamento.`
        },
        'crema-limone': {
            name: 'Crema al Limone',
            temperature: '82°C',
            time: {
                'vasetti piccoli': '45 minuti',
                'vasetti medi': '1 ora',
                'vasetti grandi': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Vasetti piccoli (100ml): 45 minuti esatti
- Vasetti medi (200ml): 1 ora esatta
- Vasetti grandi (300ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Perfetta per farciture.`
        },
        'crema-pistacchio': {
            name: 'Crema al Pistacchio',
            temperature: '82°C',
            time: {
                'piccola': '45 minuti',
                'media': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (150ml): 45 minuti esatti
- Formato medio (300ml): 1 ora esatta
- Formato grande (450ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Utilizzare pasta di pistacchio di qualità.`
        },
        'crema-nocciole': {
            name: 'Crema alle Nocciole',
            temperature: '82°C',
            time: {
                'piccola': '45 minuti',
                'media': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (150ml): 45 minuti esatti
- Formato medio (300ml): 1 ora esatta
- Formato grande (450ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Ottima per farciture di torte.`
        },
        'crema-vaniglia': {
            name: 'Crema alla Vaniglia',
            temperature: '82°C',
            time: {
                'piccola': '45 minuti',
                'media': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (150ml): 45 minuti esatti
- Formato medio (300ml): 1 ora esatta
- Formato grande (450ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Usare bacche di vaniglia vera.`
        },
        'crema-caffe': {
            name: 'Crema al Caffè',
            temperature: '82°C',
            time: {
                'piccola': '45 minuti',
                'media': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (150ml): 45 minuti esatti
- Formato medio (300ml): 1 ora esatta
- Formato grande (450ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Utilizzare caffè espresso concentrato.`
        },
        'crema-cioccolato-bianco': {
            name: 'Crema al Cioccolato Bianco',
            temperature: '80°C',
            time: {
                'piccola': '45 minuti',
                'media': '1 ora',
                'grande': '1 ora e 15 minuti'
            },
            notes: `Tempi di cottura:
- Formato piccolo (150ml): 45 minuti esatti
- Formato medio (300ml): 1 ora esatta
- Formato grande (450ml): 1 ora e 15 minuti esatti

Utilizzare 8-10L di acqua. Temperatura più bassa per evitare che il cioccolato si separi.`
        }
    }
};

// Modifico le specifiche del dispositivo
const deviceSpecs = {
    name: "KitchenBoss G320",
    maxWaterCapacity: "6 Litri", // Capacità massima per G320
    minWaterCapacity: "2 Litri", // Capacità minima sicura
    tempRange: "0°C - 90°C",
    dimensions: "37.5 x 15 x 7 cm",
    power: "1200W",
    voltage: "220-240V ~ 50/60 Hz",
    features: [
        "Potenza di aspirazione: 80kPa",
        "Display LED touch",
        "Modalità sottovuoto automatica e manuale",
        "Funzione sigillatura doppia",
        "Barra saldante da 32cm"
    ]
};

// Modifico le istruzioni di sicurezza
const safetyInstructions = `
<div class="g320-instructions">
    <div class="g320-section setup">
        <h4>🔧 Preparazione Dispositivo</h4>
        <ul>
            <li>Riempire con acqua tra 2L e 6L (tra le linee MIN e MAX)</li>
            <li>Posizionare verticalmente il dispositivo su una superficie stabile</li>
            <li>Temperatura ambiente ideale: 15-40°C</li>
            <li>Collegare alla presa elettrica (220-240V)</li>
        </ul>
    </div>

    <div class="g320-section touch-panel">
        <h4>🔲 Uso del Pannello Touch</h4>
        <div class="touch-instructions">
            <div class="step">
                <span class="step-number">1</span>
                <span class="step-text">Tenere premuto Power per 2 secondi per accendere</span>
            </div>
            <div class="step">
                <span class="step-number">2</span>
                <span class="step-text">Premere Temp e usare +/- per impostare la temperatura</span>
            </div>
            <div class="step">
                <span class="step-number">3</span>
                <span class="step-text">Premere Timer e usare +/- per impostare il tempo</span>
            </div>
            <div class="step">
                <span class="step-number">4</span>
                <span class="step-text">Premere Start per avviare la cottura</span>
            </div>
        </div>
    </div>

    <div class="g320-section warnings">
        <h4>⚠️ Note Importanti</h4>
        <ul>
            <li>Non toccare il pannello con mani bagnate</li>
            <li>Pulire solo con panno leggermente umido</li>
            <li>Attendere il beep di conferma per ogni operazione</li>
            <li>"Err" sul display indica un errore</li>
            <li>Tenere premuto Stop per 3 secondi per interrompere</li>
        </ul>
    </div>

    <div class="g320-section tips">
        <h4>💡 Consigli Utili</h4>
        <ul>
            <li>Preriscaldare l'acqua per risultati ottimali</li>
            <li>Usare sacchetti sottovuoto di qualità</li>
            <li>Non superare mai i 90°C di temperatura</li>
            <li>Controllare il livello dell'acqua periodicamente</li>
        </ul>
    </div>
</div>`;

// Aggiungo gli stili specifici per le istruzioni del G320
const g320Styles = `
    .g320-instructions {
        background: #f8f9fa;
        border-radius: 12px;
        padding: 1.5rem;
        margin-top: 1rem;
    }

    .g320-section {
        background: white;
        border-radius: 8px;
        padding: 1.2rem;
        margin-bottom: 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .g320-section h4 {
        color: var(--primary-color);
        font-size: 1.2rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .g320-section ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .g320-section li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
        line-height: 1.4;
    }

    .g320-section li:before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--primary-color);
    }

    .touch-instructions {
        display: grid;
        gap: 1rem;
    }

    .step {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.8rem;
        background: #f8f9fa;
        border-radius: 6px;
    }

    .step-number {
        background: var(--primary-color);
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        flex-shrink: 0;
    }

    .step-text {
        font-size: 0.95rem;
    }

    .warnings {
        border-left: 4px solid #ff6b6b;
    }

    .tips {
        border-left: 4px solid #2ecc71;
    }
`;

// Aggiungo gli stili al documento quando viene caricato
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = g320Styles;
    document.head.appendChild(style);
});

// Aggiorno la funzione showDeviceSpecs per includere le caratteristiche specifiche
function showDeviceSpecs() {
    const specsHtml = `
        <div class="device-specs">
            <div class="device-specs-container">
                <div class="device-image">
                    <img src="kitchenboss-g320.png" alt="KitchenBoss G320" class="device-photo">
                </div>
                <div class="device-info">
                    <h3>Specifiche ${deviceSpecs.name}</h3>
                    <ul>
                        <li>Capacità acqua: ${deviceSpecs.minWaterCapacity} - ${deviceSpecs.maxWaterCapacity}</li>
                        <li>Range temperatura: ${deviceSpecs.tempRange}</li>
                        <li>Dimensioni: ${deviceSpecs.dimensions}</li>
                        <li>Alimentazione: ${deviceSpecs.power}, ${deviceSpecs.voltage}</li>
                        ${deviceSpecs.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <div class="safety-warning">
                        ${safetyInstructions}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.querySelector('.container').insertAdjacentHTML('afterbegin', specsHtml);
}

// Aggiungo funzioni per il calcolo del tempo di cottura basato sulla temperatura
function calculateNewCookingTime(baseTemp, newTemp, baseTime) {
    // Converte il tempo base in minuti
    let baseMinutes = convertTimeToMinutes(baseTime);
    
    // Formula per adattare il tempo alla nuova temperatura
    // Per ogni grado in meno, aumenta il tempo del 7%
    // Per ogni grado in più, diminuisce il tempo del 7%
    let tempDiff = baseTemp - newTemp;
    let adjustmentFactor = 1 + (tempDiff * 0.07);
    
    let newMinutes = Math.round(baseMinutes * adjustmentFactor);
    return convertMinutesToTimeString(newMinutes);
}

function convertTimeToMinutes(timeString) {
    if (timeString.includes('ore')) {
        let hours = parseInt(timeString.split(' ore')[0]);
        return hours * 60;
    } else if (timeString.includes('ora')) {
        return 60;
    } else {
        return parseInt(timeString.split(' minuti')[0]);
    }
}

function convertMinutesToTimeString(minutes) {
    if (minutes >= 60) {
        let hours = Math.floor(minutes / 60);
        let remainingMinutes = minutes % 60;
        if (remainingMinutes === 0) {
            return `${hours} ${hours === 1 ? 'ora' : 'ore'}`;
        }
        return `${hours} ${hours === 1 ? 'ora' : 'ore'} e ${remainingMinutes} minuti`;
    }
    return `${minutes} minuti`;
}

// Modifico la funzione che mostra i risultati
function updateCookingInstructions(food, customTemp = null) {
    if (!food) return;

    // Verifica e adatta la temperatura se supera i 90°C
    const temp = parseFloat(food.temperature.split('°')[0]);
    let adjustedTemp = temp;
    let warningMessage = '';
    
    if (temp > 90) {
        adjustedTemp = 90;
        warningMessage = `
            <div class="temperature-warning">
                ⚠️ La ricetta originale richiede ${temp}°C, ma il KitchenBoss G320 ha un limite di 90°C.
                Il tempo di cottura è stato adattato per la temperatura massima di 90°C.
            </div>
        `;
    }

    // Aggiorna il titolo
    document.getElementById('foodTitle').textContent = food.name;
    
    // Aggiorna la temperatura
    if (customTemp !== null) {
        if (customTemp > 90) {
            alert('Il KitchenBoss G320 ha una temperatura massima di 90°C');
            customTemp = 90;
        }
        document.getElementById('temperature').textContent = `${customTemp}°C`;
    } else {
        document.getElementById('temperature').textContent = `${adjustedTemp}°C`;
    }

    // Mostra warning se presente
    if (warningMessage) {
        document.getElementById('temperature').insertAdjacentHTML('afterend', warningMessage);
    }

    // Aggiorna i tempi di cottura
    const cookingTimeElement = document.getElementById('cookingTime');
    if (typeof food.time === 'object') {
        let timeHtml = '';
        for (const [thickness, time] of Object.entries(food.time)) {
            if (customTemp !== null) {
                const newTime = calculateNewCookingTime(baseTemp, customTemp, time);
                timeHtml += `<div class="time-entry">• ${thickness}: ${newTime}</div>`;
            } else {
                timeHtml += `<div class="time-entry">• ${thickness}: ${time}</div>`;
            }
        }
        cookingTimeElement.innerHTML = timeHtml;
    } else {
        if (customTemp !== null) {
            cookingTimeElement.textContent = calculateNewCookingTime(baseTemp, customTemp, food.time);
        } else {
            cookingTimeElement.textContent = food.time;
        }
    }

    // Aggiorna le note
    const notesElement = document.getElementById('notes');
    if (food.notes) {
        // Converti il testo con i trattini in lista puntata
        const formattedNotes = food.notes
            .split('\n')
            .map(line => {
                if (line.trim().startsWith('-')) {
                    return `<li>${line.trim().substring(1).trim()}</li>`;
                } else if (line.trim()) {
                    return `<p>${line.trim()}</p>`;
                }
                return '';
            })
            .join('');
        notesElement.innerHTML = `<ul class="notes-list">${formattedNotes}</ul>`;
    }

    // Mostra la card dei risultati
    document.getElementById('resultCard').classList.add('visible');
}

// Modifico l'HTML per aggiungere il controllo della temperatura
function addTemperatureControl() {
    const tempControlHtml = `
        <div class="temp-control">
            <h3>Personalizza Temperatura</h3>
            <div class="temp-input">
                <input type="number" id="customTemp" min="0" max="95" step="0.1" placeholder="Temperatura °C">
                <button id="applyTemp">Applica</button>
            </div>
            <p class="temp-note">Il tuo ROY5H supporta temperature da 0°C a 95°C</p>
        </div>
    `;
    
    document.querySelector('.cooking-info').insertAdjacentHTML('afterbegin', tempControlHtml);
}

// Modifica della funzione showDeviceSpecs per includere l'immagine
function showDeviceSpecs() {
    const specsHtml = `
        <div class="device-specs">
            <div class="device-specs-container">
                
                <div class="device-info">
                    <h3>Specifiche ${deviceSpecs.name}</h3>
                    <ul>
                        <li>Capacità acqua: ${deviceSpecs.minWaterCapacity} - ${deviceSpecs.maxWaterCapacity}</li>
                        <li>Range temperatura: ${deviceSpecs.tempRange}</li>
                        <li>Dimensioni: ${deviceSpecs.dimensions}</li>
                        <li>Alimentazione: ${deviceSpecs.power}, ${deviceSpecs.voltage}</li>
                    </ul>
                    <div class="safety-warning">
                        ${safetyInstructions}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.querySelector('.container').insertAdjacentHTML('afterbegin', specsHtml);
}

// Modifico il listener principale
document.addEventListener('DOMContentLoaded', () => {
    showDeviceSpecs();
    const categorySelect = document.getElementById('foodCategory');
    const itemSelect = document.getElementById('foodItem');
    const resultCard = document.getElementById('resultCard');
    
    // Aggiungo il controllo della temperatura quando viene mostrata una ricetta
    let currentFood = null;

    categorySelect.addEventListener('change', (e) => {
        const category = e.target.value;
        itemSelect.innerHTML = '<option value="">Seleziona Prodotto</option>';
        itemSelect.disabled = !category;

        if (category) {
            Object.keys(foodData[category]).forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = foodData[category][item].name;
                itemSelect.appendChild(option);
            });
        }
    });

    itemSelect.addEventListener('change', (e) => {
        const category = categorySelect.value;
        const item = e.target.value;

        if (category && item) {
            currentFood = foodData[category][item];
            
            // Aggiungi il controllo della temperatura se non esiste già
            if (!document.querySelector('.temp-control')) {
                addTemperatureControl();
                
                // Aggiungi il listener per il controllo della temperatura
                const tempInput = document.getElementById('customTemp');
                const applyButton = document.getElementById('applyTemp');
                
                applyButton.addEventListener('click', () => {
                    const newTemp = parseFloat(tempInput.value);
                    if (newTemp >= 0 && newTemp <= 95) {
                        updateCookingInstructions(currentFood, newTemp);
                    } else {
                        alert('La temperatura deve essere compresa tra 0°C e 95°C');
                    }
                });
            }
            
            // Aggiorna le istruzioni
            updateCookingInstructions(currentFood);
        } else {
            document.getElementById('resultCard').classList.remove('visible');
        }
    });
});

// Aggiungo stili CSS per il controllo della temperatura
const style = document.createElement('style');
style.textContent = `
    .temp-control {
        background-color: #e9ecef;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 8px;
    }
    
    .temp-input {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
    }
    
    .temp-input input {
        padding: 0.5rem;
        border: 1px solid #ced4da;
        border-radius: 4px;
        width: 150px;
    }
    
    .temp-input button {
        padding: 0.5rem 1rem;
        background-color: var(--secondary-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .temp-note {
        font-size: 0.9rem;
        color: #6c757d;
    }
`;
document.head.appendChild(style); 

// Aggiungi questi stili al tuo CSS esistente
const additionalStyles = `
    .time-entry {
        margin: 0.5rem 0;
        padding-left: 1rem;
    }

    .notes-list {
        list-style: none;
        padding: 0;
    }

    .notes-list li {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
    }

    .notes-list li:before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--primary-color);
    }

    .notes-list p {
        margin: 1rem 0;
        font-weight: 500;
    }
`;

// Aggiungi i nuovi stili
document.head.appendChild(document.createElement('style')).textContent += additionalStyles; 

// Aggiungi questi stili CSS
const deviceStyles = `
    .device-specs-container {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
        padding: 1rem;
    }

    .device-image {
        flex: 0 0 200px;
        padding: 1rem;
    }

    .device-photo {
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: 10px;
    }

    .device-info {
        flex: 1;
    }

    @media (max-width: 768px) {
        .device-specs-container {
            flex-direction: column;
            align-items: center;
        }

        .device-image {
            flex: 0 0 auto;
            width: 200px;
            margin-bottom: 1rem;
        }
    }
`;

// Aggiungi i nuovi stili
document.head.appendChild(document.createElement('style')).textContent += deviceStyles; 

// Gestione navigazione mobile
document.addEventListener('DOMContentLoaded', () => {
    // Gestione navigazione
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.nav-button').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            const pageId = button.dataset.page;
            document.getElementById(pageId).classList.add('active');
        });
    });

    // Quick Actions
    document.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', () => {
            // Vai alla pagina di ricerca
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById('search').classList.add('active');
            
            // Aggiorna nav
            document.querySelectorAll('.nav-button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('[data-page="search"]').classList.add('active');

            // Seleziona categoria
            const category = button.dataset.category;
            const categorySelect = document.getElementById('foodCategory');
            categorySelect.value = category;
            categorySelect.dispatchEvent(new Event('change'));
        });
    });

    // Gestione selezione categoria e prodotto
    const categorySelect = document.getElementById('foodCategory');
    const itemSelect = document.getElementById('foodItem');
    
    categorySelect.addEventListener('change', (e) => {
        const category = e.target.value;
        itemSelect.innerHTML = '<option value="">Seleziona Prodotto</option>';
        itemSelect.disabled = !category;

        if (category && foodData[category]) {
            Object.keys(foodData[category]).forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = foodData[category][item].name;
                itemSelect.appendChild(option);
            });
        }
    });

    itemSelect.addEventListener('change', (e) => {
        const category = categorySelect.value;
        const item = e.target.value;

        if (category && item && foodData[category][item]) {
            const food = foodData[category][item];
            updateCookingInstructions(food);
            document.getElementById('resultCard').classList.add('visible');
        }
    });
});