import React, { Component } from 'react';
import ScrollSection from '../elements/ScrollSection';

const ImprintMarkup = props => (
    <div>
        <InfoMarkup title="Imprint" onClose={props.onClose}/>
        <p>Anschrift:</p>
        <p>marbis GmbH</p>
        <p>Griesbachstr. 10</p>
        <p>76185 Karlsruhe Deutschland</p>
        <p><br/></p>
        <p>Handelsregister:</p>
        <p>Amtsgericht Mannheim,</p>
        <p>HRB 713868</p>
        <p><br/></p>
        <p>Ust. ID:</p>
        <p>DE282044123</p>
        <p><br/></p>
        <p>Gesch&auml;ftsf&uuml;hrer:</p>
        <p>Marcel B&ouml;&szlig;end&ouml;rfer</p>
        <p><br/></p>
        <p>ALLGEMEINE GESCH&Auml;FTSBEDINGUNGEN&nbsp;</p>
        <p>DATENSCHUTZ&nbsp;</p>
        <p>Rechtlicher Hinweis</p>
        <p>Mit Urteil vom 12. Mai 1998 hat das Landgericht Hamburg entschieden, dass man durch die Ausbringung eines Links die Inhalte der gelinkten Seite gegebenenfalls mit zu verantworten hat. Dies kann - so das LG - nur dadurch verhindert werden, dass man sich ausdr&uuml;cklich von diesen Inhalten distanziert. Von einigen unserer Seiten f&uuml;hren Links zu anderen Seiten im Internet. F&uuml;r all diese Links gilt: Wir m&ouml;chten ausdr&uuml;cklich betonen, dass wir keinerlei Einfluss auf die Gestaltung und die Inhalte der gelinkten Seiten haben. Aus diesem Grunde distanzieren wir uns hiermit ausdr&uuml;cklich von allen Inhalten gelinkter Seiten und machen uns ihre Inhalte nicht zu eigen. Diese Erkl&auml;rung gilt f&uuml;r alle Links und f&uuml;r alle Inhalte der Seiten, zu denen bei uns gelinkte Inhalte f&uuml;hren.</p>
        <p><br/></p>
        <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet und nehmen an einem solchen Verfahren auch nicht teil. Wir weisen Kunden darauf hin, dass die EU-Kommission gem&auml;&szlig; der Richtlinie 2013/11/EU eine Internetplattform zur Online-Beilegung von Streitigkeiten (&bdquo;OS-Plattform&ldquo;) zwischen Unternehmern und Verbrauchern eingerichtet hat. Diese Internetplattform ist unter folgendem Link erreichbar: https://ec.europa.eu/consumers/odr/</p>
        <p><br/></p>
        <p>Alle hier ver&ouml;ffentlichen Grafiken und Weblayouts sind Eigentum der marbis GmbH und urheberrechtlich gesch&uuml;tzt und d&uuml;rfen ohne ausdr&uuml;ckliche Genehmigung des Autors weder kopiert noch vervielf&auml;ltigt werden.</p>
    </div>
)

const TOSMarkup = props => (
    <div>
        <InfoMarkup title="Terms of Service" onClose={props.onClose}/>
        <p>marbis GmbH</p>
        <p>nachfolgend &bdquo;Nitrado&ldquo; genannt</p>
        <p><br/></p>
        <p>Letzte Aktualisierung: 19. August 2021</p>
        <p>Gesch&auml;ftsf&uuml;hrer: Marcel B&ouml;&szlig;end&ouml;rfer</p>
        <p><br/></p>
        <p>I. Allgemeines</p>
        <p>marbis GmbH betreibt unter dem Namen &bdquo;Nitrado&ldquo; das Internet-Portal mit der URL &bdquo;nitrado.net&ldquo;. Es handelt sich um eine Plattform, auf der Kunden unter anderem Game- und Voiceserver sowie Webspace gegen Vorauszahlung anmieten k&ouml;nnen (&bdquo;Serverdienste&ldquo;). Die Kunden k&ouml;nnen sich kostenlos auf der Webseite von Nitrado registrieren. F&uuml;r die Registrierung werden Benutzername, E-Mail-Adresse und Passwort ben&ouml;tigt.</p>
        <p>Die allgemeinen Gesch&auml;ftsbedingungen (&bdquo;AGB&ldquo;) regeln das Vertragsverh&auml;ltnis zwischen Nitrado und den Kunden, welche die Serverdienste nutzen (nachfolgend auch &bdquo;Kunde&ldquo; genannt).</p>
        <p><br/></p>
        <p>II. Leistungen</p>
        <p>Nitrado bietet ihren Kunden &uuml;ber das Internet-Portal www.nitrado.net die M&ouml;glichkeit, kostenpflichtig f&uuml;r einen bestimmten Zeitraum Serverdienste anzumieten.</p>
        <p>Nitrado wird auf Wunsch des Kunden bei der Verschaffung und/oder Pflege von Domains im Verh&auml;ltnis zwischen dem Kunden und der jeweiligen Organisation zur Domain-Vergabe kostenpflichtig als Vermittler t&auml;tig. Nitrado hat auf die Domain-Vergabe keinen Einfluss und &uuml;bernimmt keine Gew&auml;hr daf&uuml;r, dass die f&uuml;r den Kunden beantragten Domains &uuml;berhaupt zugeteilt werden und/oder zugeteilte Domains frei von Rechten Dritter sind oder auf Dauer Bestand haben. Nachfolgende Regelungen sind bei der Verschaffung und/oder Pflege von Domains noch zu beachten:</p>
        <p>a) Der Kunde garantiert, dass die von ihm beantragte Domain keine Rechte Dritter verletzt. Ein etwaiger Verlust der Domain des Kunden ist Nitrado umgehend anzuzeigen.</p>
        <p><br/></p>
        <p>b) Soweit der Kunde zu einer von Nitrado vermittelten oder einer von Nitrado gepflegten Domain noch keine Inhalte bereit gestellt hat, ist Nitrado berechtigt unentgeltlich eigene Inhalte wie Werbung f&uuml;r sich selbst oder Dritte einzustellen.</p>
        <p><br/></p>
        <p>c) K&uuml;ndigt der Kunde eine Domain so kann diese von Nitrado bis zum Ablauf der tats&auml;chlichen Nutzungsfrist unentgeltlich f&uuml;r eigene Inhalte wie Werbung f&uuml;r sich selbst oder Dritte verwendet werden. W&uuml;nscht Kunde eine solche Nutzung durch Nitrado nicht, muss Kunde in Textform eine sofortige L&ouml;schung der Domain beantragen.</p>
        <p><br/></p>
        <p>Die Inanspruchnahme der Leistungen von Nitrado setzt die Registrierung als Kunde voraus. Die Registrierung selbst ist kostenlos. Nitrado kann die Registrierung eines Kunden jederzeit ohne Angaben von Gr&uuml;nden ablehnen. Zur Registrierung hat der Kunde das Registrierungsformular auszuf&uuml;llen; als Zugangsdaten w&auml;hlt der Kunde einen Benutzername und ein Passwort.</p>
        <p>Die Serverdienste d&uuml;rfen nur zu den von Nitrado vorgegebenen Zwecken genutzt werden. Es ist untersagt, gesetzeswidrige Inhalte auf dem zur Verf&uuml;gung gestellten Speicherplatz zu speichern oder gesetzeswidrige Textinhalte &uuml;ber die Kommunikationsm&ouml;glichkeiten des Servers zu verbreiten.</p>
        <p>Die Nutzung des Internet-Portals von Nitrado und seiner Funktionen besteht nur im Rahmen des aktuellen Stands der Technik. Zeitweilige Beschr&auml;nkungen k&ouml;nnen sich durch technische St&ouml;rungen wie z. B. Unterbrechung der Telekommunikation, Stromversorgung, Hard- und Softwarefehler ergeben.</p>
        <p>III. Vertragsschluss, Preisangebot, Zahlungsbedingungen</p>
        <p>Die von Nitrado auf dem Internet-Portal aufgef&uuml;hrten Leistungen und die Bestellm&ouml;glichkeiten stellen lediglich eine Aufforderung an den Kunden dar, seinerseits ein Angebot abzugeben. Ein verbindlicher Vertrag zwischen Nitrado und dem Kunden kommt erst mit der erfolgreichen Registrierung gem. Ziffer I. und Bestellung gem. Ziffer V. 3.und 4. zustande.</p>
        <p>Um die von Nitrado auf dem Internet-Portal aufgef&uuml;hrten Leistungen bestellen zu k&ouml;nnen, muss der Kunde seinen Account mit einer Vorauszahlung aufladen. N&auml;heres ist unter Ziffer V. geregelt.</p>
        <p>Kunden, die Verbraucher i. S. d. &sect; 312 d Abs. 1 BGB sind, haben keinen Anspruch auf Ausstellung einer Rechnung durch Nitrado. Nitrado kommt der Pflicht zur Erstellung einer schriftlichen Empfangsbest&auml;tigung in Textform durch Ausweis der Einzelaufladung in der Account&uuml;bersicht des Kunden nach. Der Kunde hat jederzeit die M&ouml;glichkeit, einen Ausdruck seiner Account&uuml;bersicht zu erstellen.</p>
        <p>IV. Vorschriften f&uuml;r die Registrierung</p>
        <p>Kunde mit unbeschr&auml;nkter Nutzungsm&ouml;glichkeit kann nur jede unbeschr&auml;nkt gesch&auml;ftsf&auml;hige, nat&uuml;rliche Person, Personengesellschaft oder eine juristische Person werden.</p>
        <p>Minderj&auml;hrige Kunden erhalten eine beschr&auml;nkte Nutzungsm&ouml;glichkeit. Mit Registrierung sichern die minderj&auml;hrigen Kunden zu, dass eine Einwilligung der Erziehungsberechtigten f&uuml;r die Nutzung der Serverdienste von Nitrado vorliegt. Nitrado ist jederzeit berechtigt, eine Einwilligung der Erziehungsberechtigten in Textform anzufordern.</p>
        <p>Zur Einhaltung der Vorgaben des Jugendschutzes beh&auml;lt sich Nitrado die Durchf&uuml;hrung eines Altersverifikationsverfahrens vor. Die Altersverifikation kann automatisiert durch eine Schl&uuml;ssigkeitspr&uuml;fung auf Grundlage der durch den Kunden angegebenen Daten erfolgen. Nitrado ist jederzeit berechtigt, einen geeigneten Nachweis zur Altersverifikation anzufragen.</p>
        <p>Der Kunde hat die im Registrierungsformular abgefragten Daten vollst&auml;ndig und korrekt anzugeben. Eine Registrierung mit fremden oder sonst unzutreffenden Angaben ist untersagt.</p>
        <p>V. Bezahlung der Leistungen durch Aufladung des Accounts</p>
        <p>Um es dem Kunden zu erm&ouml;glichen, die Leistungen von Nitrado unkompliziert und im gew&uuml;nschten Umfang sofort abrufen zu k&ouml;nnen, l&auml;dt der Kunde von Nitrado seinen Account mit einer Vorauszahlung in H&ouml;he eines vom Kunden zu bestimmenden Geld-Betrags mit den auf dem Internet-Portal von Nitrado angebotenen Zahlungsmitteln auf. Der Wert der Aufladung wird dem Kunden in der Account&uuml;bersicht angezeigt. L&auml;dt ein Kunde seinen Account mehrmals auf k&ouml;nnen die Werte der Einzelaufladungen zusammen ausgewiesen werden.</p>
        <p>Aufladungen k&ouml;nnen ausschlie&szlig;lich &uuml;ber das unter der URL www.nitrado.net angebotene Internetportal und nur f&uuml;r die Bestellung von Nitrado angebotenen Leistungen verwendet werden. Die Aufladung des Accounts erlaubt die Wahl einer Dienstleistung oder von Dienstleistungen bis zum jeweiligen Gegenwert des in der Account&uuml;bersicht ausgewiesenen Wertes.</p>
        <p>Der Vertrag &uuml;ber den Bezug der gew&uuml;nschten Dienstleistung(en) kommt mit der verbindlichen Bestellung des Kunden auf vorgenanntem Internetportal zustande. Der zum Zeitpunkt der Bestellung g&uuml;ltige Preis wird in der bei der Bestellung ausgewiesenen und vom Kunden best&auml;tigten H&ouml;he in der Account&uuml;bersicht abgezogen bis die verf&uuml;gbaren Werte in dieser aufgebraucht sind.</p>
        <p>Eine Bestellung, mit welcher der in der Account&uuml;bersicht ausgewiesene Wert &uuml;berschritten w&uuml;rde, wird technisch nicht angenommen. Der Kunde muss in so einem Fall zun&auml;chst seinen Account aufladen, bevor er bestellen kann.</p>
        <p>Der in der Account&uuml;bersicht ausgewiesene Wert wird nicht ausgezahlt und kann nicht gegen Bargeld eingetauscht werden.</p>
        <p>Die aufgeladenen Einzelwerte sind bis zum Ende des dritten (3.) Jahres nach ihrer Aufladung einl&ouml;sbar. Danach verfallen sie und werden aus der Account&uuml;bersicht gel&ouml;scht.</p>
        <p>Va. Fremdaufladung</p>
        <p>Mit den auf dem Internet-Portal von Nitrado angebotenen Zahlungsmitteln kann eine Fremdaufladung in H&ouml;he eines zu bestimmenden Geld-Betrags erfolgen, mit der der Account eines registrierten Kunden von Nitrado aufgeladen werden kann. Dies ist &uuml;ber den Button &bdquo;Aufladen f&uuml;r&hellip;&ldquo; m&ouml;glich. Der Aufladende tr&auml;gt dabei seinen Ingame Benutzernamen / Verwendungszweck ein, damit der Aufladungsempf&auml;nger nachvollziehen kann, wer seinen Account aufladen m&ouml;chte.</p>
        <p>Der Aufladungsempf&auml;nger kann dann die Aufladung annehmen. Der Wert der Fremdaufladung wird dem Aufladungsempf&auml;nger nach Annahme in seiner Account&uuml;bersicht angezeigt. F&uuml;r die Verwendung des so erhaltenen Aufladungswerts gelten f&uuml;r ihn die Regelungen unter V.</p>
        <p>Vb. Server unterst&uuml;tzen</p>
        <p>Mit den auf dem Internet-Portal von Nitrado angebotenen Zahlungsmitteln ist &uuml;ber den Button &bdquo;Server unterst&uuml;tzen&ldquo; das Aufladen des Accounts eines so genannten Professional Owner durch einen Mitbenutzer m&ouml;glich, indem dieser eine Fremdaufladung in H&ouml;he eins zu bestimmenden Geld-Betrags vornimmt, mit der der Account des Professional Owner aufgeladen wird.</p>
        <p>Der Aufladende tr&auml;gt dabei seinen Ingame Benutzernamen / Verwendungszweck ein, damit der Professional Owner nachvollziehen kann, wer seinen Account aufladen m&ouml;chte. Au&szlig;erdem versichert der Aufladende, dass zwischen ihm und dem Professional Owner ein Vertrag &uuml;ber die Mitbenutzung von dessen Server zustande gekommen ist.</p>
        <p>Mit der unter Vb. 2. genannten Best&auml;tigung durch den Mitbenutzer erh&auml;lt der Professional Owner eine Nachricht dar&uuml;ber, dass ihm von einem Mitbenutzer eine Fremdaufladung angeboten wird. Der Professional Owner kann die Fremdaufladung best&auml;tigen.</p>
        <p>VI. K&uuml;ndigung des Accounts</p>
        <p>Der Kunde kann die Vertragsbeziehung zu Nitrado jederzeit zum Ende der Laufzeit der von ihm gebuchten Serverdienste k&uuml;ndigen. Sofern hierf&uuml;r kein wichtiger Grund seitens Nitrado bestand, kommt eine Erstattung von Accountwerten nicht in Betracht.</p>
        <p>Nitrado kann das Recht des Kunden zur Nutzung des Internetportals, des Nitrado-Service und/oder der Account&uuml;bersicht beenden, wenn Nitrado feststellt, dass der Kunde gegen den Vertrag oder diese Gesch&auml;ftsbedingungen versto&szlig;en hat. Im Falle einer Beendigung durch Nitrado k&ouml;nnen Accountwerte nicht erstattet werden.</p>
        <p>Nitrado l&ouml;scht die Daten eines registrierten Kunden, wenn der Kunde sich l&auml;nger als ein Jahr nicht mehr mit seinen Benutzerdaten auf der Internetplattform angemeldet hat und &uuml;ber keinen Accountwert (s. V.) mehr verf&uuml;gt oder dieser durch Zeitablauf verfallen ist (s. V. 6.).</p>
        <p>Das Gesch&auml;ft von Nitrado kann sich im Laufe der Zeit &auml;ndern und so beh&auml;lt sich Nitrado das Recht vor, den Nitrado-Service zu ver&auml;ndern. Ebenfalls bleibt das Recht vorbehalten, den Nitrado-Service oder die Nutzung des Kunden hieran ganz oder teilweise auszusetzen oder einzustellen. Falls Nitrado dieses Recht aus&uuml;bt, kann der Kunde einen Anspruch auf R&uuml;ckerstattung haben, wenn noch ein Accountwert f&uuml;r ihn in der Account&uuml;bersicht ausgewiesen ist, und kein Fall von V. 6. gegeben ist.</p>
        <p>VII. Datenschutzerkl&auml;rung</p>
        <p>Die personenbezogenen Daten des Kunden werden unter Einhaltung des Datenschutzrechts in dem f&uuml;r die Durchf&uuml;hrung des Vertrags erforderlichen Umfang im automatisierten Verfahren erhoben, gespeichert, bearbeitet und genutzt. Nitrado ist berechtigt, die Daten an nat&uuml;rliche oder juristische Personen im Rahmen der Abwicklung des Gesch&auml;ftsverkehrs weiterzugeben.</p>
        <p>Der Kunde kann seine Einwilligung zur Speicherung der Daten jederzeit ohne Angabe von Gr&uuml;nden gegen&uuml;ber Nitrado widerrufen. Sollen die Daten des Kunden endg&uuml;ltig gel&ouml;scht werden, gen&uuml;gt eine Mitteilung an Nitrado. Es wird darauf hingewiesen, dass unter Umst&auml;nden bestimmte personenbezogene Daten aufgrund gesetzlicher oder vertraglicher Aufbewahrungspflichten erst nach einem bestimmten Zeitraum gel&ouml;scht werden d&uuml;rfen. In diesem Fall erfolgt bis zur L&ouml;schung eine Sperrung der davon betroffenen Daten. Mit L&ouml;schung der Daten wird auch automatisch das bestehende Recht des Kunden zur Nutzung des Internetportals, des Nitrado-Service und/oder der Account&uuml;bersicht beendet.</p>
        <p>Nitrado weist darauf hin, dass sog. Cookies bzw. andere Techniken eingesetzt werden, um eine Auswertung des Nutzungsverhaltens zu erm&ouml;glichen. Dies erfolgt anonymisiert ohne dass ein R&uuml;ckschluss auf den Kunden m&ouml;glich ist. Die Speicherung dieser Daten erfolgt nur bis zur Auswertung.</p>
        <p>Ausdr&uuml;cklich weist Nitrado auf seine ausf&uuml;hrliche Datenschutzerkl&auml;rung, welche unter nachfolgenden Link aufgerufen werden kann hin.</p>
        <p>VIII. Widerrufsrecht</p>
        <p>Der Kunde, der Verbraucher i. S .d. &sect; 312 d Abs.1 BGB ist hat das Recht, binnen vierzehn Tagen ohne Angabe von Gr&uuml;nden diesen Vertrag zu widerrufen.</p>
        <p><br/></p>
        <p>Die Widerrufsfrist betr&auml;gt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
        <p><br/></p>
        <p>Um das Widerrufsrecht auszu&uuml;ben, muss der Kunde per Post, telefonisch, oder per E-Mail mittels einer eindeutigen Erkl&auml;rung (z. B. ein mit der Post versandter Brief, Telefax oder E-Mail) &uuml;ber seinen Entschluss, diesen Vertrag zu widerrufen, Nitrado informieren. Der Kunde kann daf&uuml;r das beigef&uuml;gte Muster-Widerrufsformular verwenden, welches jedoch nicht vorgeschrieben ist.</p>
        <p><br/></p>
        <p>Der Widerruf ist zu richten an:</p>
        <p>marbis GmbH</p>
        <p>Griesbachstr. 10</p>
        <p>76185 Karlsruhe, Deutschland</p>
        <p>Telefax: 0800-100 3860</p>
        <p>E-Mail: support@nitrado.net / Support-Ticket</p>
        <p>Telefon: DE/EN: 0721 7540 44 44</p>
        <p>US: 775-321-2102</p>
        <p><br/></p>
        <p>F&uuml;r Anruf in das deutsche Festnetz (+49): Geb&uuml;hren sind abh&auml;ngig vom jeweiligen Anbieter. Anrufe aus dem Mobilfunk abweichend, max. 42 Cent/Min inkl. USt. Kosten f&uuml;r Anrufe ins Ausland bitte bei Telefonanbieter erfragen.</p>
        <p><br/></p>
        <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass die Mitteilung &uuml;ber die Aus&uuml;bung des Widerrufsrechts vor Ablauf der Widerrufsfrist abgesendet wurde.</p>
        <p><br/></p>
        <p>Ein Muster-Widerrufsformular kann hier heruntergeladen werden.</p>
        <p><br/></p>
        <p>Folgen des Widerrufs Im Falle eines wirksamen Widerrufs sind die beiderseits empfangenen Leistungen unverz&uuml;glich, sp&auml;testens binnen vierzehn Tagen ab dem Tag zur&uuml;ckzuzahlen, an dem die Mitteilung &uuml;ber den Widerruf dieses Vertrags bei Nitrado eingegangen ist. F&uuml;r diese R&uuml;ckzahlung verwendet Nitrado dasselbe Zahlungsmittel, das der Kunde bei der urspr&uuml;nglichen Transaktion eingesetzt hat, es sei denn, es wurde ausdr&uuml;cklich etwas anderes vereinbart; in keinem Fall werden wegen dieser R&uuml;ckzahlung Entgelte berechnet. Hat der Kunde verlangt, dass die Dienstleistungen w&auml;hrend der Widerrufsfrist beginnen soll, so hat der Kunde Nitrado einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Nitrado von der Aus&uuml;bung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>
        <p><br/></p>
        <p>IX. Haftung</p>
        <p>Nitrado haftet dem Kunden gegen&uuml;ber nach den gesetzlichen Bestimmungen f&uuml;r Sch&auml;den aus der Verletzung des Lebens, des K&ouml;rpers oder der Gesundheit, die auf einer vors&auml;tzlichen oder fahrl&auml;ssigen Pflichtverletzung von Nitrado beruhen sowie f&uuml;r sonstige Sch&auml;den, die auf einer vors&auml;tzlichen oder grob fahrl&auml;ssigen Pflichtverletzung sowie Arglist beruhen.</p>
        <p>Dar&uuml;ber hinaus haftet Nitrado f&uuml;r Sch&auml;den nach zwingenden gesetzlichen Vorschriften sowie im Fall der &Uuml;bernahme von Garantien. Soweit nicht einer der vorbezeichneten F&auml;lle vorliegt, haftet Nitrado f&uuml;r leichte Fahrl&auml;ssigkeit nur, wenn deren gesetzliche Vertreter, leitende Angestellte oder sonstige Erf&uuml;llungsgehilfen eine wesentliche Vertragspflicht verletzen. In diesen F&auml;llen ist die Haftung auf typische und vorhersehbare Sch&auml;den begrenzt. In allen anderen F&auml;llen haftet Nitrado nicht f&uuml;r leichte Fahrl&auml;ssigkeit. Nitrado haftet nicht f&uuml;r mittelbare bzw. Folgesch&auml;den.</p>
        <p>Nitrado &uuml;bernimmt keine Haftung f&uuml;r Eingabe-, &Uuml;bertragungs- und / oder Auswertungsfehler, da diese au&szlig;erhalb des Einflussbereichs von Nitrado liegen.</p>
        <p>Kunde ist f&uuml;r Inhalte, die dieser ins Internet stellt, selbst verantwortlich und haftet f&uuml;r eventuelle Rechtsverst&ouml;&szlig;e.</p>
        <p>Nitrado hat das Recht, offensichtliche Fehler, insbesondere bei der Angabe von Informationen und Preisen auch nachtr&auml;glich zu berichtigen. Ein Schadensersatzanspruch des Kunden ist in diesen F&auml;llen ausgeschlossen.</p>
        <p>X. &Auml;nderungen der AGB</p>
        <p>Nitrado ist berechtigt, den Inhalt dieser AGB mit Zustimmung des Kunden zu &auml;ndern, sofern die &Auml;nderung unter Ber&uuml;cksichtigung der Interessen der Nitrado f&uuml;r den Kunden zumutbar ist. Die Zustimmung zur &Auml;nderung gilt als erteilt, sofern der Kunde der &Auml;nderung nicht binnen vier Wochen nach Zugang der &Auml;nderungsmitteilung widerspricht. Nitrado verpflichtet sich, den Kunden mit der &Auml;nderungsmitteilung auf die Folgen eines unterlassenen Widerspruchs hinzuweisen. Widerspricht der Kunde innerhalb dieser Frist, ist Nitrado berechtigt, das Recht des Kunden zur Nutzung des Internetportals, des Nitrado-Service und/oder der Account&uuml;bersicht zu beenden.</p>
        <p><br/></p>
        <p>XI. Missbrauchsverbot</p>
        <p>Missbr&auml;uchliche Verhaltensweisen auf der Plattform von Nitrado oder den von Nitrado betriebenen Servern ist untersagt. Missbrauch liegt insbesondere, aber nicht abschlie&szlig;end dann vor, wenn der Kunde:</p>
        <p><br/></p>
        <p>die Vorschriften zur Registrierung nicht einh&auml;lt;</p>
        <p>unberechtigt ein Konto bei Nitrado er&ouml;ffnet;</p>
        <p>betr&uuml;gt oder versucht zu betr&uuml;gen, insbesondere indem er Mechanismen, Software oder sonstige Scripts in Verbindung mit der Nutzung des Internet-Portals verwendet, die das Funktionieren des Portals st&ouml;ren;</p>
        <p>absichtlich eine St&ouml;rung / Fehlfunktion herbeigef&uuml;hrt hat;</p>
        <p>den zur Verf&uuml;gung stehenden Server bzw. die Programme auf dem Server manipuliert,</p>
        <p>sonstige sich aus gesetzlichen Bestimmungen, den AGB der Nitrado sowie deren allgemeinen Verhaltensregel ergebenden Pflichten und / oder Rechte anderer verletzt.</p>
        <p>XII. Sonstige Bestimmungen</p>
        <p>Sollte eine Bestimmung der Gesch&auml;ftsbedingungen ganz oder teilweise rechtsunwirksam sein oder werden, so wird die G&uuml;ltigkeit der &uuml;brigen Bestimmungen dadurch nicht ber&uuml;hrt. Ist eine Bestimmung ung&uuml;ltig, tritt an deren Stelle die gesetzlich zul&auml;ssige Regelung.</p>
        <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet und nehmen an einem solchen Verfahren auch nicht teil. Nitrado weist Kunden darauf hin, dass die EU-Kommission gem&auml;&szlig; der Richtlinie 2013/11/EU eine Internetplattform zur Online-Beilegung von Streitigkeiten (&bdquo;OS-Plattform&ldquo;) zwischen Unternehmern und Verbrauchern eingerichtet hat. Diese Internetplattform ist unter folgendem Link erreichbar: ec.europa.eu/consumers/odr/</p>
        <p>Die Vertragssprache ist deutsch.</p>
    </div>
)

const PrivacyMarkup = props => (
    <div>
        <InfoMarkup title="Privacy Police" onClose={props.onClose}/>
        <p>Privacy Policy *Example*</p>
        <p>This website is operated by [school/Trust name] and whose registered address is [school/Trust address] (&ldquo;We&rdquo;) are committed to protecting and preserving the privacy of our visitors when visiting our site or communicating electronically with us.</p>
        <p><br/></p>
        <p>This policy sets out how we process any personal data we collect from you or that you provide to us through our website. We confirm that we will keep your information secure and that we will comply fully with all applicable UK Data Protection legislation and regulations. Please read the following carefully to understand what happens to personal data that you choose to provide to us, or that we collect from you when you visit this site. By visiting [URL of school/Trust website] (our website) you are accepting and consenting to the practices described in this policy.</p>
        <p><br/></p>
        <p>Types of information we may collect from you</p>
        <p>We may collect, store and use the following kinds of personal information about individuals who visit and use our website:</p>
        <p><br/></p>
        <p>Information you supply to us. You may supply us with information about you by filling in forms on our website. This includes information you provide when you submit a contact/enquiry form [list any other active forms on your website (ie. Request a Prospectus Form, Application Form, Report and Absence Form, etc.]. The information you give us may include your name, address, e-mail address and phone number, [list any other types of information you collect via other active forms on your website (ie. child&rsquo;s name, child&rsquo;s date of birth, etc.)].</p>
        <p><br/></p>
        <p>Information our website automatically collects about you. With regard to each of your visits to our website we may automatically collect information including the following:</p>
        <p><br/></p>
        <p>technical information, including a truncated and anonymised version of your Internet protocol (IP) address, browser type and version, operating system and platform;</p>
        <p>information about your visit, including what pages you visit, how long you are on the site, how you got to the site (including date and time); page response times, length of visit, what you click on, documents downloaded and download errors.</p>
        <p>[Describe any other types of information you may collect through third party services you may have enabled on your website not linked to Cleverbox (ie. other tracking, marketing or SEO services)]</p>
        <p><br/></p>
        <p>Cookies</p>
        <p><br/></p>
        <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them see our Cookie Policy [Make this link to the cookie policy page on your website that will be automatically updated by Cleverbox].</p>
        <p><br/></p>
        <p>How we may use the information we collect</p>
        <p>We use the information in the following ways:</p>
        <p><br/></p>
        <p>Information you supply to us. We will use this information:</p>
        <p><br/></p>
        <p>to provide you with information and/or services that you request from us;</p>
        <p>[Describe any other uses of the information you collect (ie. other marketing communications to individuals who have requested a prospectus)]</p>
        <p><br/></p>
        <p>Information we automatically collect about you. We will use this information:</p>
        <p><br/></p>
        <p>to administer our site including troubleshooting and statistical purposes;</p>
        <p>to improve our site to ensure that content is presented in the most effective manner for you and for your computer;</p>
        <p>security and debugging as part of our efforts to keep our site safe and secure.</p>
        <p>This information is collected anonymously and is not linked to information that identifies you as an individual. We use Google Analytics to track this information. Find out how Google uses your data at https://support.google.com/analytics/answer/6004245. [Make this link to the GoogleAnalytics page]</p>
        <p><br/></p>
        <p>Disclosure of your information</p>
        <p>Any information you provide to us will either be emailed directly to us or may be stored on a secure server located near Dublin within the Republic of Ireland. We use a trusted third party website and hosting provider (Cleverbox) to facilitate the running and management of this website. Cleverbox meet high data protection and security standards and are bound by contract to keep any information they process on our behalf confidential. Any data that may be collected through this website that Cleverbox process, is kept secure and only processed in the manner we instruct them to. Cleverbox cannot access, provide, rectify or delete any data that they store on our behalf without permission.</p>
        <p><br/></p>
        <p>We do not rent, sell or share personal information about you with other people or non-affiliated companies. [Check this statement is in accordance with your internal data processing activities and outline any other storage of information inline with your internal data policy (ie. Do you have a database of personal data stored on third party platforms such as MailChimp?)]</p>
        <p><br/></p>
        <p>We will use all reasonable efforts to ensure that your personal data is not disclosed to regional/national institutions and authorities, unless required by law or other regulations.</p>
        <p><br/></p>
        <p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.</p>
        <p><br/></p>
        <p>Third party links</p>
        <p>Our site may, from time to time, contain links to and from the third party websites. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.</p>
        <p><br/></p>
        <p>Your rights &ndash; access to your personal data</p>
        <p>You have the right to ensure that your personal data is being processed lawfully (&ldquo;Subject Access Right&rdquo;). Your subject access right can be exercised in accordance with data protection laws and regulations. Any subject access request must be made in writing to [insert school/Trust Data Controller contact details]. We will provide your personal data to you within the statutory time frames. To enable us to trace any of your personal data that we may be holding, we may need to request further information from you. If you have a complaint about how we have used your information, you have the right to complain to the Information Commissioner&rsquo;s Office (ICO).</p>
        <p><br/></p>
        <p>Changes to our privacy policy</p>
        <p>Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy.</p>
        <p><br/></p>
        <p>Contact</p>
        <p>Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to [name and address or e-mail address].</p>
    </div>
)

const InfoMarkup = props => 
    <div className="flex items-center justify-between mb-5">
        <h1 className="text-gray-700 text-2xl leading-5 font-semibold font-heading">{props.title}</h1>
        <CloseButton onClose={props.onClose}/>
    </div>

const CloseButton = props => (
    <span className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={props.onClose} className="cursor-pointer h-7 w-7 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full border-2 border-gray-100 hover:border-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
        </svg>        
    </span>
)

class InfoContent extends Component {

    renderInfo(active) {
        switch(active) {
            case 'imprint':
                return <ImprintMarkup onClose={this.props.onClose}/>
            case 'tos':
                return <TOSMarkup onClose={this.props.onClose}/>
            case 'privacy':
                return <PrivacyMarkup onClose={this.props.onClose}/>
            default: return null;
        }
    }

    render() {
        if(this.props.active === '') return <div></div>;
        return <ScrollSection name="info" className="px-7 py-10 rounded-xl bg-white">
            {this.renderInfo(this.props.active)}
        </ScrollSection>;
    }
}

export default InfoContent;