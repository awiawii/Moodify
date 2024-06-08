'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('coping_tools', [
      {
        coping_tool_id: '1',
        coping_tool_name: '4n6er Affirmation 1',
        text: 'You can control your 4n6er.',

        coping_type_id: '101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '2',
        coping_tool_name: '4n6er Affirmation 2',
        text: '4n6er is just an emotion.',

        coping_type_id: '102',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '3',
        coping_tool_name: '4n6er Instruction',
        text: 'Take a deep breath.',

        coping_type_id: '103',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '4',
        coping_tool_name: '4n6er music',

        content_url: 'http://example.com/4n6er_music',
        coping_type_id: '104',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '5',
        coping_tool_name: '4n6er Podcast',

        content_url: 'http://example.com/4n6er_pod',
        coping_type_id: '105',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '6',
        coping_tool_name: 'f3ar Affirmation 1',
        text: 'You are safe.',

        coping_type_id: '106',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '7',
        coping_tool_name: 'f3ar Affirmation 2',
        text: 'f3ar is just a feeling.',

        coping_type_id: '107',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '8',
        coping_tool_name: 'f3ar Instruction',
        text: 'Breathe deeply.',

        coping_type_id: '108',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '9',
        coping_tool_name: 'f3ar music',

        content_url: 'http://example.com/f3ar_music',
        coping_type_id: '109',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '10',
        coping_tool_name: 'f3ar Podcast',

        content_url: 'http://example.com/f3ar_pod',
        coping_type_id: '110',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '11',
        coping_tool_name: 'h4ppye Affirmation 1',
        text: 'Enj0y your happiness.',

        coping_type_id: '111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '12',
        coping_tool_name: 'h4ppye Affirmation 2',
        text: 'You deserve to be h4ppye.',

        coping_type_id: '112',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '13',
        coping_tool_name: 'h4ppye Instruction',
        text: 'Smile and breathe.',

        coping_type_id: '113',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '14',
        coping_tool_name: 'h4ppye music',

        content_url: 'http://example.com/h4ppye_music',
        coping_type_id: '114',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '15',
        coping_tool_name: 'h4ppye Podcast',

        content_url: 'http://example.com/h4ppye_pod',
        coping_type_id: '115',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more records for j0y, l0v3, s4dn3s5, n3utr4l
      {
        coping_tool_id: '16',
        coping_tool_name: 'j0y Affirmation 1',
        text: 'Feel the j0y.',

        coping_type_id: '116',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '17',
        coping_tool_name: 'j0y Affirmation 2',
        text: 'j0y is all around you.',

        coping_type_id: '117',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '18',
        coping_tool_name: 'j0y Instruction',
        text: 'Let j0y fill your heart.',

        coping_type_id: '118',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '19',
        coping_tool_name: 'j0y music',

        content_url: 'http://example.com/j0y_music',
        coping_type_id: '119',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '20',
        coping_tool_name: 'j0y Podcast',

        content_url: 'http://example.com/j0y_pod',
        coping_type_id: '120',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '21',
        coping_tool_name: 'l0v3 Affirmation 1',
        text: 'l0v3 surrounds you.',

        coping_type_id: '121',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '22',
        coping_tool_name: 'l0v3 Affirmation 2',
        text: 'Feel the l0v3.',

        coping_type_id: '122',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '23',
        coping_tool_name: 'l0v3 Instruction',
        text: 'Spread l0v3.',

        coping_type_id: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '24',
        coping_tool_name: 'l0v3 music',

        content_url: 'http://example.com/l0v3_music',
        coping_type_id: '124',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '25',
        coping_tool_name: 'l0v3 Podcast',

        content_url: 'http://example.com/l0v3_pod',
        coping_type_id: '125',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '26',
        coping_tool_name: 's4dn3s5 Affirmation 1',
        text: 'It\'s okay to feel sad.',

        coping_type_id: '126',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '27',
        coping_tool_name: 's4dn3s5 Affirmation 2',
        text: 'This too shall pass.',

        coping_type_id: '127',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '28',
        coping_tool_name: 's4dn3s5 Instruction',
        text: 'Take it one day at a time.',

        coping_type_id: '128',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '29',
        coping_tool_name: 's4dn3s5 music',

        content_url: 'http://example.com/sad_music',
        coping_type_id: '129',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '30',
        coping_tool_name: 's4dn3s5 Podcast',

        content_url: 'http://example.com/sad_pod',
        coping_type_id: '130',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '31',
        coping_tool_name: 'n3utr4l Affirmation 1',
        text: 'Stay balanced.',

        coping_type_id: '131',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '32',
        coping_tool_name: 'n3utr4l Affirmation 2',
        text: 'n3utr4l is good.',

        coping_type_id: '132',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '33',
        coping_tool_name: 'n3utr4l Instruction',
        text: 'Embrace n3utr4lity.',

        coping_type_id: '133',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '34',
        coping_tool_name: 'n3utr4l music',
     
        content_url: 'http://example.com/n3utr4l_music',
        coping_type_id: '134',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '35',
        coping_tool_name: 'n3utr4l Podcast',
        
        content_url: 'http://example.com/n3utr4l_pod',
        coping_type_id: '135',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        coping_tool_id: '36',
        coping_tool_name: '4n6er Affirmation 1/2',
        text: 'You can control your 4n6er 2.',

        coping_type_id: '101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '37',
        coping_tool_name: '4n6er Affirmation 2/2',
        text: '4n6er is just an emotion 2.',

        coping_type_id: '102',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '38',
        coping_tool_name: '4n6er Instruction 2',
        text: 'Take a deep breath 2.',

        coping_type_id: '103',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '39',
        coping_tool_name: '4n6er music 2',

        content_url: 'http://example.com/4n6er_music2',
        coping_type_id: '104',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '40',
        coping_tool_name: '4n6er Podcast 2',

        content_url: 'http://example.com/4n6er_pod2',
        coping_type_id: '105',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '41',
        coping_tool_name: 'f3ar Affirmation 1/2',
        text: 'You are safe 2.',

        coping_type_id: '106',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '42',
        coping_tool_name: 'f3ar Affirmation 2/2',
        text: 'f3ar is just a feeling 2.',

        coping_type_id: '107',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '43',
        coping_tool_name: 'f3ar Instruction 2',
        text: 'Breathe deeply 2.',

        coping_type_id: '108',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '44',
        coping_tool_name: 'f3ar music 2',

        content_url: 'http://example.com/f3ar_music2',
        coping_type_id: '109',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '45',
        coping_tool_name: 'f3ar Podcast 2',

        content_url: 'http://example.com/f3ar_pod2',
        coping_type_id: '110',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '46',
        coping_tool_name: 'h4ppye Affirmation 1/2',
        text: 'Enj0y your happiness 2.',

        coping_type_id: '111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '47',
        coping_tool_name: 'h4ppye Affirmation 2/2',
        text: 'You deserve to be h4ppye 2.',

        coping_type_id: '112',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '48',
        coping_tool_name: 'h4ppye Instruction',
        text: 'Smile and breathe 2.',

        coping_type_id: '113',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '49',
        coping_tool_name: 'h4ppye music 2',

        content_url: 'http://example.com/h4ppye_music2',
        coping_type_id: '114',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '50',
        coping_tool_name: 'h4ppye Podcast 2',

        content_url: 'http://example.com/h4ppye_pod2',
        coping_type_id: '115',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more records for j0y, l0v3, s4dn3s5, n3utr4l
      {
        coping_tool_id: '51',
        coping_tool_name: 'j0y Affirmation 1',
        text: 'Feel the j0y 2.',

        coping_type_id: '116',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '52',
        coping_tool_name: 'j0y Affirmation 2',
        text: 'j0y is all around you 2.',

        coping_type_id: '117',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '53',
        coping_tool_name: 'j0y Instruction',
        text: 'Let j0y fill your heart 2.',

        coping_type_id: '118',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '54',
        coping_tool_name: 'j0y music2',

        content_url: 'http://example.com/j0y_music2',
        coping_type_id: '119',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '55',
        coping_tool_name: 'j0y Podcast2',

        content_url: 'http://example.com/j0y_pod2',
        coping_type_id: '120',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '56',
        coping_tool_name: 'l0v3 Affirmation 1',
        text: 'l0v3 surrounds you 2.',

        coping_type_id: '121',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '57',
        coping_tool_name: 'l0v3 Affirmation 2',
        text: 'Feel the l0v32.',

        coping_type_id: '122',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '58',
        coping_tool_name: 'l0v3 Instruction 2',
        text: 'Spread l0v32.',

        coping_type_id: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '59',
        coping_tool_name: 'l0v3 music',

        content_url: 'http://example.com/l0v3_music2',
        coping_type_id: '124',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '60',
        coping_tool_name: 'l0v3 Podcast2',

        content_url: 'http://example.com/l0v3_pod2',
        coping_type_id: '125',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '61',
        coping_tool_name: 's4dn3s5 Affirmation 1',
        text: 'It\'s okay to feel sad2.',

        coping_type_id: '126',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '62',
        coping_tool_name: 's4dn3s5 Affirmation 2',
        text: 'This too shall pass2.',

        coping_type_id: '127',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '63',
        coping_tool_name: 's4dn3s5 Instruction',
        text: 'Take it one day at a time2.',

        coping_type_id: '128',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '64',
        coping_tool_name: 's4dn3s5 music2',

        content_url: 'http://example.com/sad_music2',
        coping_type_id: '129',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '65',
        coping_tool_name: 's4dn3s5 Podcast2',

        content_url: 'http://example.com/sad_pod2',
        coping_type_id: '130',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '66',
        coping_tool_name: 'n3utr4l Affirmation 1',
        text: 'Stay balanced2.',

        coping_type_id: '131',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '67',
        coping_tool_name: 'n3utr4l Affirmation 2',
        text: 'n3utr4l is good2.',

        coping_type_id: '132',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '68',
        coping_tool_name: 'n3utr4l Instruction',
        text: 'Embrace n3utr4lity 2.',

        coping_type_id: '133',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '69',
        coping_tool_name: 'n3utr4l music2',
     
        content_url: 'http://example.com/n3utr4l_music2',
        coping_type_id: '134',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coping_tool_id: '70',
        coping_tool_name: 'n3utr4l Podcast2',
        
        content_url: 'http://example.com/n3utr4l_pod2',
        coping_type_id: '135',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('coping_tools', null, {});
  }
};
