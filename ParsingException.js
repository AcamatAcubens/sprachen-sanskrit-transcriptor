// <author>Carsten Alexander</author>
// <project>Sankrit</project>
// <version>0.5 (2013-06-11)</version>
// <license>public domain</license>
// <mailto>sanskrit ~At~ acamat ~Dot~ de</mailto>
// ---
// ---------------- //
// ParsingException //
// ---------------- //
/// <summary>
/// Stellt eine Parsierungsausnahme dar.
/// </summary>
// ---
// ParsingException(string, string, int)
/// <summary>
/// Richtet eine neue Instanz der ParsingException-Klasse ein.
/// </summary>
/// <param name="message">Meldungstext.</param>
/// <param name="source">Itx-Quelltext.</param>
/// <param name="index">Zeichenindex.</param>
function ParsingException(message, source, index)
{
	// Geerbte Felder	
	this.name    = "ParsingException";
	this.message = message;

	// Eigene Felder
	this.Source  = source;
	this.Index   = index;

	// ParsingException.ToHtm()
	/// <summary>
	/// Liefert den Htm-Quelltext zur Ausnahme.
	/// </summary>
	/// <returns>Htm-Quelltext zur Ausnahme.</returns>
	// TODO: Umstellung der Ausnahme auf Htm-fähige Darstellung.
	this.ToHtm = function()
	{
		var rtn = "Parsing Exception:\n\n";
		for(i = 0; i < source.length; i++)
			rtn += i == index ? ">|" + source[i] + "|<" : source[i];
		return rtn + "\n\n" + message;
	}
}
ParsingException.prototype = new Error();
ParsingException.prototype.constructor = ParsingException;
