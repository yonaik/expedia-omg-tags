b['cabinClass'] = '';
if (utag.isCruiseCO() && b['entity.checkout.cruise.cabinCategory'])
{
    b['cabinClass'] = b['entity.checkout.cruise.cabinCategory'];
}
else if (utag.isFRateDetails() && b.entity.flight.flight.flight.legs != "undefined")
{
    var numLegs = '0';
    var numSegments = '0';
    var cabinClass = "";
    numLegs = b.entity.flight.flight.flight.legs.length;
    for (var i = 0; i < numLegs; i++) {
        numSegments = b.entity.flight.flight.flight.legs[i].segments.length;
            for (var j = 0; j < numSegments; j++){
                cabinClass = cabinClass + b.entity.flight.flight.flight.legs[i].segments[j].cabinClass + "|";
            }
        }
    b["cabinClass"] = cabinClass.slice(0, -1);
}
else if ((utag.isPCO() || utag.isFCO()) && b['entity.checkout.flightOffer.flight.legs.0.segments.0.cabinClass'])
{
    b['cabinClass'] = b['entity.checkout.flightOffer.flight.legs.0.segments.0.cabinClass'];
}
else if (utag.isPRateDetails() && b['entity.tripDetails.flightOffer.flight.legs.0.segments.0.cabinClass'])
{
    b['cabinClass'] = b['entity.tripDetails.flightOffer.flight.legs.0.segments.0.cabinClass'];
}
else if (b.isFlightSearchResults && b["entity.flightSearch.searchParameters.travelClass"] != undefined){
    b["cabinClass"] = b["entity.flightSearch.searchParameters.travelClass"];
}
else if (b.isPackageHotelSeachResult && b["entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass"] != undefined){
    b["cabinClass"] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass"];
}
else if ((utag.isCruiseTP() || utag.isCruiseCabinN()) && b['entity.cruise.cabinCategory']) {
    b['cabinClass'] = b['entity.cruise.cabinCategory'];
}
else if (utag.isMCO() && b['entity.checkout.flightOffers.0.flight.legs.0.segments.0.cabinClass']) {
    b['cabinClass'] = b['entity.checkout.flightOffers.0.flight.legs.0.segments.0.cabinClass'];
}
else if (utag.isPCF() && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass']) {
    b['cabinClass'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass'];
}
