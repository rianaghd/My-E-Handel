# My-E-Handel
# Mini E-handel – Produktlista och Varukorg

## Problem Statement
Användare vill snabbt kunna se produkter, filtrera på kategori och lägga saker i varukorgen utan att behöva kontakta butikspersonal. 
Den här lösningen sparar tid, gör köpupplevelsen smidig och strukturerad och möjliggör att användaren kan handla digitalt på ett enkelt sätt.

---

## Stakeholders
- **Admin** – Skapar och uppdaterar produkter och kategorier, ser ordrar.  
- **User** – Kan se produkter, filtrera, lägga i varukorg och checka ut.  
- **Guest** – Kan bara se produkter, måste registrera sig för att kunna handla.  

---

## Kravlista

### Funktionella krav
1. Visa lista av produkter med namn, pris och kategori  
2. Filtrera produkter på kategori  
3. Lägga produkter i varukorg  
4. Se varukorg och totalpris  
5. Ta bort produkt från varukorg  
6. Checkout / summering av valda produkter  

### Icke-funktionella krav
1. UI ska vara responsivt och användarvänligt  
2. Laddning av sidan < 2 sekunder  
3. Semantisk HTML och tillgänglighet (accessibility)  

---

## Prioritering (MoSCoW)
- **Must** – Se produkter, lägga i varukorg, filtrera  
- **Should** – Checkout / totalpris  
- **Could** – Mini animationer, hover-effekter  
- **Won’t** – Betalningsgateway (för prototyp)  

---

## Use Case – Lägg produkt i varukorg

- **Actor:** User  
- **Preconditions:** Produkten visas i listan, användaren har sidan öppen  

**Main Flow:**
1. User ser lista med produkter  
2. Klickar på ikon "lägg i varukorg"  
3. Produkten läggs i varukorg  
4. Varukorg uppdateras och totalpris visas  

**Alternate Flow:**
- Om produkten redan finns i varukorg → öka antal i varukorg  

**Postconditions:**  
- Varukorg är uppdaterad med vald produkt  

---

## Change Notes
1. Lagt till live filter på produktlistan → för att användare snabbt ska hitta produkter  
2. Lade till mini JS-animation på "lägg i varukorg"-knapp → för feedback att produkten lades till  