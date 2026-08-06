# Fractured Peace Archive

A zero-dependency local wiki prototype built from the AltWWII setting bible and timeline.

## Run locally

From this folder:

```powershell
npm start
```

Then open `http://127.0.0.1:8765/wiki/`.

The pages also work when opened directly from disk. The local server is recommended so the large 1972 map loads consistently in every browser.

## Included pages

- Main Page
- The World Order
- Setting Timeline
- Greater German Reich
- British Commonwealth
- Empire of Japan
- United States
- Latin Bloc
- Kingdom of Italy
- National Government of China
- Philippine Republic
- Eastern Reichskommissariats
- Reichskommissariat Mittelafrika
- Russian and Siberian Successor States
- Wolfgang Friedrich Hitler
- Second World War
- Technology Portal
- Computing: Machines, Languages, and Platforms
- List of Countries
- Political Parties in the United States
- American Presidential Elections, 1968–1984
- List of Presidents of the United States
- Philippine War
- Iceland Crisis and Atlantic Accord
- Kuwait War and Operation Covenant
- Falklands–Malvinas War
- War of the Chiefs
- Tehran Concord
- The Space Race, 1957–1985
- Orbitaler Raumhafen and Hōrai
- Political Ideologies and Parties
- Major-Character Index
- Everyday Life by Bloc
- Military Technology Portal
- India and the Indian Successor States
- Middle East and the Arab Ideological Triangle
- British Africa and the Cape System
- Spanish State
- Occitania
- Northern France
- Catholic Church and the Council of Christ the King
- Portugal and the Lusophone Empire
- The Four Frances
- Chōsen
- Korean Language in Chōsen
- Manchukuo
- Computing and Global Networks
- SS Order Faith
- Commonwealth Dominions
- Political Economy by Bloc
- Propaganda, Intelligence, and Cultural Infiltration
- Nuclear Power and the Energy Order
- Formula One and Group 7
- Consumer Computing and Platform Society
- Palestine War and the Amman Settlement
- Iraqi Civil War and the National Resurrection Regime
- Ghana, the Accra Disaster, and Ordered Particularism
- German Leadership after Hitler
- Katharina Hitler
- Friedrich Hagedorn
- Johannes Rabe
- Matthias Falkenberg
- Elias Mercer
- Martin Keene
- David Ashcombe

### Expanded national archive

- Einheitspakt: Reichsprotektorat Belgien, Brittany, Reichsprotektorat Norwegen, Reichsprotektorat Dänemark, Sweden, Finland, Hungary, Romania, and Argentina
- GEACPS / Dai Tōa Kyōeiken: Thailand, Burma, Vietnam, Cambodia, Laos, the Indochinese regional portal, the East Indies Administration, the Vladivostok Protectorate, the Eastern Siberian Republic, and the Republic of Chukotka
- Latin Bloc: Greece, Albania, Montenegro, and the Associated Kingdom of Syria
- British Commonwealth: Canada, Australia, New Zealand, South Africa, Rhodesia, and Jordan
- Independent frontiers: Iran, Afghanistan, and Kazakhstan
- American Hemisphere national profiles: Mexico, Brazil, Chile, Peru, Venezuela, Colombia, Cuba, and Honduras
- American Hemisphere: complete country-by-country 1985 alignment chart

`app.js` provides local search, theme switching, random-page navigation, mobile navigation, first-mention cross-linking, link copying, and print support. The first prose mention of a major country, system, event, or person is automatically linked to its article without producing repeated links throughout the page.

Article source boxes link back to the exact local Markdown references used for the summary. No package installation or build step is required.
