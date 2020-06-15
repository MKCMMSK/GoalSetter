import React from 'react';

import {PageLayout} from '../components/PageLayout';
import Tasks from "../components/Tasks"

const Project = () => (
  <PageLayout>
    <header>
      <h1>Project Page</h1>
    </header>

    <section className="project-page">
      <Tasks />
    </section>
  </PageLayout>
);

export default Project;
