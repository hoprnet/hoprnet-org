import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../../util/motionConfig';
import { MemberProfile } from '../atoms/member-profile';

const data = [
  {
    link: '#',
    img: '/assets/images/team/meredith_bachma.png',
    name: 'Meredith Bachman',
    label: 'Graphic Designer',
  },

  {
    link: '#',
    img: '/assets/images/team/jose_aguinaga.png',
    name: 'José Aguinaga',
    label: 'Head of Engineering',
  },
  {
    link: '#',
    img: '/assets/images/team/steven_nonis.png',
    name: 'Steven Nonis',
    label: 'Software Engineer',
  },
  {
    link: '#',
    img: '/assets/images/team/reinhard.jpg',
    name: 'Reinhard Schmidt',
    label: 'Graphic Designer',
  },
  {
    link: '#',
    img: '/assets/images/team/simona.jpg',
    name: 'Simona Fontanella',
    label: 'Operations Manager',
  },
  {
    link: '#',
    img: '/assets/images/team/peter_braden.png',
    name: 'Peter Braden',
    label: 'Software Engineer',
  },
  {
    link: '#',
    img: '/assets/images/team/quianchen.jpg',
    name: 'Qianchen "Q" Yu',
    label: 'Decentralized Technology Architect',
  },
  {
    link: '#',
    img: '/assets/images/team/hopr_Amira_Bouguera.png',
    name: 'Amira Bouguera',
    label: 'Cryptographer and protocol engineer',
  },
  {
    link: '#',
    img: '/assets/images/team/hopr_Andrius.png',
    name: 'Andrius Stepaitis',
    label: 'Community Manager',
  },
  {
    link: '#',
    img: '/assets/images/team/Gregory_Babincev.png',
    name: 'Gregory Babintcev',
    label: 'Chinese Community Manager',
  },
  {
    link: '#',
    img: '/assets/images/team/Jakob.jpg',
    name: 'Jakob Leonard',
    label: 'Business Development Manager',
  },
  {
    link: '#',
    img: '/assets/images/team/Bogdan_Onica.png',
    name: 'Bogdan Onica',
    label: 'Marketing Specialist',
  },
  {
    link: '#',
    img: '/assets/images/team/Tino_Breddin_gelb.png',
    name: 'Tino Breddin',
    label: 'DevOps Engineer',
  },
];

export default function PeopleBuild() {
  return (
    <div className="people-area">
      <div
        className="container-sm"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
      >
        <h2>People building the HOPR Network</h2>
      </div>
      <div className="container padding-section-aux">
        <motion.div className="people-faces" variants={stagger}>
          {data.map((e, index) => (
            <MemberProfile
              {...e}
              key={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
