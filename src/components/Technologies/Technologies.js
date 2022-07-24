import React from 'react';
import {FiFigma} from 'react-icons/fi';
import { DiAngularSimple, DiPhp } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Front-end to Back-end to Full-stack.
      </SectionText>
      <List>
        <ListItem>
          <DiAngularSimple size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Angular, React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPhp size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              PHP, C#, Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <FiFigma size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br/>
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
