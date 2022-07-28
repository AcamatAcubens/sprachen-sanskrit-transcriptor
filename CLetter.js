// <author>Carsten Alexander</author>
// <project>Sankrit</project>
// <version>1.0 (2015-04-04)</version>
// <license>public domain</license>
// <mailto>sanskrit ~At~ acamat ~Dot~ de</mailto>
// ---
// ------- //
// CLetter //
// ------- //
/// <summary>
/// Stellt ein Schriftzeichen dar.
/// </summary>
// ---
// CLetter(int, int, bool, int, string, string, string, string, string)
/// <summary>
/// Richtet eine neue Instanz der CLetter-Klasse ein.
/// </summary>
/// <param name="identity">Identität zum Schriftzeichen.</param>
/// <param name="identityParent">Identität zum Elternelement.</param>
/// <param name="isMeta">Schalter für Metazeichen.</param>
/// <param name="order">Lexikalische Abfolgekennzahl.</param>
/// <param name="name">Name.</param>
/// <param name="code">Itx-Kodierung zum Schriftzeichen.</param>
/// <param name="htm">Htm-Kodierung zum Schriftzeichen.</param>
/// <param name="htmIast">Htm-Kodierung zum Schriftzeichen für Iast-Repräsentation.</param>
/// <param name="htmMatra">Htm-Kodierung zum Vokalzeichen.</param>
function CLetter(identity, identityParent, isMeta, order, name, code, htm, htmIast, htmMatra)
{
	this.Identity       = identity;
	this.IdentityParent = identityParent;
	this.IsMeta         = isMeta;
	this.Order          = order;
	this.Name           = name;
	this.Code           = code;
	this.Htm            = htm;
	this.HtmIast        = htmIast;
	this.HtmMatra       = htmMatra;
}

