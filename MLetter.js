// <author>Carsten Alexander</author>
// <project>Sankrit</project>
// <version>1.0 (2021-02-10)</version>
// <license>public domain</license>
// <mailto>sanskrit ~At~ acamat ~Dot~ de</mailto>
// ---
// ------- //
// MLetter //
// ------- //
// MLetter()
/// <summary>
/// Richtet eine neue Instanz der MLetter-Klasse ein.
/// </summary>
var MLetter = new Array(
	// ----- //
	// Daten //
	// ----- //
	// ----------- //
	// Metazeichen //
	// ----------- //
	new CLetter(ELetter.None       ,null              ,true ,null,'[null]'     ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Class      ,ELetter.None      ,true ,null,'Class'      ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Letter     ,ELetter.Class     ,true ,null,'Letter'     ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Sign       ,ELetter.Class     ,true ,null,'Sign'       ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Digit      ,ELetter.Class     ,true ,null,'Digit'      ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Special    ,ELetter.Class     ,true ,null,'Special'    ,null,null      ,null      ,null     ),
	new CLetter(ELetter.VowelShort ,ELetter.Letter    ,true ,null,'VowelShort' ,null,null      ,null      ,null     ),
	new CLetter(ELetter.VowelLong  ,ELetter.Letter    ,true ,null,'VowelLong'  ,null,null      ,null      ,null     ),
	new CLetter(ELetter.VowelBi    ,ELetter.Letter    ,true ,null,'VowelBi'    ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Velar      ,ELetter.Letter    ,true ,null,'Velar'      ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Palatal    ,ELetter.Letter    ,true ,null,'Palatal'    ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Retroflex  ,ELetter.Letter    ,true ,null,'Retroflex'  ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Dental     ,ELetter.Letter    ,true ,null,'Dental'     ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Labial     ,ELetter.Letter    ,true ,null,'Labial'     ,null,null      ,null      ,null     ),
	new CLetter(ELetter.VowelSemi  ,ELetter.Letter    ,true ,null,'VowelSemi'  ,null,null      ,null      ,null     ),
	new CLetter(ELetter.Fricative  ,ELetter.Letter    ,true ,null,'Fricative'  ,null,null      ,null      ,null     ),
	// ---------- //
	// Buchstaben //
	// ---------- //
	// Kurzvokale
	new CLetter(ELetter.A          ,ELetter.VowelShort,false,   2,'A'          ,'a' ,''        ,'a'       ,'&#2309;'),
	new CLetter(ELetter.I          ,ELetter.VowelShort,false,   4,'I'          ,'i' ,'&#2367;' ,'i'       ,'&#2311;'),
	new CLetter(ELetter.U          ,ELetter.VowelShort,false,   6,'U'          ,'u' ,'&#2369;' ,'u'       ,'&#2313;'),
	new CLetter(ELetter.R          ,ELetter.VowelShort,false,   8,'R'          ,'Rî','&#2371;' ,'&#7771;' ,'&#2315;'),
	new CLetter(ELetter.L          ,ELetter.VowelShort,false,  10,'L'          ,'Lî','&#2402;' ,'&#7735;' ,'&#2316;'),
	// Langvokale
	new CLetter(ELetter.Aa         ,ELetter.VowelLong ,false,   3,'Aa'         ,'A' ,'&#2366;' ,'&#0257;' ,'&#2310;'),
	new CLetter(ELetter.Ii         ,ELetter.VowelLong ,false,   5,'Ii'         ,'I' ,'&#2368;' ,'&#0299;' ,'&#2312;'),
	new CLetter(ELetter.Uu         ,ELetter.VowelLong ,false,   7,'Uu'         ,'U' ,'&#2370;' ,'&#0363;' ,'&#2314;'),
	new CLetter(ELetter.Rr         ,ELetter.VowelLong ,false,   9,'Rr'         ,'RÎ','&#2372;' ,'&#7773;' ,'&#2400;'),
	new CLetter(ELetter.Ll         ,ELetter.VowelLong ,false,  11,'Ll'         ,'LÎ','&#2402;' ,'&#7737;' ,'&#2401;'),
	// Diphtonge
	new CLetter(ELetter.E          ,ELetter.VowelBi   ,false,  12,'E'          ,'e' ,'&#2375;' ,'e'       ,'&#2319;'),
	new CLetter(ELetter.Ai         ,ELetter.VowelBi   ,false,  13,'Ai'         ,'ai','&#2376;' ,'ai'      ,'&#2320;'),
	new CLetter(ELetter.O          ,ELetter.VowelBi   ,false,  14,'O'          ,'o' ,'&#2379;' ,'o'       ,'&#2323;'),
	new CLetter(ELetter.Au         ,ELetter.VowelBi   ,false,  15,'Au'         ,'au','&#2380;' ,'au'      ,'&#2324;'),
	null, // Schriftzeichen 30 
	// Velare
	new CLetter(ELetter.Ka         ,ELetter.Velar     ,false,  18,'Ka'         ,'k' ,'&#2325;' ,'k'       ,null     ),
	new CLetter(ELetter.Kha        ,ELetter.Velar     ,false,  19,'Kha'        ,'kh','&#2326;' ,'kh'      ,null     ),
	new CLetter(ELetter.Ga         ,ELetter.Velar     ,false,  20,'Ga'         ,'g' ,'&#2327;' ,'g'       ,null     ),
	new CLetter(ELetter.Gha        ,ELetter.Velar     ,false,  21,'Gha'        ,'gh','&#2328;' ,'gh'      ,null     ),
	new CLetter(ELetter.Nga        ,ELetter.Velar     ,false,  22,'Nga'        ,'Ñ' ,'&#2329;' ,'&#7749;' ,null     ),
	// Palatale
	new CLetter(ELetter.Ca         ,ELetter.Palatal   ,false,  23,'Ca'         ,'ch','&#2330;' ,'c'       ,null     ),
	new CLetter(ELetter.Cha        ,ELetter.Palatal   ,false,  24,'Cha'        ,'Ch','&#2331;' ,'ch'      ,null     ),
	new CLetter(ELetter.Ja         ,ELetter.Palatal   ,false,  25,'Ja'         ,'j' ,'&#2332;' ,'j'       ,null     ),
	new CLetter(ELetter.Jha        ,ELetter.Palatal   ,false,  26,'Jha'        ,'jh','&#2333;' ,'jh'      ,null     ),
	new CLetter(ELetter.Nya        ,ELetter.Palatal   ,false,  27,'Nya'        ,'ñ' ,'&#2334;' ,'&#0241;' ,null     ),
	// Retroflexe
	new CLetter(ELetter.Tta        ,ELetter.Retroflex ,false,  28,'Tta'        ,'T' ,'&#2335;' ,'&#7789;' ,null     ),
	new CLetter(ELetter.Ttha       ,ELetter.Retroflex ,false,  29,'Ttha'       ,'Th','&#2336;' ,'&#7789;h',null     ),
	new CLetter(ELetter.Dda        ,ELetter.Retroflex ,false,  30,'Dda'        ,'D' ,'&#2337;' ,'&#7693;' ,null     ),
	new CLetter(ELetter.Ddha       ,ELetter.Retroflex ,false,  31,'Ddha'       ,'Dh','&#2338;' ,'&#7693;h',null     ),
	new CLetter(ELetter.Nna        ,ELetter.Retroflex ,false,  32,'Nna'        ,'N' ,'&#2339;' ,'&#7751;' ,null     ),
	// Dentale
	new CLetter(ELetter.Ta         ,ELetter.Dental    ,false,  33,'Ta'         ,'t' ,'&#2340;' ,'t'       ,null     ),
	new CLetter(ELetter.Tha        ,ELetter.Dental    ,false,  34,'Tha'        ,'th','&#2341;' ,'th'      ,null     ),
	new CLetter(ELetter.Da         ,ELetter.Dental    ,false,  35,'Da'         ,'d' ,'&#2342;' ,'d'       ,null     ),
	new CLetter(ELetter.Dha        ,ELetter.Dental    ,false,  36,'Dha'        ,'dh','&#2343;' ,'dh'      ,null     ),
	new CLetter(ELetter.Na         ,ELetter.Dental    ,false,  37,'Na'         ,'n' ,'&#2344;' ,'n'       ,null     ),
	// Labiale
	new CLetter(ELetter.Pa         ,ELetter.Labial    ,false,  38,'Pa'         ,'p' ,'&#2346;' ,'p'       ,null     ),
	new CLetter(ELetter.Pha        ,ELetter.Labial    ,false,  39,'Pha'        ,'ph','&#2347;' ,'ph'      ,null     ),
	new CLetter(ELetter.Ba         ,ELetter.Labial    ,false,  40,'Ba'         ,'b' ,'&#2348;' ,'b'       ,null     ),
	new CLetter(ELetter.Bha        ,ELetter.Labial    ,false,  41,'Bha'        ,'bh','&#2349;' ,'bh'      ,null     ),
	new CLetter(ELetter.Ma         ,ELetter.Labial    ,false,  42,'Ma'         ,'m' ,'&#2350;' ,'m'       ,null     ),
	// Halbvokale
	new CLetter(ELetter.Ya         ,ELetter.VowelSemi ,false,  43,'Ya'         ,'y' ,'&#2351;' ,'y'       ,null     ),
	new CLetter(ELetter.Ra         ,ELetter.VowelSemi ,false,  44,'Ra'         ,'r' ,'&#2352;' ,'r'       ,null     ),
	new CLetter(ELetter.La         ,ELetter.VowelSemi ,false,  45,'La'         ,'l' ,'&#2354;' ,'l'       ,null     ),
	new CLetter(ELetter.Va         ,ELetter.VowelSemi ,false,  46,'Va'         ,'v' ,'&#2357;' ,'v'       ,null     ),
	null, // Schriftzeichen 60
	// Frikative
	new CLetter(ELetter.Sha        ,ELetter.Fricative ,false,  47,'Sha'        ,'sh','&#2358;' ,'&#0347;' ,null     ),
	new CLetter(ELetter.Ssa        ,ELetter.Fricative ,false,  48,'Ssa'        ,'Sh','&#2359;' ,'&#7779;' ,null     ),
	new CLetter(ELetter.Sa         ,ELetter.Fricative ,false,  49,'Sa'         ,'s' ,'&#2360;' ,'s'       ,null     ),
	null, // Schriftzeichen 64
	new CLetter(ELetter.Ha         ,ELetter.Fricative ,false,  50,'Ha'         ,'h' ,'&#2361;' ,'h'       ,null     ),
	// ---------------- //
	// Funktionszeichen //
	// ---------------- //
	new CLetter(ELetter.Virama     ,ELetter.Sign      ,false,null,'Virama'     ,' ' ,'&#2381;' ,''        ,null     ),
	new CLetter(ELetter.Hiatus     ,ELetter.Sign      ,false,   0,'Hiatus'     ,' ' ,' '       ,' '       ,null     ),
	new CLetter(ELetter.Avagraha   ,ELetter.Sign      ,false,   1,'Avagraha'   ,'.a','&#2365;' ,'\''      ,null     ),
	new CLetter(ELetter.Anusvara   ,ELetter.Sign      ,false,  16,'Anusvara'   ,'M' ,'&#2306;' ,'&#7747;' ,null     ),
	new CLetter(ELetter.Visarga    ,ELetter.Sign      ,false,  17,'Visarga'    ,'H' ,'&#2307;' ,'&#7717;' ,null     ),
	new CLetter(ELetter.Anunasika  ,ELetter.Sign      ,false,  51,'Anunasika'  ,'.N','&#2305;' ,'&#61761;',null     ),
	// ------- //
	// Ziffern //
	// ------- //
	new CLetter(ELetter.Digit0     ,ELetter.Digit     ,false,null,'Digit0'     ,'0' ,'&#2406;' ,'0'       ,null     ),
	new CLetter(ELetter.Digit1     ,ELetter.Digit     ,false,null,'Digit1'     ,'1' ,'&#2407;' ,'1'       ,null     ),
	new CLetter(ELetter.Digit2     ,ELetter.Digit     ,false,null,'Digit2'     ,'2' ,'&#2408;' ,'2'       ,null     ),
	new CLetter(ELetter.Digit3     ,ELetter.Digit     ,false,null,'Digit3'     ,'3' ,'&#2409;' ,'3'       ,null     ),
	new CLetter(ELetter.Digit4     ,ELetter.Digit     ,false,null,'Digit4'     ,'4' ,'&#2410;' ,'4'       ,null     ),
	new CLetter(ELetter.Digit5     ,ELetter.Digit     ,false,null,'Digit5'     ,'5' ,'&#2411;' ,'5'       ,null     ),
	new CLetter(ELetter.Digit6     ,ELetter.Digit     ,false,null,'Digit6'     ,'6' ,'&#2412;' ,'6'       ,null     ),
	new CLetter(ELetter.Digit7     ,ELetter.Digit     ,false,null,'Digit7'     ,'7' ,'&#2413;' ,'7'       ,null     ),
	new CLetter(ELetter.Digit8     ,ELetter.Digit     ,false,null,'Digit8'     ,'8' ,'&#2414;' ,'8'       ,null     ),
	new CLetter(ELetter.Digit9     ,ELetter.Digit     ,false,null,'Digit9'     ,'9' ,'&#2415;' ,'9'       ,null     ),
	// ------------- //
	// Sonderzeichen //
	// ------------- //
	new CLetter(ELetter.Om         ,ELetter.Special   ,false,null,'Om'         ,'OM','&#2384;' ,'om'      ,null     ),
	new CLetter(ELetter.Danda      ,ELetter.Special   ,false,null,'Danda'      ,'.' ,'&#2404;' ,'.'       ,null     ),
	new CLetter(ELetter.DoubleDanda,ELetter.Special   ,false,null,'DoubleDanda','..','&#2405;' ,'..'      ,null     ),
	new CLetter(ELetter.Hyphen     ,ELetter.Special   ,false,null,'Hyphen'     ,'-' ,''        ,'&#8208;' ,null     ),
	new CLetter(ELetter.MiddleDot  ,ELetter.Special   ,false,null,'MiddleDot'  ,'·' ,''        ,'&#0183;' ,null     ),
	new CLetter(ELetter.ShortE     ,ELetter.Special   ,false,null,'Short E'    ,'E' ,'&#2374;' ,'&#0277;' ,'&#2318;'),
	new CLetter(ELetter.ShortO     ,ELetter.Special   ,false,null,'Short O'    ,'O' ,'&#2378;' ,'&#0335;' ,'&#2322;')
)
{
	// -------- //
	// Methoden //
	// -------- //
	// MLetter.AreRelatedVowels(CLetter, CLetter)
	/// <summary>
	/// Liefert TRUE, falls die Schriftzeichenpaarung verwandte Vokale enthält.
	/// </summary>
	/// <param name="itemA">Schriftzeichen A.</param>
	/// <param name="itemB">Schriftzeichen B.</param>
	/// <returns>TRUE, falls die Schriftzeichenpaarung verwandte Vokale enthält.</returns>
	MLetter.AreRelatedVowels = function(itemA, itemB)
	{
		// Vokale sicherstellen
		if(this.IsVowel(itemA) == false) return false;
		if(this.IsVowel(itemB) == false) return false;

		// Verwandte Vokale verarbeiten
		if(this.IsVowelA(itemA)     == true && this.IsVowelA(itemB)     == true) return true;
		if(this.IsVowelI(itemA)     == true && this.IsVowelI(itemB)     == true) return true;
		if(this.IsVowelU(itemA)     == true && this.IsVowelU(itemB)     == true) return true;
		if(this.IsVowelR(itemA)     == true && this.IsVowelR(itemB)     == true) return true;
		if(this.IsVowelL(itemA)     == true && this.IsVowelL(itemB)     == true) return true;
		if(this.IsVowelEOrAi(itemA) == true && this.IsVowelEOrAi(itemB) == true) return true;
		if(this.IsVowelOOrAu(itemA) == true && this.IsVowelOOrAu(itemB) == true) return true;
		return false;
	}

	// MLetter.FromCode(string)
	/// <summary>
	/// Parsiert die Kodierung und liefert die resultierende Sammlung der Schriftzeichen.
	/// </summary>
	/// <param name="value">Kodierung.</param>
	/// <returns>Resultierende Sammlung der Schriftzeichen.</returns>
	MLetter.FromCode = function(value)
	{
		// Lokale Felder einrichten
		var cnt = value.length;
		var hdr = new CIndex(0);

		// Sammlung mit Instant-Implemenation einrichten
		var rtn = new Array()
		{
			// .ToHtm()
			/// <summary>
			/// Liefert den Htm-Quelltext zur Sammlung der Schriftzeichen.
			/// </summary>
			/// <returns>Htm-Quelltext zur Sammlung der Schriftzeichen.</returns>
			rtn.ToHtm = function()
			{
				// Lokale Felder einrichten
				var itm = null;
				var lst = null;
				var rtn = "";

				// Sammlung der Elemente durchlaufen
				for(i = 0; i < this.length; i++)
				{
					// Element holen
					itm = this[i];

					// Vokale verarbeiten
					if(MLetter.IsVowel(itm) == true)
						if(lst == null || lst.Identity == ELetter.Hiatus)
						{
							// Vokalzeichen anfügen
							rtn += itm.HtmMatra;
							lst  = itm;
							continue;
						}

					// Zeichen anfügen und nächsten Durchlauf einrichten
					rtn += itm.Htm;
					lst  = itm;
				}
				return rtn;
			}

			// .ToHtmIast()
			/// <summary>
			/// Liefert den Htm-Quelltext zur Sammlung der Schriftzeichen.
			/// </summary>
			/// <returns>Htm-Quelltext zur Sammlung der Schriftzeichen.</returns>
			rtn.ToHtmIast = function()
			{
				// Sammlung der ELemente durchlaufen und Htm-Quelltext anfügen
				var rtn = "";
				for(i = 0; i < this.length; i++)
					rtn += this[i].HtmIast;
				return rtn;
			}
		};

		// Parsierung
		while(true)
		{
			// Analyseschritt durchführen und Analyseende verarbeiten
			m_AppendLetter(value, hdr, rtn);
			if(hdr.Value >= cnt) break;
		}
		return rtn;
	}

	// MLetter.IsAllowedFinal(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen einem zulässigen Auslaut entspricht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das elementare Schriftzeichen einem zulässigen Auslaut entspricht.</returns>
	MLetter.IsAllowedFinal = function(item)
	{
		// Vokale verarbeiten
		if(this.IsVowel(item) == true) return true;

		// Zulässige Konsonanten verarbeiten
		if(item.Identity == ELetter.Ka)      return true;
		if(item.Identity == ELetter.Nga)     return true;
		if(item.Identity == ELetter.Tta)     return true;
		if(item.Identity == ELetter.Ta)      return true;
		if(item.Identity == ELetter.Na)      return true;
		if(item.Identity == ELetter.Pa)      return true;
		if(item.Identity == ELetter.Ma)      return true;
		if(item.Identriy == ELetter.Visarga) return true;
		return false;
	}

	// MLetter.IsAspirata(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen aspirierten Laut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen aspirierten Laut steht.</returns>
	MLetter.IsAspirata = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.Kha)  return true;
		if(item.Identity == ELetter.Gha)  return true;
		if(item.Identity == ELetter.Cha)  return true;
		if(item.Identity == ELetter.Jha)  return true;
		if(item.Identity == ELetter.Ttha) return true;
		if(item.Identity == ELetter.Ddha) return true;
		if(item.Identity == ELetter.Tha)  return true;
		if(item.Identity == ELetter.Dha)  return true;
		if(item.Identity == ELetter.Pha)  return true;
		if(item.Identity == ELetter.Bha)  return true;
		return false;
	}

	// MLetter.IsClass(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen dem Elementtyp Klasse angehört.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen dem Elementtyp Klasse angehört.</returns>
	MLetter.IsClass = function(item){return item.IdentityParent == ELetter.Class ? true : false;}

	// MLetter.IsDental(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Dentallaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Dentallaut steht.</returns>
	MLetter.IsDental = function(item){return item.IdentityParent == ELetter.Dental ? true : false;}

	// MLetter.IsDigit(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen der Klasse Ziffern angehört.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen der Klasse Ziffern angehört.</returns>
	MLetter.IsDigit = function(item){return item.IdentityParent == ELetter.Digit ? true : false;}

	// MLetter.IsSpecial(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen der Klasse Sonderzeichen angehört.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen der Klasse Sonderzeichen angehört.</returns>
	MLetter.IsSpecial = function(item){return item.IdentityParent == ELetter.Special ? true : false;}

	// MLetter.IsFricative(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Frikativlaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Frikativlaut steht.</returns>
	MLetter.IsFricative = function(item){return item.IdentityParent == ELetter.Fricative ? true : false;}

	// MLetter.IsGlottal(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Glottallaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Glottallaut steht.</returns>
	MLetter.IsGlottal = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.Ha)      return true;
		if(item.Identity == ELetter.Visarga) return true;
		return false;
	}

	// MLetter.IsLabial(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Labiallaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Labiallaut steht.</returns>
	MLetter.IsLabial = function(item){return item.IdentityParent == ELetter.Labial ? true : false;}

	// MLetter.IsLetter(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen der Klasse Buchstaben angehört.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen der Klasse Buchstaben angehört.</returns>
	MLetter.IsLetter = function(item){return item.IdentityParent == ELetter.Letter ? true : false;}

	// MLetter.IsMedia(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Medialaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Medialaut steht.</returns>
	MLetter.IsMedia = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.Ga)   return true;
		if(item.Identity == ELetter.Gha)  return true;
		if(item.Identity == ELetter.Ja)   return true;
		if(item.Identity == ELetter.Jha)  return true;
		if(item.Identity == ELetter.Dda)  return true;
		if(item.Identity == ELetter.Ddha) return true;
		if(item.Identity == ELetter.Da)   return true;
		if(item.Identity == ELetter.Dha)  return true;
		if(item.Identity == ELetter.Ba)   return true;
		if(item.Identity == ELetter.Bha)  return true;
		return false;
	}

	// MLetter.IsNasal(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Nasallaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Nasallaut steht.</returns>
	MLetter.IsNasal = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.Nga)      return true;
		if(item.Identity == ELetter.Nya)      return true;
		if(item.Identity == ELetter.Nna)      return true;
		if(item.Identity == ELetter.Na)       return true;
		if(item.Identity == ELetter.Ma)       return true;
		if(item.Identity == ELetter.Visarga)  return true;
		if(item.Identity == ELetter.Anusvara) return true;
		return false;
	}

	// MLetter.IsPalatal(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Palatallaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Palatallaut steht.</returns>
	MLetter.IsPalatal = function(item){return item.ItemParent.Identiy = ELetter.Palatal ? true : false;}

	// MLetter.IsRetroflex(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Retroflexlaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Retroflexlaut steht.</returns>
	MLetter.IsRetroflex = function(item){return item.IdentityParent == ELetter.Retroflex ? true : false;}

	// MLetter.IsSign(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen der Klasse Funktionszeichen angehört.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen der Klasse Funktionszeichen angehört.</returns>
	MLetter.IsSign = function(item){return item.IdentityParent == ELetter.Sign ? true : false;}

	// MLetter.IsTenuis(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Tenuislaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Tenuislaut steht.</returns>
	MLetter.IsTenuis = function(item)
	{
		// Zutrffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.Ka)   return true;
		if(item.Identity == ELetter.Kha)  return true;
		if(item.Identity == ELetter.Ca)   return true;
		if(item.Identity == ELetter.Cha)  return true;
		if(item.Identity == ELetter.Tta)  return true;
		if(item.Identity == ELetter.Ttha) return true;
		if(item.Identity == ELetter.Ta)   return true;
		if(item.Identity == ELetter.Tha)  return true;
		if(item.Identity == ELetter.Pa)   return true;
		if(item.Identity == ELetter.Pha)  return true;
		return false;
	}

	// MLetter.IsVelar(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Velarlaut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Velarlaut steht.</returns>
	MLetter.IsVelar = function(item){return item.IdentityParent == ELetter.Velar ? true : false;}

	// MLetter.IsVoiceless(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen tonlosen Laut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen tonlosen Laut steht.</returns>
	MLetter.IsVoiceless = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(this.IsTenuis(item) == true)     return true;
		if(item.Identity == ELetter.Visarga) return true;
		return false;
	}

	// MLetter.IsVoicefull(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen tonhaften Laut steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen tonhaften Laut steht.</returns>
	MLetter.IsVoicefull = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(this.IsMedia(item)     == true) return true;
		if(this.IsNasal(item)     == true) return true;
		if(this.IsVowelSemi(item) == true) return true;
		if(this.IsVowel(item)     == true) return true;
		if(item.Identity == ELetter.Ha)    return true;
		return false;
	}

	// MLetter.IsVowel(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Vokal steht.</returns>
	MLetter.IsVowel = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(this.IsVowelShort(item) == true) return true;
		if(this.IsVowelLong (item) == true) return true;
		if(this.IsVowelBi   (item) == true) return true;

		// Dravidischer Erweiterung verarbeiten
		if(item.Identity == ELetter.ShortE) return true;
		if(item.Identity == ELetter.ShortO) return true;
		return false;
	}

	// MLetter.IsVowelA(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen A-Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen A-Vokal steht.</returns>
	MLetter.IsVowelA = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.A)  return true;
		if(item.Identity == ELetter.Aa) return true;
		return false;
	}

	// MLetter.IsVowelBi(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Diphthong steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Diphthong steht.</returns>
	MLetter.IsVowelBi = function(item){return item.IdentityParent == ELetter.VowelBi ? true : false;}

	// MLetter.IsVowelEOrAi(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für den e-Vokal oder den ai-Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das elementare Schriftzeichen für den e-Vokal oder den ai-Vokal steht.</returns>
	MLetter.IsVowelEOrAi = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.E)  return true;
		if(item.Identity == ELetter.Ai) return true;
		return false;
	}

	// MLetter.IsVowelGuna(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Guna-Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Guna-Vokal steht.</returns>
	MLetter.IsVowelGuna = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.E) return true;
		if(item.Identity == ELetter.O) return true;
		return false;
	}

	// MLetter.IsVowelI(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen I-Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen I-Vokal steht.</returns>
	MLetter.IsVowelI = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.I)  return true;
		if(item.Identity == ELetter.Ii) return true;
		return false;
	}

	// MLetter.IsVowelL(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen L-Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen L-Vokal steht.</returns>
	MLetter.IsVowelL = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.L)  return true;
		if(item.Identity == ELetter.Ll) return true;
		return false;
	}

	// MLetter.IsVowelLong(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Langvokale steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Langvokale steht.</returns>
	MLetter.IsVowelLong = function(item){return item.IdentityParent == ELetter.VowelLong ? true : false;}

	// MLetter.IsVowelOOrAu(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen o-Vokal oder einen au-Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen o-Vokal oder einen au-Vokal steht.</returns>
	MLetter.IsVowelOOrAu = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.O)  return true;
		if(item.Identity == ELetter.Au) return true;
		return false;
	}

	// MLetter.IsVowelR(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen R-Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen R-Vokal steht.</returns>
	MLetter.IsVowelR = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.R)  return true;
		if(item.Identity == ELetter.Rr) return true;
		return false;
	}

	// MLetter.IsVowelSemi(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Halbvokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Halbvokal steht.</returns>
	MLetter.IsVowelSemi = function(item){return item.IdentityParent == ELetter.VowelSemi ? true : false;}

	// MLetter.IsVowelShort(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen einen Kurzvokal angehört.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen einen Kurzvokal angehört.</returns>
	MLetter.IsVowelShort = function(item){return item.IdentityParent == ELetter.VowelShort ? true : false;}

	// MLetter.IsVowelU(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen U-Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen U-Vokal steht.</returns>
	MLetter.IsVowelU = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten
		if(item.Identity == ELetter.U)  return true;
		if(item.Identity == ELetter.Uu) return true;
		return false;
	}

	// MLetter.IsVowelVriddhi(CLetter)
	/// <summary>
	/// Liefert TRUE, falls das Schriftzeichen für einen Vriddhi-Vokal steht.
	/// </summary>
	/// <param name="item">Schriftzeichen.</param>
	/// <returns>TRUE, falls das Schriftzeichen für einen Vriddhi-Vokal steht.</returns>
	MLetter.IsVowelVriddhi = function(item)
	{
		// Zutreffende Schriftzeichen verarbeiten 
		if(item.Identity == ELetter.Ai) return true;
		if(item.Identity == ELetter.Au) return true;
		return false;
	}

	// MLetter.m_AppendLetter(string, int, Array)
	/// <summary>
	/// Fügt der Sammlung das nachfolgende Schriftzeichen an.
	/// </summary>
	/// <param name="code">Zeichenkette.</param>
	/// <param name="header">Lesekopf.</param>
	/// <param name="itemSet">Sammlung der Elemente.</param>
	m_AppendLetter = function(code, header, itemSet)
	{
		// Aktuelles Zeichen verarbeiten
		var chr = code[header.Value];
		switch(chr)
		{
			// ----------------------- //
			// Schriftzeichen "Hiatus" //
			// ----------------------- //
			case " ":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Hiatus]);
				header.Value++; // " "
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 0 //
			// ----------------------- //
			case "0":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit0]);
				header.Value++; // "0"
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 1 //
			// ----------------------- //
			case "1":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit1]);
				header.Value++; // "1"
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 2 //
			// ----------------------- //
			case "2":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit2]);
				header.Value++; // "2"
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 3 //
			// ----------------------- //
			case "3":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit3]);
				header.Value++; // "3"
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 4 //
			// ----------------------- //
			case "4":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit4]);
				header.Value++; // "4"
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 5 //
			// ----------------------- //
			case "5":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit5]);
				header.Value++; // "5"
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 6 //
			// ----------------------- //
			case "6":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit6]);
				header.Value++; // "6"
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 7 //
			// ----------------------- //
			case "7":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit7]);
				header.Value++; // "7"
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 8 //
			// ----------------------- //
			case "8":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit8]);
				header.Value++; // "8"
				return;

			// ----------------------- //
			// Schriftzeichen Ziffer 9 //
			// ----------------------- //
			case "9":

				// Schrifzeichen anfügen
				itemSet.push(MLetter[ELetter.Digit9]);
				header.Value++; // "9"
				return;

			// --------------------- //
			// Schriftzeichen Hyphen //
			// --------------------- //
			case "-":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Hyphen]);
				header.Value++; // "-"
				return;

			// ------------------------ //
			// Schriftzeichen MiddleDot //
			// ------------------------ //
			case "·":

				// Schriftzeichen anfügen
				// TODO: Klären, warum "·" nicht erkannt wird
				itemSet.push(MLetter[ELetter.MiddleDot]);
				header.Value++; // "·"
				return;

			// ----------------------------------------------------------------- //
			// Schriftzeichen "Danda", "Anunasika", "Avagraha" und "DoubleDanda" //
			// ----------------------------------------------------------------- //
			case ".":

				// Gültige Zeichenkettenlänge sicherstellen
				if(header.Value > code.length - 2)
					throw new Error("Unexpected end of string.");

				// Lesekopf fortschreiten
				header.Value++; // "."

				// Schriftzeichen "Danda" verarbeiten
				if(code[header.Value] == ' ')
				{
					itemSet.push(MLetter[ELetter.Danda]);
					itemSet.push(MLetter[ELetter.Hiatus]);
					header.Value++; // " "
					return;
				}

				// Schriftzeichen "Anunsika" verarbeiten
				if(code[header.Value] == "N")
				{
					itemSet.push(MLetter[ELetter.Anunasika]);
					header.Value++; // "N"
					return;
				}

				// Schriftzeichen "Avagraha" verabeiten
				if(code[header.Value] == "a")
				{
					itemSet.push(MLetter[ELetter.Avagraha]);
					header.Value++; // "a"
					return;
				}

				// Gültige Zeichenkettenlänge sicherstellen
				if(header.Value > code.length - 2)
					throw new Error("Unexpected end of string.");

				// Schriftzeichen "DoubleDanda" verarbeiten
				if(code[header.Value] == ".")
				{
					// Schriftzeichen anfügen
					itemSet.push(MLetter[ELetter.Hiatus]);
					itemSet.push(MLetter[ELetter.DoubleDanda]);
					header.Value++; // "."

					// Leerzeichen sicherstellen
					if(code[header.Value] != " ")
						throw new ParsingException("Space character expected.", code, header.Value);
					header.Value++; 
					return;
				}

				// Unerwartetes Zeichen verarbeiten
				throw new ParsingException("Character ' ', 'N', 'a', or '.' expected.", code, header.Value);

			// -------------------- //
			// Schriftzeichen "Cha" //
			// -------------------- //
			case "C":

				// Gültige Zeichenkettenlänge sicherstellen
				if(header.Value > code.length - 2)
					throw new Error("Unexpected end of string.");

				// Lesekopf fortschreiten
				header.Value++; // "C"

				// Schriftzeichen "Cha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Cha]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Unerwartetes Zeichen verarbeiten
				throw new ParsingException("Character 'h' expected.", code, header.Value);

			// ------------------------------- //
			// Schriftzeichen "Dda" und "Ddha" //
			// ------------------------------- //
			case "D":

				// Lesekopf fortschreiten
				header.Value++; // "D"

				// Schriftzeichen "Ddha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Ddha]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Dda]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------------ //
			// Schriftzeichen "Visarga" //
			// ------------------------ //
			case "H":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Visarga]);
				header.Value++; // "H"
				return;

			// ------------------------- //
			// Schriftzeichen "Anusvara" //
			// ------------------------- //
			case "M":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Anusvara]);
				header.Value++; // "M"
				return;

			// -------------------- //
			// Schriftzeichen "Nna" //
			// -------------------- //
			case "N":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Nna]);
				header.Value++; // "N"
				m_AppendVowel(code, header, itemSet);
				return;

			// -------------------- //
			// Schriftzeichen "Ssa" //
			// -------------------- //
			case "S":

				// Lesekopf fortschreiten
				header.Value++; // "S"

				// Schriftzeichen "Ssa" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Ssa]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Unerwartets Zeichen verarbeiten
				throw new ParsingException("Character 'h' expected.", code, header.Value);

			// ------------------------------- //
			// Schriftzeichen "Tta" und "Ttha" //
			// ------------------------------- //
			case "T":

				// Lesekopf fortschreiten
				header.Value++; // "T"

				// Schriftzeichen "Ttha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Ttha]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Tta]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ----------------------------- //
			// Schriftzeichen "Ba" und "Bha" //
			// ----------------------------- //
			case "b":

				// Lesekopf fortschreiten
				header.Value++; // "b"

				// Schriftzeichen "Bha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Bha]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ba]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------- //
			// Schriftzeichen "Ca" //
			// ------------------- //
			case "c":

				// Lesekopf fortschreiten
				header.Value++; // "c"

				// Schriftzeichen "Ca" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Ca]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Unerwartetes Zeichen verarbeiten
				throw new ParsingException("Character 'h' expected.", code, header.Value);

			// ----------------------------- //
			// Schriftzeichen "Da" und "Dha" //
			// ----------------------------- //
			case "d":

				// Lesekopf fortschreiten
				header.Value++; // "d"

				// Schriftzeichen "Dha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Dha]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Da]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ----------------------------- //
			// Schriftzeichen "Ga" und "Gha" //
			// ----------------------------- //
			case "g":

				// Lesekopf fortschreiten
				header.Value++;

				// Schriftzeichen "Gha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Gha]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ga]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------- //
			// Schriftzeichen "Ha" //
			// ------------------- //
			case "h":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ha]);
				header.Value++; // "h"
				m_AppendVowel(code, header, itemSet);
				return;

			// ----------------------------- //
			// Schriftzeichen "Ja" und "Jha" //
			// ----------------------------- //
			case "j":

				// Lesekopf fortschreiten
				header.Value++; // "j"

				// Schriftzeichen "Jha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Jha]);
					header.Value++;
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ja]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ----------------------------- //
			// Schriftzeichen "Ka" und "Kha" //
			// ----------------------------- //
			case "k":

				// Lesekopf fortschreiten
				header.Value++; // "k"

				// Schriftzeichen "Kha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Kha]);
					header.Value++; // "k"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ka]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------- //
			// Schriftzeichen "La" //
			// ------------------- //
			case "l":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.La]);
				header.Value++; // "l"
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------- //
			// Schriftzeichen "Ma" //
			// ------------------- //
			case "m":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ma]);
				header.Value++; // "m"
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------- //
			// Schriftzeichen "Na" //
			// ------------------- //
			case "n":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Na]);
				header.Value++; // "n"
				m_AppendVowel(code, header, itemSet);
				return;

			// ----------------------------- //
			// Schriftzeichen "Pa" und "Pha" //
			// ----------------------------- //
			case "p":

				// Lesekopf fortschreiten
				header.Value++; // "p"

				// Schriftzeichen "Pha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Pha]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Pa]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------- //
			// Schriftzeichen "Ra" //
			// ------------------- //
			case "r":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ra]);
				header.Value++; // "r"
				m_AppendVowel(code, header, itemSet);
				return;

			// ----------------------------- //
			// Schriftzeichen "Sa" und "Sha" //
			// ----------------------------- //
			case "s":

				// Lesekopf fortschreiten
				header.Value++; // "s"

				// Schriftzeichen "Sha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Sha]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Sa]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ----------------------------- //
			// Schriftzeichen "Ta" und "Tha" //
			// ----------------------------- //
			case "t":

				// Lesekopf fortschreiten
				header.Value++; // "t"

				// Schriftzeichen "Tha" verarbeiten
				if(code[header.Value] == "h")
				{
					itemSet.push(MLetter[ELetter.Tha]);
					header.Value++; // "h"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ta]);
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------- //
			// Schriftzeichen "Va" //
			// ------------------- //
			case "v":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Va]);
				header.Value++; // "h"
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------- //
			// Schriftzeichen "Ya" //
			// ------------------- //
			case "y":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ya]);
				header.Value++; // "y"
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------------------ //
			// Schriftzeichen "Nga" und "Nya" //
			// ------------------------------ //
			case "~":

				// Lesekopf fortschreiten
				header.Value++; // "~"

				// Schriftzeichen "Nga" verarbeiten
				if(code[header.Value] == "N")
				{
					itemSet.push(MLetter[ELetter.Nga]);
					header.Value++; // "N"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Schriftzeichen "Nya" verarbeiten
				if(code[header.Value] == "n")
				{
					itemSet.push(MLetter[ELetter.Nya]);
					header.Value++; // "n"
					m_AppendVowel(code, header, itemSet);
					return;
				}

				// Unerwartetes Zeichen verarbeiten
				throw new ParsingException("Character 'N' or 'n' expected.", code, header.Value);

			// -------------------- //
			// Schriftzeichen "Nga" //
			// -------------------- //
			case "Ñ":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Nga]);
				header.Value++; // "Ñ"
				m_AppendVowel(code, header, itemSet);
				return;

			// -------------------- //
			// Schriftzeichen "Nya" //
			// -------------------- //
			case "ñ":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Nya]);
				header.Value++; // "ñ"
				m_AppendVowel(code, header, itemSet);
				return;

			// ------ //
			// Vokale //
			// ------ //
			default:

				// Vokal anfügen
				m_AppendVowel(code, header, itemSet);
				return;
		}
	}

	// MLetter.m_AppendVowel(string, int, Array)
	/// <summary>
	/// Fügt der Sammlung den nachfolgenden Vokal oder ein Virama an.
	/// </summary>
	/// <param name="code">Zeichenkette.</param>
	/// <param name="header">Lesekopf.</param>
	/// <param name="itemSet">Sammlung der Elemente.</param>
	m_AppendVowel = function(code, header, itemSet)
	{
		// Aktuelles Zeichen verarbeiten
		var chr = code[header.Value];
		switch(chr)
		{
			// ---------------------- //
			// Sonderzeichen "Hyphen" //
			// ---------------------- //
			case "-":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Hyphen]);
				header.Value++; // "-"
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------------- //
			// Sonderzeichen "MiddleDot" //
			// ------------------------- //
			case "·":

				// Schriftzeichen anfügen
				// TODO: Klären, warum "·" nicht erkannt wird
				itemSet.push(MLetter[ELetter.MiddleDot]);
				header.Value++; // "·"
				m_AppendVowel(code, header, itemSet);
				return;

			// ------------------ //
			// Virama am Wortende //
			// ------------------ //
			case " ":

				// Schriftzeichen anfügen
				if(MLetter.IsVowel(itemSet[itemSet.length - 1]) == false)
					itemSet.push(MLetter[ELetter.Virama]);
				itemSet.push(MLetter[ELetter.Hiatus]);
				header.Value++; // " "
				return;

			// ------------------- //
			// Schriftzeichen "Aa" //
			// ------------------- //
			case "A":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Aa]);
				header.Value++; // "A"
				return;

			// ------------------- //
			// Schriftzeichen "Ii" //
			// ------------------- //
			case "I":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Ii]);
				header.Value++; // "I"
				return;

			// --------------------------- //
			// Schriftzeichen "L" und "Ll" //
			// --------------------------- //
			case "L":

				// Gültige Zeichenkettenlänge sicherstellen
				if(header.Value > code.length - 2)
					throw new Error("Unexpected end of string.");
				header.Value++; // "L"
				chr = code[header.Value];

				// Schriftzeichen "L" verarbeiten
				// TODO: Klären, warum "î" nicht erkannt wird.
				if(chr == "î")
				{
					itemSet.push(MLetter[ELetter.L]);
					header.Value++; // "î"
					return;
				}

				// Schriftzeichen "Ll" verarbeiten
				// TODO: Klären, warum "Î" nicht erkannt wird.
				if(chr == "Î")
				{
					itemSet.push(MLetter[ELetter.Ll]);
					header.Value++; // "Î"
					return;
				}

				// Nachfolgendes "L|^" sicherstellen
				if(chr != "L" && chr != "^")
					throw new ParsingException("Character 'L' or '^' expected.", code, header.Value);
				header.Value++; // "^|L"
				chr = code[header.Value];

				// Schriftzeichen "L" verarbeiten
				if(chr == "i")
				{
					itemSet.push(MLetter[ELetter.L]);
					header.Value++; // "i"
					return;
				}

				// Schriftzeichen "Ll" verarbeiten
				if(chr == "I")
				{
					itemSet.push(MLetter[ELetter.Ll]);
					header.Value++; // "I"
					return;
				}

				// Ungültiges Zeichen verarbeiten
				throw new ParsingException("Character 'i' or 'I' expected.", code, header.Value);

			// --------------------------- //
			// Schriftzeichen "R" und "Rr" //
			// --------------------------- //
			case "R":

				// Gültige Zeichenkettenlänge sicherstellen
				if(header.Value > code.length - 2)
					throw new Error("Unexpected end of string.");
				header.Value++; // "R"
				chr = code[header.Value];

				// Schriftzeichen "R" verarbeiten
				// TODO: Klären, warum "î" nicht erkannt wird.
				if(chr == "î")
				{
					itemSet.push(MLetter[ELetter.R]);
					header.Value++; // "î"
					return;
				}

				// Schriftzeichen "Rr" verarbeiten
				// TODO: Klären, warum "Î" nicht erkannt wird.
				if(chr == "Î")
				{
					itemSet.push(MLetter[ELetter.Rr]);
					header.Value++; // "Î"
					return;
				}

				// Nachfolgendes "R|^" sicherstellen
				if(chr != "R" && chr != "^")
					throw new ParsingException("Character 'R' or '^' expected.", code, header.Value);
				header.Value++; // "R|^"
				chr = code[header.Value];

				// Schriftzeichen "R" verarbeiten
				if(chr == "i")
				{
					itemSet.push(MLetter[ELetter.R]);
					header.Value++; // "i"
					return;
				}

				// Schriftzeichen "Rr" verarbeiten
				if(chr == "I")
				{
					itemSet.push(MLetter[ELetter.Rr]);
					header.Value++; // "I"
					return;
				}

				// Ungültiges Zeichen verarbeiten
				throw new ParsingException("Character 'i' or 'I' expected.", code, header.Value);

			// ------------------- //
			// Schriftzeichen "Uu" //
			// ------------------- //
			case "U":

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Uu]);
				header.Value++; // "U"
				return;

			// ------------------- //
			// Schriftzeichen "OM" //
			// ------------------- //
			case "O":

				// Gültige Zeichenkettenlänge sicherstellen
				if(header.Value > code.length - 2)
					throw new Error("Unexpected end of string.");
				header.Value++; // "O"

				// Nachfolgedes "M" sicherstellen
				if(code[header.Value] != "M")
					throw new ParsingException("Character 'M' expected.", code, header.Value);
				header.Value++; // "M"

				// Nachfolgendes Leerzeichen sicherstellen
				if(code[header.Value] != " ")
					throw new ParsingException("Space character expected.", code, header.Value);
				header.Value++; // " "

				// Schriftzeichen "OM" anfügen
				itemSet.push(MLetter[ELetter.Om]);
				return;

			// --------------------------------------- //
			// Schriftzeichen "Aa", "Ai", "Au" und "A" //
			// --------------------------------------- //
			case "a":

				// Lesekopf fortschreiten und nachfolgendes Zeichen holen
				header.Value++; // "a"
				chr = code[header.Value];

				// Schriftzeichen "A" verarbeiten
				if(chr == "a")
				{
					itemSet.push(MLetter[ELetter.Aa]);
					header.Value++; // "a"
					return;
				}

				// Schriftzeichen "Ai" verarbeiten
				if(chr == "i")
				{
					itemSet.push(MLetter[ELetter.Ai]);
					header.Value++; // "i"
					return;
				}

				// Schriftzeichen "Au" verarbeiten
				if(chr == "u")
				{
					itemSet.push(MLetter[ELetter.Au]);
					header.Value++; // "u"
					return;
				}

				// Schriftzeichen "A" verarbeiten
				itemSet.push(MLetter[ELetter.A]);
				return;

			// ------------------ //
			// Schriftzeichen "E" //
			// ------------------ //
			case "e":

				// Schriftzeichen "E" anfügen
				itemSet.push(MLetter[ELetter.E]);
				header.Value++; // "e"
				return;

			// --------------------------- //
			// Schriftzeichen "Ii" und "I" //
			// --------------------------- //
			case "i":

				// Lesekopf fortschreiten und nachfolgendes Zeichen holen
				header.Value++; // "i"
				chr = code[header.Value];

				// Schriftzeichen "Ii" verarbeiten
				if(chr == "i")
				{
					itemSet.push(MLetter[ELetter.Ii]);
					header.Value++; // "i"
					return;
				}

				// Schriftzeichen "I" anfügen
				itemSet.push(MLetter[ELetter.I]);
				return;

			// ------------------ //
			// Schriftzeichen "O" //
			// ------------------ //
			case "o":

				// Schriftzeichen "O" anfügen
				itemSet.push(MLetter[ELetter.O]);
				header.Value++; // "o"
				return;

			// --------------------------- //
			// Schriftzeichen "Uu" und "U" //
			// --------------------------- //
			case "u":

				// Lesekopf fortschreiten und nachfolgendes Zeichen holen
				header.Value++; // "u"
				chr = code[header.Value];

				// Schriftzeichen "Uu" verarbeiten
				if(chr == "u")
				{
					itemSet.push(MLetter[ELetter.Uu]);
					header.Value++; // "u"
					return;
				}

				// Schriftzeichen "U" anfügen
				itemSet.push(MLetter[ELetter.U]);
				return;

			// ------------------- //
			// Virama in Wortmitte //
			// ------------------- //
			default:

				// Gültiges Schriftzeichen sicherstellen
				if(itemSet.length == 0)
					throw new ParsingException("Unexpected character.", code, header.Value);
				chr = itemSet[itemSet.length - 1];
				if(chr.Identity == ELetter.Virama)
					throw new ParsingException("Unexpected character.", code, header.Value);

				// Schriftzeichen anfügen
				itemSet.push(MLetter[ELetter.Virama]);
				return;
		}
	}
};
