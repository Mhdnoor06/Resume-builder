import React, { useState, useEffect } from 'react';
import styles from './Editor.module.css';
import InputControl from '../Inputcontol/InputControl';
import { X } from 'react-feather';

function Editor(props) {
  const sections = props.sections;
  const information = props.information;
  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]],
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]],
  );

  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || '',
    title: activeInformation?.detail?.title || '',
    linkedin: activeInformation?.detail?.linkedin || '',
    github: activeInformation?.detail?.github || '',
    phone: activeInformation?.detail?.phone || '',
    email: activeInformation?.detail?.email || '',
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const basicInfo = (
    <div className="container">
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label={'First Name'}
            placeholder="Enter your full name eg. Aashu"
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter your title eg. Frontend developer"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Linkedin Link"
            value={values.linkedin}
            placeholder="Enter your linkedin profile link"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, linkedin: event.target.value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            label="Github Link"
            value={values.github}
            placeholder="Enter your github profile link"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, github: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Email"
            value={values.email}
            placeholder="Enter your email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            type="number"
            label="Enter phone"
            value={values.phone}
            placeholder="Enter your phone number"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, phone: event.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );

  const workExpBody = (
    <div className="container">
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Title"
            placeholder="Enter title eg. Frontend developer"
            value={values.title}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            label="Company Name"
            placeholder="Enter company name eg. amazon"
            value={values.companyName}
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                companyName: event.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Certificate Link"
            placeholder="Enter certificate link"
            value={values.certificationLink}
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                certificationLink: event.target.value,
              }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            label="Location"
            placeholder="Enter location eg. Remote"
            value={values.location}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, location: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of work"
            value={values.startDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, startDate: event.target.value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of work"
            value={values.endDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, endDate: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="row g-3 m-3">
        <label>Enter work description</label>
        <div className="col-md-6">
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 0)}
          />
        </div>
        <div className="col-md-6">
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 1)}
          />
        </div>

        <div className="col-md-6">
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 2)}
          />
        </div>
      </div>
    </div>
  );

  const projectBody = (
    <div className="container">
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter title eg. Chat app"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            label="Overview"
            value={values.overview}
            placeholder="Enter basic overview of project"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, overview: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Deployed Link"
            value={values.link}
            placeholder="Enter deployed link of project"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, link: event.target.value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            label="Github Link"
            value={values.github}
            placeholder="Enter github link of project"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, github: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="row g-3 m-3">
        <label>Enter project description</label>
        <div className="col-md-6">
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 0)}
          />
        </div>
        <div className="col-md-6">
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 1)}
          />
        </div>

        <div className="col-md-6">
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 2)}
          />
        </div>
      </div>
    </div>
  );

  const educationBody = (
    <div className="container">
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter title eg. B-tech"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            label="College/School Name"
            value={values.college}
            placeholder="Enter name of your college/school"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, college: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of this education"
            value={values.startDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, startDate: event.target.value }))
            }
          />
        </div>
        <div className="col-md-6">
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of this education"
            value={values.endDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, endDate: event.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );

  const achievementsBody = (
    <div className="container">
      <div className="row g-3 m-3">
        <label>List your achievements</label>
        <div className="col-md-6">
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 0)}
          />
        </div>
        <div className="col-md-6">
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 1)}
          />
        </div>
        <div className="col-md-6">
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 2)}
          />
        </div>
        <div className="col-md-6">
          <InputControl
            placeholder="Line 4"
            value={values.points ? values.points[3] : ''}
            onChange={(event) => handlePointUpdate(event.target.value, 3)}
          />
        </div>
      </div>
    </div>
  );

  const summaryBody = (
    <div className="container">
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Summary"
            value={values.summary}
            placeholder="Enter your objective/summary"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, summary: event.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );

  const otherBody = (
    <div className="container">
      <div className="row g-3 m-3">
        <div className="col-md-6">
          <InputControl
            label="Other"
            value={values.other}
            placeholder="Enter something"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, other: event.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSection]) {
      case sections.basicInfo:
        return basicInfo;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSection]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSection]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || '',
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ''
        : '',
      link: activeInfo?.details ? activeInfo.details[0]?.link || '' : '',
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ''
        : '',
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ''
        : '',
      college: activeInfo?.details ? activeInfo.details[0]?.college || '' : '',
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ''
        : '',
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ''
        : '',
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || '' : '',
      points: activeInfo?.points ? [...activeInfo.points] : '',
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ''
        : activeInfo?.detail?.title || '',
      linkedin: activeInfo?.detail?.linkedin || '',
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ''
        : activeInfo?.detail?.github || '',
      phone: activeInfo?.detail?.phone || '',
      email: activeInfo?.detail?.email || '',
      summary: typeof activeInfo?.detail !== 'object' ? activeInfo.detail : '',
      other: typeof activeInfo?.detail !== 'object' ? activeInfo.detail : '',
    });
    console.log(values.points);
  }, [activeSection]);

  const handleSubmission = () => {
    switch (sections[activeSection]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...information[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achievement: {
        const tempPoints = values.points;

        props.setInformation((prev) => ({
          ...prev,
          [sections.achievement]: {
            ...prev[sections.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.summary: {
        const tempDetail = values.summary;

        props.setInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.other: {
        const tempDetail = values.other;

        props.setInformation((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
    }
  };

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSection]]: {
        ...information[sections[activeSection]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : '';
    if (!details) return;
    details.splice(index, 1);
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSection]]: {
        ...information[sections[activeSection]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };
  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = information[sections[activeSection]];
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || '',
      link: activeInfo.details[activeDetailIndex]?.link || '',
      certificationLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || '',
      companyName: activeInfo.details[activeDetailIndex]?.companyName || '',
      location: activeInfo.details[activeDetailIndex]?.location || '',
      startDate: activeInfo.details[activeDetailIndex]?.startDate || '',
      endDate: activeInfo.details[activeDetailIndex]?.endDate || '',
      points: activeInfo.details[activeDetailIndex]?.points || '',
      title: activeInfo.details[activeDetailIndex]?.title || '',
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || '',
      github: activeInfo.details[activeDetailIndex]?.github || '',
      college: activeInfo.details[activeDetailIndex]?.college || '',
    });
  }, [activeDetailIndex]);

  useEffect(() => {
    setActiveInformation(information[sections[activeSection]]);
  }, [information]);

  return (
    <div className={`container m-0 ${styles.container} `}>
      <div className={styles.container1}>
        <div className={styles.items}>
          {Object.keys(sections)?.map((keys) => (
            <div
              className={`${styles.section}  ${
                activeSection === keys ? styles.active : ''
              }`}
              key={keys}
              onClick={() => setActiveSection(keys)}
            >
              {sections[keys]}
            </div>
          ))}
        </div>
        <div className={styles.body}>
          <div className="container">
            <div className="row g-3 m-3">
              <div className="col-md-6">
                <InputControl
                  label="Title"
                  placeholder="Enter sections title"
                  value={sectionTitle}
                  onChange={(event) => setSectionTitle(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.chips}>
            {activeInformation?.details
              ? activeInformation?.details?.map((item, index) => (
                  <div
                    className={`${styles.chip} ${
                      activeDetailIndex === index ? styles.active : ''
                    }`}
                    key={item.title + index}
                    onClick={() => setActiveDetailIndex(index)}
                  >
                    <p>
                      {sections[activeSection]} {index + 1}
                    </p>
                    <X
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDeleteDetail(index);
                      }}
                    />
                  </div>
                ))
              : ''}
            {activeInformation?.details &&
            activeInformation?.details?.length > 0 ? (
              <div className={styles.new} onClick={handleAddNew}>
                +New
              </div>
            ) : (
              ''
            )}
          </div>

          {generateBody()}

          <button onClick={handleSubmission}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Editor;
