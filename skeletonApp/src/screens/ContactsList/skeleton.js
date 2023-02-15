import {
    View,
    Text

} from "react-native"

import SkeletonPlaceholder from "react-native-skeleton-placeholder"

import styles from "./stylesSkeleton"


const Skeleton = () => {

    return (
        <SkeletonPlaceholder>
            <View style={styles.container}>
                <View style={styles.header} />

                <View style={styles.stepsContainer}>
                    <View style={styles.photo} />
                    <Text style={styles.name} />

                    <View style={styles.containerIcons}>
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                    </View>
                </View>

                <View style={styles.lineCard} />

                <View style={styles.stepsContainer}>
                    <View style={styles.photo} />
                    <Text style={styles.name} />

                    <View style={styles.containerIcons}>
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                    </View>
                </View>
                
                <View style={styles.lineCard} />

                <View style={styles.stepsContainer}>
                    <View style={styles.photo} />
                    <Text style={styles.name} />

                    <View style={styles.containerIcons}>
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                    </View>
                </View>
                
                <View style={styles.lineCard} />

                <View style={styles.stepsContainer}>
                    <View style={styles.photo} />
                    <Text style={styles.name} />

                    <View style={styles.containerIcons}>
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                    </View>
                </View>
                
                <View style={styles.lineCard} />

                <View style={styles.stepsContainer}>
                    <View style={styles.photo} />
                    <Text style={styles.name} />

                    <View style={styles.containerIcons}>
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                    </View>
                </View>
                
                <View style={styles.lineCard} />

                <View style={styles.stepsContainer}>
                    <View style={styles.photo} />
                    <Text style={styles.name} />

                    <View style={styles.containerIcons}>
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                    </View>
                </View>
                
                <View style={styles.lineCard} />

                <View style={styles.stepsContainer}>
                    <View style={styles.photo} />
                    <Text style={styles.name} />

                    <View style={styles.containerIcons}>
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                    </View>
                </View>
                
                <View style={styles.lineCard} />

                <View style={styles.stepsContainer}>
                    <View style={styles.photo} />
                    <Text style={styles.name} />

                    <View style={styles.containerIcons}>
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                    </View>
                </View>
                
                <View style={styles.lineCard} />

                <View style={styles.stepsContainer}>
                    <View style={styles.photo} />
                    <Text style={styles.name} />

                    <View style={styles.containerIcons}>
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                        <Text style={styles.icons} />
                    </View>
                </View>
                
                <View style={styles.lineCard} />



            </View>

        </SkeletonPlaceholder>
    );

}

export default Skeleton