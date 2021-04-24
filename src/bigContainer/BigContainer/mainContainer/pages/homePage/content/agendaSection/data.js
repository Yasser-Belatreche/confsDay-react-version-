import check from '../../../../../../../images/checkin.png';
import opening from '../../../../../../../images/opening.png';
import khababa from '../../../../../../../images/khababa1.jpg';
import panel1 from '../../../../../../../images/1.png';
import dejeuner from '../../../../../../../images/dejeuner.png';
import panel2 from '../../../../../../../images/2.png';
import coffee from '../../../../../../../images/coffee.png';
import Conference2 from '../../../../../../../images/Conference2.png';
import panel3 from '../../../../../../../images/3.png';
import Billel from '../../../../../../../images/Billel.jpg';

export const data = [
  {
    date:'Sun Apr 11th, 2021',
    topics: [
      {
        img: check,
        imgClass: 'smallImg',
        title: 'Check In',
        time: '8:30 AM - 9:30 AM',
        details: [
          'Check your name.', 'Get your badge.'
        ]
      },
      {
        img: opening,
        title: 'Opening Ceremony',
        time: '9:30 AM - 10:00 AM',
        details: [
          'An introduction of the club and the event.', 'A recap on the agenda.', 'A word from the sponsor.'
        ]
      },
      {
        img: khababa,
        title: 'Conference 01',
        time: '10:00 AM - 11:30 AM',
        details: [
          'Talk about the success of digital transformation.',
          'Talk about the use of data and the importance of exploiting it in digitalization.'
        ]
      },
      {
        img: panel1,
        title: 'First Panel',
        time: '11:30 AM - 12:30 AM',
        details: [
          'Talk about the laws relating to the use and manipulation of data.',
          'Talk about the legal framework of using data in Algeria.'
        ]
      },
      {
        img: dejeuner,
        imgClass: 'smallImg',
        title: 'Lunch Break',
        time: '12:30 AM - 1:30 PM',
        details: [
          'Enjoy your food with a chance for networking as well.'
        ]
      },
      {
        img: panel2,
        title: 'Second Panel',
        time: '1:30 PM - 3:00 PM',
        details: [
          'We will discuss if our country, Algeria is ready to follow the movement without its black gold for data and try to answer other questions related to that too.'
        ]
      },
      {
        img: coffee,
        imgClass: 'smallImg',
        title: 'Coffee Break & Networking',
        time: '3:00 PM',
        last: 'last',
        details: [
          'What’s better than a cup of coffee while meeting new people?'
        ]
      },
    ]
  },
  {
    date:'Mon Apr 12th, 2021',
    topics: [
      {
        img: check,
        imgClass: 'smallImg',
        title: 'Check In',
        time: '8:30 AM - 9:30 AM',
        details: [
          'Check your name.'
        ]
      },
      {
        img: Conference2,
        title: 'Conference 02',
        time: '9:30 AM- 11:30 AM',
        details: [
          'We will talk about data infrastructures in Algeria, and answer all the questions related to it.'
        ]
      },
      {
        img: panel3,
        title: 'Third Panel',
        time: '11:30 AM- 1:00 PM',
        details: [
          'A panel for companies and universities.',
          'We will highlight the importance of IS and data science specialties and see if Algerian university is aware of their importance.',
          'And we will discuss the fact if we are able to provide training that meets standards and companies needs in Algerian universities?'
        ]
      },
      {
        img: Billel,
        title: 'Closing Ceremony',
        time: '1:00 PM- 1:30 PM',
        details: [
          'A word from the club’s president.',
          'Thank the speakers, guests and organizers.'
        ]
      },
      {
        img: dejeuner,
        imgClass: 'smallImg',
        title: 'Lunch Break',
        time: '1:30 PM',
        last: 'last',
        details: [
          'We end our little adventure with another lunch break and a last chance for networking'
        ]
      }
    ]
  }
];   