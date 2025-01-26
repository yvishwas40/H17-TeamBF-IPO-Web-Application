const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// Enable CORS
app.use(cors());  

// Serve static assets from 'public/assets' directory
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

// Sample FAQ data
const faqData = [
  {
    question: "How many lots should I apply for IPO?",
    answer: "The number of lots depends on your investment goals and the IPO's price band."
  },
  {
    question: "What is IPO GMP?",
    answer: "IPO GMP stands for Grey Market Premium, which indicates the expected listing price of an IPO."
  },
  {
    question: "Who decides the IPO price band?",
    answer: "The IPO price band is decided by the company in consultation with its lead managers and underwriters."
  },
  {
    question: "How is the lot size calculated?",
    answer: "Lot size is determined by the company and SEBI, usually based on the face value of the shares."
  }
  // Add more FAQs here...
];

const ipoData = [
    {
      title: "Nova Agritech Ltd.",
      logo: "https://s3-alpha-sig.figma.com/img/24e2/5de8/b303b6ac52168faea60505f339e99540?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LBHYnRTzzWAywCZdpdpvyVvNjSCt7O4f7RWH67jQKG-eD8SjtVdfK6cSZMesDnt--OHrkZO7kQ9zXmR5rSUZetu-rQ45aGZhiDBkde8uiC-H70~XmqkOROBoflZxeqnhLdtSUvzZfmj5Nxd46yN8ikoxvzp3nzYk8F03p-dzxlbu6oRph0mRHmcmYtGVn3LlQgYpoplFRev89LFWxrMiyAd9JuT~Ju4GS9-a025-AmQ5c1GGZxAtN0CqvXYe-zNYOtn11N9CENhldA82JUL-iHeVKgQFvYDSdJoR155qGgQ1qvKyKpp4NFM4alsX~iK-XdqZM3QfiC6HKHV175fJAQ__",  // Dummy logo for now
      priceBand: "₹ 39 - ₹ 41",
      issueSize: "₹ 143.81 Cr.",
      issueType: "Book Built",
      listingDate: "2024-01-30",
      openDate: "2024-01-22",
      closeDate: "2024-01-24",
      status: "OPEN",
    },
    {
      title: "EPACK Durable Ltd.",
      logo: "https://s3-alpha-sig.figma.com/img/f6fe/ad0c/34893c0e7bb286ad16d46803e4f673bb?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mBcD~2DBy2PlgK3~okgXBfVsxFPDK7cOWZ-1SzpJwGKSu1x1qD4kGi8JWQwEbBUgTEG7MU70YYTw5rDyPM4V3~o0GRYP7aRFvMTSvAvAMIBFUn1GQTaD4rUlOoXwksLrQAR54vJInOxL-enpDqPChIvBGQxs2LofityLaeMIdptKHO7jF6FrBmPoygcMyNdcmDyHNubH7i1IFF6Som~pmXBQiP81t1RiB~0rSVF1IGT0xkMTS5TA5jYUsYt9FoZ~TxGGHlJK-WSmHPspuxvymQnlbePyg6hjgfLCfcPkcqrnnNkQUeks2SJ0z4V2b0biTxNBhU~58rrM5xvPmnfKlw__",  // Dummy logo for now
      priceBand: "₹ 218 - ₹ 230",
      issueSize: "₹ 640.05 Cr.",
      issueType: "Book Built",
      listingDate: "2024-01-29",
      openDate: "2024-01-19",
      closeDate: "2024-01-23",
      status: "OPEN",
    },
    {
      title: "RK Swamy Ltd.",
      logo: "https://s3-alpha-sig.figma.com/img/7f4e/46ef/57b83780b069911267f2b48171245f44?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ammd0MKFg5egEoybYt7IR2ne1cOSc-V1kRellWjVG2F-IhoXj04MKPNIAOXKbd1F764V58WdJrQLz6ynvHzlUsE-st9keC5TnAA3EAQwTmui693eawyDICTJMUFbAe9O1LtGEfH92JBXtA0rm~S7eF9PHpXjncmaFdVzq3RWe9QQK7YzLogpA~gFdfJfL8RfLTsvB1~gTV3XQfWGfZe-2HW~hjyu9jbHTPwm7vtYXHbrkXcwQKndwwP35eU4NiWjDuClwDgXqKeSCn0WTURHcQ6-ry0PgLNqyp3eqnWlsV~KD3vQcA62HgkvON7NmKUGol1Qk1jGIhynijQFKTAlrw__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "Oravel Stays Ltd.",
      logo: "https://s3-alpha-sig.figma.com/img/1008/13cd/f4f851852154b0779a22eff26cc6dd50?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ql9Y3qRLNwa32v~9XU89ubq6KLraDQN6ZdyFpSsHGK~hKCsyTOhSx4iTN8wH9v8PycgqyicKqe28rmnomlJs1He02HUhPfHWv8aEfqD86MwMyJOJPKIYginCyW54jI84QcQ0u8~8zA1bayQSf4q4c3ngkoHc9J3Y5RCcZZRoRBSSwnDMkup~itgvTlewqF4IPb4pbQpRxVnoMUeLCc~UIfWfqJZ-~Q3kGissW1xCW928DbCROMPLaAIVPSambOmR3D4xnAm9TavS1krGbcR5pz3G5Coml3gw4XemnsfVwPdYg6fHfjT8L0JCQXnj~o4W0vBsKOUDa5RwcxojTem~dg__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "8430 Cr.",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "Imagine marketing Ltd.",
      logo: "https://s3-alpha-sig.figma.com/img/632f/f133/a98f798ada791325f55620ec54db1797?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EmO7lxRQ4iWJeVnrRiRn207V~-yPZ4VPMPn6X-ptLANvnVd-62YpJXLV9qYmZeTvFhQpOGYzP4axCZmiZ7m0My6AkOkqMk-XhjSmFvk7U1JzyHaarKqIxWeq9cxiDRKXHwa7V55hGietiSPzcW52oO3XOH8YhJEyMsG7tvPgm0PIHc~mjBBgCQXmU7iPoNJ3IuM4hQNO-HJxhUYN4sIi-SBPlfDLSZQ4RDIamzAosqduJ~c7-Q3XekDmPqFuWp0EcGsdWsmTlnYVypXZhkD62uwYa6LX6VMW8mHGkh1EMWsgf0IX10TiEb108uiRWVOd-p6EaCX3tOCZewUmaqFKAg__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "2000 cr.",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "Kids Clinic India Ltd.",
      logo: "https://s3-alpha-sig.figma.com/img/6375/5728/7a958e8202c982ef62cab9c3770ddd4d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CkUATMyB9~bCYO1g-TXFiS7HF8WuhyVj43v4l85geKA884Z4hOV4V7hR~zuhN0zTg6jZv9vfEepNnuAz1afIuzl1YOQbqVcQksszajRiBwtgdQBZCfObEIcVKpWgwyyIIk1dkrBuxecVN81B7SGj8aE9Ro-KOGLL8pVEhaYH2cjIy2xzzouQKm-cY58XIBZJxzix3p7QBZIq2xNDhn2aa279RZVOWlyIB~QcnkDUF5wOgrVKqXPySarbsX-mpuDsZRQrZZ1C6x3TGZ~Zb4MAazJcu2~SQwNkq3kE3cg1yrS7R8FrwCAQzRSeNYUHs1z8P7Cos9zYck4KN-ewyPgFMg__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "OLA Electric Mobility Ltd.",
      logo: "https://s3-alpha-sig.figma.com/img/e367/d5ac/dd6a9844163789868582d12fb946250b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VF8jRonElps4Oom~SUS4xvZcY8LsGB4-1z3bhKu-HelOL5AITWmzYRJrGi2I2J1jp2NlO2k0JI1VUyDPnU3aDvErYKZOGR6B54hlrr3BsdlKfG~neHKT4H2XEk-vwMcHJmBvuHounB7ymVMCaPWlqnLC2DUvoumCKMBPZ58T3wtOJ7JC2gWkvWAaFWKG27iw1dT0m7qLaLHyoTFxIdMwqo7~cz5MpbEZOdn296F~1YG8DMiy48jDFWk4dqrb6PUxH4XKOEBSQPXMhaKCgqnpbOToxWzblNpwS5Apka-gld7I66~NYeLAWUGUaZhHu4THYFZH7AR~yxB-M~zpRtr2nw__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "One Mobikwik Systems Ltd.",
      logo: "https://s3-alpha-sig.figma.com/img/bdf0/ddaf/8530c251014480272338ad51646dc896?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SojE6hhTj3CP6EdCDfBXYGIB0QE4IXbeo1NEnUNl84l8vWkKL5BP7EwE~l10McDNye4RAU3CPPYRmL1CIfBKm~0eseU3cKPFOIFmt3YGnhcVwkoGaLc9hB2VNIPyxEIPoSSii7hTFFWC2~Fb8YOJ~k4OlgjodpXjFKIldNml1EMPJQDq-TV64nl0ZcnCiBkCh~iPSaV25UQiCxQE~5~qxSfIcfpbUSvxHZKwS79ai1DeZUzcN5pMRrwPO2pnj0UV-UHns0Zw88wuA-AHuxeXyEhtiFZOOEqaAYxR-DRFEP-f8Lx-rO-7V2Dq7MfMtbJOa2~O7ECWrL-wzGFc6HbqOg__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "1900 Cr.",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "Le Travenues Technology",
      logo: "https://s3-alpha-sig.figma.com/img/6e30/e817/f1e371700bd5ef4c8f6d21f1f0d27581?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K6uHy2c0Jr7azB663DAU28mK0zZ8XWcfgg4cFURWJVWUg2zuBDrhK5jXtxzwKvhze9sbkGpXNB6Rmwn83gOD8brAksAv1K~hcyrG1jVZW51QRIlndFLl0DC7xCehIBn~ELArUPFZGlStT~LlFt0jSZykREXRdkEKyKlT0A9uUwCRg9m5lZj9R7Gk7PTL1uUD3csSjLZtdr~DHnUaYAx-YsC-J6qT6ho6G19SwLkEYzJXRD12glLxpHaqWH9Zd-DYPLRbVum20VlCLDK10nCrSBwv1GoJpDrvGnpEY1vFA-iVdFo-pRQceL0tEYiaP7ot-KJR6Ohffi9L1sdj5V~wfQ__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "1600 Cr.",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "CMR Green Technologies",
      logo: "https://s3-alpha-sig.figma.com/img/5495/3b1a/44fc4f61a07da026bc0abdfbfe0b9335?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NNLANtH5y2Sk7ivviW7Aauu0fwcn86UyLMMAOlylHxkVdKIL~FQrFo3EFu0EdZsnERIUk-cs6ShjmqtX8xJfXMz7YQwAPDZh6zEieoMB0sgVThLxSHTDuM651d8Z-B7N0LwQoITLJcwBKgrwpHqbu8l~~IdfqhcV4VUFKCXcY3OAb3K6CVbE1X6xgFeVFX7U6lPcBdpa-UkkIcooM5xCvYWP5wpHoXWWIpKFN9rrqIFMj8u0n0pVrpj43jJtuCDLR3WOiR2WanKKQemFeSt4ZVaoA88fVDkFWrq5Jei1fdWC5RqAUxSTHzoA1Dq0vOM1gAoh42vxaJRuyPOL-yu2NQ__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "Wellness Forever",
      logo: "https://s3-alpha-sig.figma.com/img/e298/6571/3434a2b2cde8fb8df25670a13d624a89?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qCe5EsCnhCWfcBLnV0VFypsyTtiXM3Le5vjRnukYLNq-sMBFLuo~GHHzjYHl81r2FXENage4L10-wD~UwiC4peyes4LFQtYpCko~ik2WzA46vBxEe-QhMuFNVke4h~5-JMUEM3izO0~A7VofONjcSKkz3KFOJI5wgmkH7StGIzgiYF~vUc84iEUiy7va5hfZl1T9doEm-VJEwCcdTNCpBgxvKZeeweKfYWpY5jiuyrF0e-nxlExuTjWmSPz1rkEgMKknUpLB8twgDa~TTrmPWQW8e-qclx4fqnf6W81FaLp1eX6TLXh7eXDGY7AmRt1guJD--AP5hdrnkYsy4DZPiA__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    },
    {
      title: "PKH Ventures Ltd.",
      logo: "https://s3-alpha-sig.figma.com/img/b8fa/242f/9a2cc8c4c1fe05e747644f44deaae313?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KFSfylIgrB2~tB~77PjqLX1H9J5DDBa5Bmgxhot8lcduIai8HI2yeKS7Bcpn5W4uh~NIcvgyyemUQE4jDP3aBS0jLoJUifvJd6Cmj~pno07MFYUoxhMcBxgpUBZtH2dP9Ts3yWWbgLe~HJlVpJi47ZkOCLKgBovt0EY74rBobcBRD10uwnlgWm-ebDhOdAhHycQAu-XMxnO6D7De3hpO8BDtvmcJeRCWxxrrRNF0tb06vXUGek3KpgCu4Ngu4qmsu7jnTd1zOWjVP0paT3B5q0Swozb5ELxgOUKgi8IbqNd-mPxnPTho51Nflpd~GAzpHuAFjv1mZo0AN1Jb9BfbGw__",  // Dummy logo for now
      priceBand: "Not Issued",
      issueSize: "Not Issued",
      issueType: "Book Built",
      listingDate: "Not Issued",
      openDate: "Not Issued",
      closeDate: "Not Issued",
      status: "CLOSE",
    }
    // Add more IPOs here...
  ];

// Serve IPO data
app.get('/api/ipo-data', (req, res) => {
  console.log('Fetching IPO data');
  res.json(ipoData);
});

// Serve FAQ data
app.get('/api/faqs', (req, res) => {
  console.log('Fetching FAQ data');
  res.json(faqData);
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
