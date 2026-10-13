const LOCATIONS={"Agra": ["Agra", "Etmadpur", "Fatehabad", "Kheragarh", "Kiraoli"], "Aligarh": ["Aligarh", "Atrauli", "Gabhana", "Iglas", "Koil"], "Amroha": ["Amroha", "Dhanaura", "Hasanpur", "Naugawan Sadat"], "Ayodhya": ["Ayodhya", "Bikapur", "Milkipur", "Rudauli", "Sohawal"], "Azamgarh": ["Azamgarh", "Burhanpur", "Lalganj", "Martinganj", "Mehnagar", "Phulpur", "Sagri"], "Badaun": ["Badaun", "Bilsi", "Bisoli", "Dataganj", "Sahaswan"], "Baghpat": ["Baghpat", "Baraut", "Khekra"], "Bahraich": ["Bahraich", "Kaiserganj", "Mahasi", "Mihipurwa", "Nanpara", "Payagpur"], "Ballia": ["Ballia", "Bairia", "Belthara Road", "Rasra"], "Bareilly": ["Bareilly", "Aonla", "Baheri", "Faridpur", "Meerganj", "Nawabganj"], "Basti": ["Basti", "Harraiya", "Rudhauli"], "Bulandshahr": ["Bulandshahr", "Anupshahr", "Debai", "Khurja", "Sikandrabad"], "Chitrakoot": ["Karwi", "Mau"], "Etah": ["Aliganj", "Etah", "Jalesar"], "Etawah": ["Bharthana", "Etawah", "Jaswantnagar", "Saifai"], "Farrukhabad": ["Amritpur", "Farrukhabad", "Kaimganj"], "Fatehpur": ["Bindki", "Fatehpur", "Khaga"], "Firozabad": ["Firozabad", "Jasrana", "Shikohabad", "Tundla"], "Gautam Buddha Nagar": ["Dadri", "Jewar"], "Ghaziabad": ["Ghaziabad", "Loni", "Modinagar"], "Ghazipur": ["Ghazipur", "Jakhania", "Kasimabad", "Manihari", "Mohammadabad", "Saidpur", "Zamania"], "Gonda": ["Colonelganj", "Gonda", "Mankapur", "Tarabganj"], "Gorakhpur": ["Bansgaon", "Chauri Chaura", "Gorakhpur", "Khajni", "Sahjanwa"], "Hamirpur": ["Hamirpur", "Maudaha", "Rath", "Sarila"], "Hapur": ["Dhaulana", "Garhmukteshwar", "Hapur"], "Hardoi": ["Bilgram", "Hardoi", "Sandila", "Shahabad", "Sawayajpur"], "Hathras": ["Hathras", "Sadabad", "Sasni", "Sikandra Rao"], "Jalaun": ["Jalaun", "Kalpi", "Konch", "Madhogarh", "Orai"], "Jaunpur": ["Badlapur", "Jaunpur", "Kerakat", "Machhlishahr", "Mariahu", "Shahganj"], "Jhansi": ["Garautha", "Jhansi", "Moth"], "Kannauj": ["Chhibramau", "Kannauj", "Tirwa"], "Kanpur Dehat": ["Akbarpur", "Bhognipur", "Derapur", "Rasulabad", "Sikandra"], "Kanpur Nagar": ["Bilhaur", "Kanpur", "Narwal"], "Kaushambi": ["Chail", "Manjhanpur", "Sirathu"], "Kushinagar": ["Hata", "Kasya", "Padrauna", "Tamkuhi"], "Lakhimpur Kheri": ["Dhaurehra", "Gola Gokaran Nath", "Lakhimpur", "Mohammadi", "Nighasan", "Palia"], "Lucknow": ["Bakshi Ka Talab", "Malihabad", "Mohan", "Mohanlalganj", "Lucknow", "Sarojini Nagar"], "Maharajganj": ["Farenda", "Maharajganj", "Nautanwa", "Nichlaul"], "Mainpuri": ["Bhongaon", "Karhal", "Mainpuri"], "Mathura": ["Chhata", "Govardhan", "Mathura", "Mant"], "Meerut": ["Meerut", "Mawana", "Sardhana"], "Mirzapur": ["Chunar", "Lalganj", "Marihan", "Mirzapur", "Sadar"], "Moradabad": ["Bilari", "Kanth", "Moradabad", "Thakurdwara"], "Muzaffarnagar": ["Budhana", "Jansath", "Khatauli", "Muzaffarnagar"], "Prayagraj": ["Bara", "Handia", "Karchhana", "Koraon", "Meja", "Phulpur", "Sadar"], "Raebareli": ["Dalmau", "Lalganj", "Maharajganj", "Rae Bareli", "Salon", "Unchahar"], "Rampur": ["Bilaspur", "Milak", "Rampur", "Shahabad", "Swar"], "Saharanpur": ["Behat", "Deoband", "Nakur", "Rampur Maniharan", "Saharanpur"], "Sambhal": ["Chandausi", "Gunnaur", "Sambhal"], "Shahjahanpur": ["Jalalabad", "Powayan", "Shahjahanpur", "Tilhar"], "Shamli": ["Kairana", "Shamli", "Un"], "Shravasti": ["Bhinga", "Ikauna", "Jamunaha"], "Siddharthnagar": ["Bansi", "Domariyaganj", "Itwa", "Naugarh", "Shohratgarh"], "Sitapur": ["Biswan", "Laharpur", "Mahmoodabad", "Misrikh", "Sidhauli", "Sitapur"], "Sonbhadra": ["Dudhi", "Ghorawal", "Obra", "Robertsganj"], "Sultanpur": ["Kadipur", "Lambhua", "Sadar", "Jaisinghpur"], "Unnao": ["Bangarmau", "Hasanganj", "Purwa", "Safipur", "Unnao"], "Varanasi": ["Pindra", "Raja Talab", "Varanasi"]};

const district=document.getElementById("district");
const tehsil=document.getElementById("tehsil");
const village=document.getElementById("village");
const gata=document.getElementById("gata");
const message=document.getElementById("message");
const result=document.getElementById("result");
const summary=document.getElementById("summary");

function setOptions(select, items, placeholder){
  select.innerHTML="";
  const first=document.createElement("option");
  first.value=""; first.textContent=placeholder; select.appendChild(first);
  items.forEach(item=>{
    const opt=document.createElement("option");
    opt.value=item; opt.textContent=item; select.appendChild(opt);
  });
  select.disabled=false;
}

setOptions(district,Object.keys(LOCATIONS),"Select District");

district.addEventListener("change",()=>{
  village.innerHTML='<option value="">Select Village</option>';
  village.disabled=true;
  setOptions(tehsil, district.value ? LOCATIONS[district.value] : [], "Select Tehsil");
  if(!district.value) tehsil.disabled=true;
});

tehsil.addEventListener("change",()=>{
  // Village lists are intentionally loaded from the production administrative
  // dataset/API when connected. For now the selected tehsil is offered as a
  // working village placeholder so the cascade never breaks.
  const villageNames = tehsil.value ? [tehsil.value] : [];
  setOptions(village,villageNames,"Select Village");
  if(!tehsil.value) village.disabled=true;
});

document.getElementById("search").addEventListener("click",()=>{
  message.textContent="";
  message.className="";
  if(!district.value||!tehsil.value||!village.value||!gata.value.trim()){
    message.textContent="Please select District, Tehsil, Village and enter Gata / Plot No.";
    message.className="error";
    return;
  }
  summary.className="summary";
  summary.innerHTML=[
    ["District",district.value],
    ["Tehsil",tehsil.value],
    ["Village",village.value],
    ["Gata / Plot",gata.value.trim()]
  ].map(x=>`<span><b>${x[0]}</b> ${x[1]}</span>`).join("");
  result.classList.remove("hidden");
  result.scrollIntoView({behavior:"smooth",block:"start"});
});
