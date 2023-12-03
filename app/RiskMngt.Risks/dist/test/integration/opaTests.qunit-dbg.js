sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskMngt/Risks/test/integration/FirstJourney',
		'RiskMngt/Risks/test/integration/pages/RisksList',
		'RiskMngt/Risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskMngt/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);