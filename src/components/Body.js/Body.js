import React from 'react';
import styles from './Body.module.css';
import { useState, useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'react-feather';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';
import ReactToPrint from 'react-to-print';

function Body() {
  const colors = ['#6C63FF', '#2b76b7', '#cb8e33', '#4a995b', '#0d6efd'];
  const sections = {
    basicInfo: 'Basic Info',
    workExp: 'Work Experience',
    project: 'Project',
    education: 'Education',
    achievement: 'Achievements',
    summary: 'summary',
    other: 'others',
  };
  const resumeRef = useRef();
  const [activeColor, setActiveColor] = useState(colors[0]);

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: '',
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: '',
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);

  return (
    <div className={styles.container}>
      <h1
        className="text-center mt-5"
        style={{ fontWeight: '700', fontSize: '3rem' }}
      >
        Resume Builder
      </h1>
      <div className={styles.tools}>
        <div className={styles.colorpick}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ''
              }`}
              onClick={() => {
                setActiveColor(item);
                console.log(activeColor, item);
              }}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDownCircle />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.body}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          activeColor={activeColor}
          sections={sections}
          information={resumeInformation}
        />
      </div>
    </div>
  );
}

export default Body;
