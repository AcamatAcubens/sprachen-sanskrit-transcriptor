// <author>Carsten Alexander</author>
// <project>Sankrit</project>
// <version>0.5 (2013-06-11)</version>
// <license>public domain</license>
// <mailto>sanskrit ~At~ acamat ~Dot~ de</mailto>
// ---
// ----------- //
// CLetterList //
// ----------- //
/// <summary>
/// Stellt eine Auflistung der Schriftzeichen dar.
/// </summary>
var ELetter = new Object()
{
	// ----------- //
	// Metazeichen //
	// ----------- //
	ELetter.None        =  0; // Das Schriftzeichen ist ungenannt.
	ELetter.Class       =  1; // Elementtyp Klasse.
	ELetter.Letter      =  2; // Klasse der Buchstaben.
	ELetter.Sign        =  3; // Klasse der Funktionszeichen.
	ELetter.Digit       =  4; // Klasse der Ziffern.
	ELetter.Special     =  5; // Klasse der Sonderzeichen.
	ELetter.VowelShort  =  6; // Gruppe der Kurzvokale.
	ELetter.VowelLong   =  7; // Gruppe der Langvokale.
	ELetter.VowelBi     =  8; // Gruppe der Diphtonge.
	ELetter.Velar       =  9; // Gruppe der Velarlaute.
	ELetter.Palatal     = 10; // Gruppe der Palatallaute.
	ELetter.Retroflex   = 11; // Gruppe der Retroflexlaute.
	ELetter.Dental      = 12; // Gruppe der Dentallaute.
	ELetter.Labial      = 13; // Gruppe der Labiallaute.
	ELetter.VowelSemi   = 14; // Gruppe der Halbvokale.
	ELetter.Fricative   = 15; // Gruppe der Frikativlaute.
	// ---------- //
	// Buchstaben //
	// ---------- //
	// Kurzvokale
	ELetter.A           = 16; // Schriftzeichen A.
	ELetter.I           = 17; // Schriftzeichen I.
	ELetter.U           = 18; // Schriftzeichen U.
	ELetter.R           = 19; // Schriftzeichen R.
	ELetter.L           = 20; // Schriftzeichen L.
	// Langvokale
	ELetter.Aa          = 21; // Schriftzeichen Aa.
	ELetter.Ii          = 22; // Schriftzeichen Ii.
	ELetter.Uu          = 23; // Schriftzeichen Uu.
	ELetter.Rr          = 24; // Schriftzeichen Rr.
	ELetter.Ll          = 25; // Schriftzeichen Ll.
	// Diphtonge
	ELetter.E           = 26; // Schriftzeichen E.
	ELetter.Ai          = 27; // Schriftzeichen Ai.
	ELetter.O           = 28; // Schriftzeichen O.
	ELetter.Au          = 29; // Schriftzeichen Au.
	// Schriftzeichen 30 ist nicht besetzt.
	// Velare
	ELetter.Ka          = 31; // Schriftzeichen Ka.
	ELetter.Kha         = 32; // Schriftzeichen Kha.
	ELetter.Ga          = 33; // Schriftzeichen Ga.
	ELetter.Gha         = 34; // Schriftzeichen Gha.
	ELetter.Nga         = 35; // Schriftzeichen Nga.
	// Palatale
	ELetter.Ca          = 36; // Schriftzeichen Ca.
	ELetter.Cha         = 37; // Schriftzeichen Cha.
	ELetter.Ja          = 38; // Schriftzeichen Ja.
	ELetter.Jha         = 39; // Schriftzeichen Jha.
	ELetter.Nya         = 40; // Schriftzeichen Nya.
	// Retroflexe
	ELetter.Tta         = 41; // Schriftzeichen Tta.
	ELetter.Ttha        = 42; // Schriftzeichen Ttha.
	ELetter.Dda         = 43; // Schriftzeichen Dda.
	ELetter.Ddha        = 44; // Schriftzeichen Ddha.
	ELetter.Nna         = 45; // Schriftzeichen Nna.
	// Dentale
	ELetter.Ta          = 46; // Schriftzeichen Ta.
	ELetter.Tha         = 47; // Schriftzeichen Tha.
	ELetter.Da          = 48; // Schriftzeichen Da.
	ELetter.Dha         = 49; // Schriftzeichen Dda.
	ELetter.Na          = 50; // Schriftzeichen Na.
	// Labiale
	ELetter.Pa          = 51; // Schriftzeichen Pa.
	ELetter.Pha         = 52; // Schriftzeichen Pha.
	ELetter.Ba          = 53; // Schriftzeichen Ba.
	ELetter.Bha         = 54; // Schriftzeichen Bha.
	ELetter.Ma          = 55; // Schriftzeichen Ma.
	// Halbvokale
	ELetter.Ya          = 56; // Schriftzeichen Ya.
	ELetter.Ra          = 57; // Schriftzeichen Ra.
	ELetter.La          = 58; // Schriftzeichen La.
	ELetter.Va          = 59; // Schriftzeichen Va.
	// Schriftzeichen 60 ist nicht besetzt.
	// Frikative
	ELetter.Sha         = 61; // Schriftzeichen Sha.
	ELetter.Ssa         = 62; // Schriftzeichen Ssa.
	ELetter.Sa          = 63; // Schriftzeichen Sa.
	// Schriftzeichen 64 ist nicht besetzt.
	ELetter.Ha          = 65; // Schriftzeichen Ha.
	// ---------------- //
	// Funktionszeichen //
	// ---------------- //
	ELetter.Virama      = 66; // Schriftzeichen Virama.
	ELetter.Hiatus      = 67; // Schriftzeichen Hiatus.
	ELetter.Avagraha    = 68; // Schriftzeichen Avagraha.
	ELetter.Anusvara    = 69; // Schriftzeichen Anusvara.
	ELetter.Visarga     = 70; // Schriftzeichen Visarga.
	ELetter.Anunasika   = 71; // Schriftzeichen Anunasika.
	// ------- //
	// Ziffern //
	// ------- //
	ELetter.Digit0      = 72; // Schriftzeichen Ziffer 0.
	ELetter.Digit1      = 73; // Schriftzeichen Ziffer 1.
	ELetter.Digit2      = 74; // Schriftzeichen Ziffer 2.
	ELetter.Digit3      = 75; // Schriftzeichen Ziffer 3.
	ELetter.Digit4      = 76; // Schriftzeichen Ziffer 4.
	ELetter.Digit5      = 77; // Schriftzeichen Ziffer 5.
	ELetter.Digit6      = 78; // Schriftzeichen Ziffer 6.
	ELetter.Digit7      = 79; // Schriftzeichen Ziffer 7.
	ELetter.Digit8      = 80; // Schriftzeichen Ziffer 8.
	ELetter.Digit9      = 81; // Schriftzeichen Ziffer 9.
	// ------------- //
	// Sonderzeichen //
	// ------------- //
	ELetter.Om          = 82; // Schriftzeichen Om.
	ELetter.Danda       = 83; // Schriftzeichen Danda.
	ELetter.DoubleDanda = 84; // Schriftzeichen Double Danda.
	ELetter.Hyphen      = 85; // Schriftzeichen Viertelgeviertstrich
	ELetter.MiddleDot   = 86; // Schriftzeichen Mittelpunkt.
	// -------------------------- //
	// Dravidisiche Erweiterungen //
	// -------------------------- //
	ELetter.ShortE      = 87; // Schriftzeichen kurzes E
	ELetter.ShortO      = 88; // Schriftzeichen kurzes O
};
