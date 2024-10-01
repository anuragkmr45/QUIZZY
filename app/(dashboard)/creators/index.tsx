import { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TeamCard from '@/components/cards/TeamCard';
import { CreatorStyles } from '@/styles/dashboard/CreatorStyles';
import { useTheme } from '@/hooks';

const Creators: FC = () => {

    const { themeStyles } = useTheme();
    const styles = CreatorStyles(themeStyles);

    return (
        <SafeAreaView style={{ backgroundColor: themeStyles["backgroundColor_primary"] }}>
            <ScrollView>
                <View style={styles.sectionHeader} >
                    <View style={styles.bar} />
                    <Text style={styles.sectionHeaderText}>Mentors</Text>
                </View>
                <TeamCard
                    themeStyles={themeStyles}
                    mail='dads'
                    img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fanukampamaam.jpg?alt=media&token=b0df57bb-5dbc-4fd2-94d0-c4f6f96690db"
                    name='Anukampa Behera'
                    intro='Assistant Professor  at ITER, SOA University | DevOps, AI and ML Researcher'
                    insta='https://www.instagram.com/anukampabehera'
                    linkedin='https://www.linkedin.com/in/anukampa-behera-a1393849'
                />
                <TeamCard
                    themeStyles={themeStyles}
                    mail='daesd'
                    img="https://media.licdn.com/dms/image/D5603AQEP1cz4sfBjvQ/profile-displayphoto-shrink_400_400/0/1705065056894?e=1714608000&v=beta&t=Yj5-6QkqTlvQ9x80IBsz6z8qVZMgEsPWi1zPu0JwTrI"
                    name='Pawan Kumar'
                    intro="SRE Intern @Nutanix || CCNA certified || Final year @ITER || Flutter App Developer || Solving for India Regional Qualified || HackOn with Amazon`22 "
                    insta='https://www.instagram.com/pawan21.9'
                    linkedin='https://www.linkedin.com/in/pawan-kumar-9490581b5'
                    github='https://github.com/pnkr01'
                />
                <View style={styles.sectionHeader} >
                    <View style={styles.bar} />
                    <Text style={styles.sectionHeaderText}>Developer and Designer</Text>
                </View>
                <TeamCard
                    themeStyles={themeStyles}
                    mail='anurag45kmr@gmail.com'
                    img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2Fanurag_kumar.webp?alt=media&token=f6085285-b723-4368-9be5-575ad884d7aa"
                    name='Anurag Kumar'
                    intro="Tech Director at Brandladder Tech Pvt | Android Develeoper at EaseMyLiving | Project Lead Of Lab-D And VcareU | Mentor At GSSoC'24 | JS, Python Specialist | Cross Platform App Developer | Devops Trainee | Former CTO And Tech Lead | CSE 25' SOA"
                    insta='https://www.instagram.com/anuragkmr_45'
                    linkedin='https://www.linkedin.com/in/anuragkmr45'
                    github='https://github.com/anuragkmr45'
                />
                <TeamCard
                    themeStyles={themeStyles}
                    mail=''
                    img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2Fsuraj.webp?alt=media&token=24d1b954-f36c-49dc-812c-b8286e1f089a"
                    name='Suraj Sahu'
                    intro='Chief Technology Officer @BrandLadder | Navigating Multi-Cloud Technologies | Backend Developer in NodeJs, PHP, Java | Machine Learning Explorer | Database Maestro | Crafting Solutions in Python, Java, JavaScript, PHP'
                    insta='https://www.instagram.com/shaan.suraj'
                    linkedin='https://www.linkedin.com/in/shaansuraj'
                    github='https://github.com/shaansuraj'
                />
                <TeamCard
                    themeStyles={themeStyles}
                    mail=''
                    img="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fdiksha.png?alt=media&token=b7edbf5f-4d2e-4d46-9f32-8376de5185f0"
                    name='Diksha Jethwa'
                    intro="Frontend Web developer | UI UX Designer | B.Tech CSE'26 | Hacktoberfest 2023 | Trident Hackathon 5th runner-up| JS, Dart "
                    insta='https://www.instagram.com/diksha_artworks'
                    linkedin='https://www.linkedin.com/in/diksha-jethwa/'
                    github='https://github.com/Diksha566'
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Creators