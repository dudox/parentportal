import React from "react";
import {Accordion, Card} from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';

const HelpComponent = () => {
    return (
        <>
            <Accordion>
                <Card id="helpStyle">
                    <Accordion.Toggle as={Card.Header} eventKey="0" id="helpContent">
                        Q1. What is YouROK?
                        <FeatherIcon icon="chevron-down" id="arrows"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body style={{border: 'none'}}>
                            YouROK is the developer of K’Bro is a mobile app designed with evidence-based
                            activities that build emotional resiliency gamified in a way that sustains regular engagement
                            and serves as a real-time, prevention tool to adolescent mental health issues.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card id="helpStyle">
                    <Accordion.Toggle as={Card.Header} eventKey="1" id="helpContent">
                        Q2. What is Emotional Resiliency?
                        <FeatherIcon icon="chevron-down" id="arrows"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            Emotional resiliency refers to the human ability to adapt in response to adversity and
                            stressful situations. Some people demonstrate more resilience than others. This is largely
                            due to a combination of social and biological factors that shape a person’s emotional state
                            during formative years. In the field of mental health, there is vast amounts of research
                            showing that emotional resiliency allows humans to cope with life events, traumas, and
                            stressors more effectively and to lead a happier life. Such research shows that higher
                            levels of emotional competence (awareness, self-control, and comfort with expression) in
                            children and young teenagers leads to a decreased risk of using hard drugs and behavioral
                            adjustment problems. More importantly, research shows that teens of different backgrounds,
                            family situations, and biological predispositions can increase their emotional resiliency.
                            Even the more “sensitive” individuals that are likely to let stress and trauma set them back
                            emotionally can be taught to develop emotional resiliency despite their biological predispositions.
                            Therefore, building emotional resilience in teens is essential to healthy development and creating
                            fulfilling lives for future generations. Currently, emotional resilience is just emerging as a
                            topic of conversation with the advent of Social Emotional Literacy programs in some schools.
                            Mental health websites occasionally provide information on how to increase emotional resiliency,
                            but the main access point to these tips for adolescents would be through counseling.
                            Many teens do not attend counseling, because they are undiagnosed, and do not communicate
                            their need for help well. K’Bro not only seeks to help with building emotional resilience,
                            but also communication between adolescents and their parents. K’Bro’s goal is to increase awareness of,
                            and begin discussions about emotional resiliency.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card id="helpStyle">
                    <Accordion.Toggle as={Card.Header} eventKey="2" id="helpContent">
                        Q3. Why does K'Bro Work?
                        <FeatherIcon icon="chevron-down" id="arrows"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            The Am I OK? index users simply acknowledge what emotions (4 out of 12 options) a specific
                            aspect of their life evokes that day instead of having to remember what happened over
                            the past two weeks like most assessment tools. The Am I OK? index interprets the results
                            in easy to understand terms: “not okay” “okay” or “better than okay,” eliminating the jargon
                            found in traditional assessments. When teens need help acquiring strategies to cope with their
                            negative emotions, they practice peer communication by asking for feedback in the Deal With It!
                            forum. In addition, many teens experience difficult emotions because of turmoil with parents
                            and other authority figures. When teens ask for feedback concerning how to communicate with
                            their parents or teachers, for example, they are acquiring communication strategies that are
                            effective for both peers and superiors. Ultimately, as users develop the ability to effectively
                            communicate their needs while respecting authority figures, they will experience less social
                            and familial distress. Even though there are some minimal risks associated with participation
                            in the trial (such as the potential for cyber bullying or sharing ineffective coping strategies),
                            these risks are outweighed by the participants’ potential to develop important lifelong
                            emotion regulation and interpersonal effectiveness skills. For issues that cannot be addressed
                            within the app’s features users will be able to text with a trained professional for additional
                            support. If their parent has a subscription the parent will be receiving insights to help
                            improve parent-child engagement.

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card id="helpStyle">
                    <Accordion.Toggle as={Card.Header} eventKey="3" id="helpContent">
                        Q4. What happens if I have serious issues that I share in K'Bro?
                        <FeatherIcon icon="chevron-down" id="arrows"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            K’Bro is smart enough to respond to crisis scenarios that users report in My Tribe sections:
                            Deal With It!, Speak Up? and What’s Up? Such words and phrases as “suicide” or “cutting”
                            will trigger an alert within the app to the user with crisis strategies and other relevant
                            solutions to these more serious issues, at no cost to the user. For those families where the
                            parent has a paid subscription, the parent will receive a weekly email with targeted conversation
                            starter tips based on the child’s issues; if there is cause for concern the parent will
                            receive an immediate alert. In addition to helping teens get through moments of high distress,
                            K’Bro’s artificial intelligence technology lets the app self-regulate such that community
                            managers do not need to individually screen content that is posted within the app. Most importantly,
                            parents will never see the specific comments you make in the app – that will always remain
                            private for your eyes only.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card id="helpStyle">
                    <Accordion.Toggle as={Card.Header} eventKey="4" id="helpContent">
                        Q5. How much time do I play K'Bro to feel better?
                        <FeatherIcon icon="chevron-down" id="arrows"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            If you only used K’Bro 2 minutes a day it would begin to have a positive impact.
                            While daily is ideal, most kids play K’Bro a few times a week.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card id="helpStyle">
                    <Accordion.Toggle as={Card.Header} eventKey="5" id="helpContent">
                        Q6. Where can I download K'Bro?
                        <FeatherIcon icon="chevron-down" id="arrows"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            You can access K’Bro from your android or iOS tablet or smart phone.
                            K’Bro can be found at <a href="https://play.google.com/store/apps/details?id=com.yourok.kbro&hl=en_US&gl=US" id="links">
                                Google Play store
                            </a> and <a href="https://apps.apple.com/us/app/kbro-emotional-resiliency-app/id1434638133" id="links">
                                Apple Store
                            </a>.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card id="helpStyle">
                    <Accordion.Toggle as={Card.Header} eventKey="6" id="helpContent">
                        Q7. How much does K'Bro cost?
                        <FeatherIcon icon="chevron-down" id="arrows"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            K’Bro is always free to kids. Soon you’ll have the option to make in-app purchases to enhance game play.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card id="helpStyle">
                    <Accordion.Toggle as={Card.Header} eventKey="7" id="helpContent">
                        Q8. Does K'Bro breed cyber-bullying?
                        <FeatherIcon icon="chevron-down" id="arrows"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            Although technology can breed cyberbullying and social anxiety in users, it can also be
                            utilized to combat emotional problems in large numbers of people, because of its accessibility.
                            K’Bro provides that link between technology and emotional well-being. The few, unlikely psychological
                            risks associated with K’Bro are the potential for cyberbullying and sharing of unhelpful coping
                            mechanisms. Both are unlikely due to the up/down voting system in the app and community managers’
                            ability to delete offensive users. K’Bro has taken exceptional care through community managers
                            to set a positive and reinforcing tone. Users who abuse the app can have their comments blocked
                            by users or their accounts deleted by community managers.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card id="helpStyle">
                    <Accordion.Toggle as={Card.Header} eventKey="8" id="helpContent">
                        Q9. Does YouROK take steps to secure my data?
                        <FeatherIcon icon="chevron-down" id="arrows"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            YouROK complies with protected information regulatory measures by only allowing people to
                            access the minimum amount of information to complete their job. HIPAA, for instance, is
                            addressed by only allowing community managers to access the necessary data to regulate and
                            monitor user interactions. Developers work in isolated environments that do not contain
                            protected information. For more information, please refer to our Privacy Policy and Terms of Use.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>

    );
};

export default HelpComponent;