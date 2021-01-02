# SkillRoad

<p align="center">
    <img src="https://raw.githubusercontent.com/MoAmrYehia/SkillRoad/master/gallery.jpeg">
</p>

SkillRoad is a career advisor platform that allows our users to be ready for their next career level.

### Links
- Devpost: https://devpost.com/software/skillroad
- Website: https://skillroad.tech

## Inspiration
Whether you want to run your own company or snag the corner office at your current job, you probably have an end-goal for your career. But do you really know what you need to do to get there?  

You are unlikely to start charting a course, unless and until you know the destination. The first and foremost step in your career plan is to create a detailed vision statement comprising different positions or things that you wish to achieve at various points in the coming years.

## What it does

**SkillRoad** is a career advisor platform that allows our users to be ready for their next career level. It is your guide to finding the appropriate career path for you. SkillRoad parses our users' skills. Then, it recommends different roadmaps for the next career level based on their skills. Finally, we provide our users with suitable courses to achieve their goals. At SkillRoad, we use Artificial Intelligence to analyze your actual skillset and find an enhanced career path appropriate for you! Feel free to take a look at our interactive Home page, where you can get a trial of our services.

## How we built it
Our website has advanced machine learning and AI algorithms to make sure that you 'll identify the gap between your skills and market needs, and it works as follow: 

* When the user uploads his/her CV the first model parses their skills and previous experiences via NLP techniques.
* The second model predicts the relevant skills and careers by using word2vec.
* With this new skill set, we predict the next career level and show it to users.

## Install Dependencies 

```
cd flask-env
pip install -r requirements.txt
```

## Running the App 

```python
cd flask-env
source bin/activate
python server/api.py
```
> then go to localhost: **5000**

## Pre-Trained Model
> We are providing a pretraind model and its RESTful API at **Predict ReleventSkills**. 

> The model was trained on a 10K samples out of 2M

## What's next for SkillRoad

SkillRoad will help anybody who is looking for a new job in their field, looking for improving their actual and future skills, and looking to get acquainted to some ideas that they may not have known before. Furthermore, it would display recommend courses, useful material, and open-source projects perfect for strengthen your skills.

To continue our project we will look for people in that field that if our users have any questions they can reach out to get any answers that they desire. We hope that SkillRoad will helps to improve our skillset and know our right job path.

## Demo
<a href="https://www.youtube.com/watch?v=tN_vtr8fDaQ&feature=emb_title" target="_blank"><img src="http://i3.ytimg.com/vi/tN_vtr8fDaQ/maxresdefault.jpg" 
alt="SkillRoad Demo" width="240" height="180" border="10" /></a>

## Current Contributors
<a href="https://github.com/MoAmrYehia/SkillRoad/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=MoAmrYehia/SkillRoad" />
</a>
