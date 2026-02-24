# Mini E-handel – Produkter, Kategorier och Varukorg

## Problem Statement
Många användare vill kunna handla produkter online utan att behöva kontakta butikspersonal eller leta manuellt efter information.  
Den här mini e-handelslösningen gör det möjligt att se produkter, filtrera på kategori, lägga till produkter i varukorgen och få en snabb överblick över totalpris.  
Lösningen förbättrar användarupplevelsen, sparar tid och möjliggör en strukturerad digital shoppingupplevelse.

---

## Stakeholders
- **Admin:** Skapar och uppdaterar produkter och kategorier, ser ordrar.  
- **User:** Kan se produkter, filtrera, lägga i varukorg och checka ut.  
- **Guest:** Kan endast se produkter, måste registrera sig för att handla.  

---

## Kravlista

### Funktionella krav
1. Visa lista av produkter med namn, pris och kategori.  
2. Filtrera produkter på kategori.  
3. Lägga produkter i varukorg.  
4. Ta bort produkt från varukorg.  
5. Se varukorg och totalpris.  
6. Checkout / summering av valda produkter.  
7. Uppdatera antal produkter om samma produkt läggs till igen.  
8. Navigera mellan produktlista och varukorgssida.

### Icke-funktionella krav
1. UI ska vara responsivt och användarvänligt.  
2. Snabb laddning av sidan (<2 sekunder).  
3. Semantisk HTML och tillgänglighet (accessibility).  

---

## Prioritering (MoSCoW)
- **Must:** Visa produkter, lägga i varukorg, filtrera, se varukorg och totalpris.  
- **Should:** Checkout / summering av valda produkter.  
- **Could:** Animation på "lägg i varukorg", hover-effekter.  
- **Won’t:** Full betalningslösning (för prototyp).  

---

## Use Case – Lägg produkt i varukorg

- **Actor:** User  
- **Preconditions:** Produkten visas i listan, användaren har sidan öppen.  

**Main Flow:**
1. User ser lista med produkter.  
2. Klickar på ikon "lägg i varukorg".  
3. Produkten läggs i varukorg.  
4. Varukorg uppdateras och totalpris visas.  

**Alternate Flow:**
- Om produkten redan finns i varukorg → antal uppdateras i varukorg.  

**Postconditions:**  
- Varukorg är uppdaterad med vald produkt, totalpris korrekt.  
- Användaren får visuell feedback att produkten lades till.  

---

## UML och Aktivitetsdiagram
- **Klassdiagram:** Visar relationer mellan `User`, `Cart`, `Product` och `Category`.  
  - `User` har en `Cart` (aggregation).  
  - `Cart` innehåller flera `Product` (composition).  
  - `Product` tillhör en `Category` (aggregation).  
- **Aktivitetsdiagram:** Flöde för “lägg produkt i varukorg”:  
  - Start → Visa produktlista → Klicka “lägg i varukorg?” → Beslut: redan i cart? → Uppdatera antal eller lägg till ny → Uppdatera totalpris → Visa bekräftelse → Slut.  

Diagrammen finns i `docs/class-diagram.png` och `docs/activity-diagram.png`.

---

## Change Notes
1. Lade till live filter på produktlistan → för att användare snabbt ska hitta produkter.  
2. Lade till micro-interaction på “lägg i varukorg”-knapp → för att ge visuell feedback och bättre UX.  

---