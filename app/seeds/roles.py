from app.models import db, Role


def seed_roles():
    vgdl1 = Role(
        user_id=1,
        project_id=1,
        custom_name='Programmer',
        type='Programmer',
        quantity='1',
        description="""Suspendisse ultrices gravida dictum fusce ut placerat orci. Malesuada nunc vel risus commodo viverra maecenas accumsan. Arcu non sodales neque sodales ut etiam sit amet. Imperdiet proin fermentum leo vel orci. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Quis auctor elit sed vulputate mi sit amet mauris. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Justo laoreet sit amet cursus sit amet dictum sit. Pellentesque id nibh tortor id aliquet. Facilisis volutpat est velit egestas dui id ornare arcu. Suscipit adipiscing bibendum est ultricies integer quis auctor. Vitae purus faucibus ornare suspendisse sed nisi lacus. Viverra ipsum nunc aliquet bibendum enim. Sed turpis tincidunt id aliquet risus feugiat in ante. Sagittis nisl rhoncus mattis rhoncus urna. Enim sed faucibus turpis in eu mi bibendum neque.""")
    vgdl2 = Role(
        user_id=1,
        project_id=1,
        custom_name='Concept Artist',
        type='Artist',
        quantity='1',
        description='Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Ornare arcu odio ut sem nulla pharetra diam sit amet. Vivamus arcu felis bibendum ut. Morbi tristique senectus et netus et malesuada fames ac turpis. Nisi scelerisque eu ultrices vitae auctor. Facilisis leo vel fringilla est ullamcorper eget. Augue lacus viverra vitae congue eu consequat ac felis. Neque gravida in fermentum et sollicitudin ac. Ac tortor dignissim convallis aenean.')
    vgdl3 = Role(
        user_id=1,
        project_id=1,
        custom_name='2D Artist',
        type='Artist',
        quantity='3',
        description='Pretium lectus quam id leo in vitae turpis massa. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Purus sit amet volutpat consequat mauris. Commodo ullamcorper a lacus vestibulum sed. Euismod lacinia at quis risus sed vulputate odio ut enim. Ultrices dui sapien eget mi proin. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Quam nulla porttitor massa id neque. Ac odio tempor orci dapibus ultrices. Risus at ultrices mi tempus. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Orci sagittis eu volutpat odio facilisis. Lacinia at quis risus sed vulputate odio ut.')
    vgdl4 = Role(
        user_id=1,
        project_id=1,
        custom_name='Character Route Writer',
        type='Writer',
        quantity='3',
        description='Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Enim ut sem viverra aliquet eget sit amet tellus. Enim nec dui nunc mattis enim ut tellus elementum. Cras adipiscing enim eu turpis egestas pretium. Feugiat sed lectus vestibulum mattis. Tortor pretium viverra suspendisse potenti. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Gravida dictum fusce ut placerat orci nulla. Facilisi morbi tempus iaculis urna id. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Dapibus ultrices in iaculis nunc sed.')
    oc1 = Role(
        user_id=2,
        project_id=2,
        custom_name='Scrum Master',
        type='Producer',
        quantity='1',
        description='Sodales ut etiam sit amet nisl purus in mollis nunc. Non tellus orci ac auctor augue mauris augue neque. Phasellus egestas tellus rutrum tellus pellentesque. Dolor magna eget est lorem ipsum dolor sit. Amet purus gravida quis blandit turpis cursus. Faucibus pulvinar elementum integer enim neque. Leo in vitae turpis massa sed. Orci dapibus ultrices in iaculis nunc sed augue. Rhoncus mattis rhoncus urna neque viverra. Amet risus nullam eget felis eget nunc. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Eleifend quam adipiscing vitae proin sagittis nisl.')
    oc2 = Role(
        user_id=2,
        project_id=2,
        custom_name='Game Developer',
        type='Programmer',
        quantity='5',
        description='Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Mollis aliquam ut porttitor leo a diam sollicitudin. Sed faucibus turpis in eu mi bibendum neque egestas. Libero enim sed faucibus turpis in eu. Elementum curabitur vitae nunc sed velit. Nunc vel risus commodo viverra maecenas accumsan lacus. Vestibulum lorem sed risus ultricies. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Urna nec tincidunt praesent semper. Lobortis scelerisque fermentum dui faucibus in ornare quam. Diam sit amet nisl suscipit adipiscing bibendum.')
    oc3 = Role(
        user_id=2,
        project_id=2,
        custom_name='Game Mechanics Designer',
        type='Designer',
        quantity='2',
        description='Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Ac placerat vestibulum lectus mauris ultrices eros in. Egestas erat imperdiet sed euismod nisi porta. Nulla facilisi nullam vehicula ipsum. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Placerat duis ultricies lacus sed turpis tincidunt. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Fames ac turpis egestas maecenas. Pharetra convallis posuere morbi leo. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Enim facilisis gravida neque convallis a cras semper auctor neque. Viverra aliquet eget sit amet tellus.')
    oc4 = Role(
        user_id=2,
        project_id=2,
        custom_name='Level Designer',
        type='Designer',
        quantity='2',
        description='Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Potenti nullam ac tortor vitae purus faucibus. Morbi enim nunc faucibus a. Cursus in hac habitasse platea dictumst quisque. Blandit aliquam etiam erat velit scelerisque in dictum non. Purus sit amet volutpat consequat mauris nunc congue. Dictum fusce ut placerat orci. Id diam maecenas ultricies mi eget. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Tortor posuere ac ut consequat semper viverra. Sed velit dignissim sodales ut eu.')
    oc5 = Role(
        user_id=2,
        project_id=2,
        custom_name='3D Artist',
        type='Artist',
        quantity='3',
        description='Non quam lacus suspendisse faucibus interdum posuere lorem. Ultrices dui sapien eget mi proin sed. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Tincidunt arcu non sodales neque. Natoque penatibus et magnis dis parturient. Justo donec enim diam vulputate ut pharetra sit amet. Neque convallis a cras semper auctor. Sed adipiscing diam donec adipiscing tristique risus nec. Porta lorem mollis aliquam ut porttitor leo a. Ultricies tristique nulla aliquet enim. Pretium lectus quam id leo in vitae turpis massa.')
    oc6 = Role(
        user_id=2,
        project_id=2,
        custom_name='SFX Artist',
        type='Audio Technician',
        quantity='1',
        description='Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Nulla porttitor massa id neque. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Purus non enim praesent elementum facilisis leo vel. Viverra ipsum nunc aliquet bibendum. Hendrerit dolor magna eget est lorem ipsum dolor sit. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lacus sed viverra tellus in.')
    oc7 = Role(
        user_id=2,
        project_id=2,
        custom_name='Soundtrack Composer',
        type='Audio Technician',
        quantity='1',
        description='Et tortor at risus viverra adipiscing at in tellus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Bibendum est ultricies integer quis auctor elit sed. Purus in massa tempor nec. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Ullamcorper eget nulla facilisi etiam. Adipiscing bibendum est ultricies integer quis auctor elit sed.')
    jb1 = Role(
        user_id=3,
        project_id=3,
        custom_name='Scrum Master',
        type='Producer',
        quantity='1',
        description='Tincidunt tortor aliquam nulla facilisi cras. Ultrices tincidunt arcu non sodales neque sodales. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Et malesuada fames ac turpis egestas. Nisi porta lorem mollis aliquam ut. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Magna fringilla urna porttitor rhoncus.')
    jb2 = Role(
        user_id=3,
        project_id=3,
        custom_name='SFX Artist',
        type='Audio Technician',
        quantity='1',
        description='Ultricies mi quis hendrerit dolor magna eget. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Donec ultrices tincidunt arcu non sodales neque sodales. Quam lacus suspendisse faucibus interdum posuere. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Elit pellentesque habitant morbi tristique. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.')
    jb3 = Role(
        user_id=3,
        project_id=3,
        custom_name='Music Composer',
        type='Audio Technician',
        quantity='1',
        description='Viverra nibh cras pulvinar mattis nunc sed blandit. Tellus id interdum velit laoreet id donec. Adipiscing elit ut aliquam purus sit amet. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ut etiam sit amet nisl purus in mollis. Volutpat sed cras ornare arcu dui. Vel pretium lectus quam id leo in. Pharetra convallis posuere morbi leo urna molestie at. Donec et odio pellentesque diam volutpat. Suscipit tellus mauris a diam. Ullamcorper a lacus vestibulum sed arcu non.')
    jb4 = Role(
        user_id=3,
        project_id=3,
        custom_name='Game Mechanics Designer',
        type='Designer',
        quantity='2',
        description='Et netus et malesuada fames. Velit euismod in pellentesque massa placerat duis. Pellentesque adipiscing commodo elit at imperdiet dui. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Elementum facilisis leo vel fringilla. Proin nibh nisl condimentum id venenatis a. Magnis dis parturient montes nascetur. Porttitor rhoncus dolor purus non. Ornare massa eget egestas purus viverra accumsan.')
    jb5 = Role(
        user_id=3,
        project_id=3,
        custom_name='UI/UX Designer',
        type='Designer',
        quantity='2',
        description='Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Nam aliquam sem et tortor consequat id porta nibh. Cras sed felis eget velit aliquet sagittis. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris pharetra et ultrices neque ornare aenean. Non tellus orci ac auctor augue mauris augue.')
    jb6 = Role(
        user_id=3,
        project_id=3,
        custom_name='Network Engineer',
        type='Programmer',
        quantity='1',
        description='Quam adipiscing vitae proin sagittis nisl rhoncus. Tristique senectus et netus et malesuada. Neque gravida in fermentum et sollicitudin ac orci. Tellus cras adipiscing enim eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Eget arcu dictum varius duis at consectetur lorem donec massa. Mus mauris vitae ultricies leo. Justo laoreet sit amet cursus. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Sed felis eget velit aliquet sagittis id consectetur.')
    jb7 = Role(
        user_id=3,
        project_id=3,
        custom_name='Game Developer',
        type='Programmer',
        quantity='5',
        description='Amet est placerat in egestas erat imperdiet sed euismod. Quis lectus nulla at volutpat. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Aliquam sem fringilla ut morbi tincidunt augue interdum. In mollis nunc sed id semper risus in hendrerit gravida. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Dignissim enim sit amet venenatis urna cursus eget nunc. Egestas dui id ornare arcu odio. Neque vitae tempus quam pellentesque nec.')
    jb8 = Role(
        user_id=3,
        project_id=3,
        custom_name='3D Artist',
        type='Artist',
        quantity='5',
        description='Pellentesque elit eget gravida cum sociis natoque penatibus. Rutrum quisque non tellus orci ac auctor augue mauris augue. Facilisis magna etiam tempor orci eu lobortis. Bibendum neque egestas congue quisque egestas diam in. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Placerat in egestas erat imperdiet. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eget magna fermentum iaculis eu non diam phasellus. Semper feugiat nibh sed pulvinar proin gravida hendrerit.')
    mm1 = Role(
        user_id=4,
        project_id=4,
        custom_name='Concept Artist',
        type='Artist',
        quantity='1',
        description='Velit sed ullamcorper morbi tincidunt ornare. Feugiat sed lectus vestibulum mattis ullamcorper. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Vitae turpis massa sed elementum tempus egestas sed sed. Vulputate enim nulla aliquet porttitor. Nascetur ridiculus mus mauris vitae ultricies leo integer. Mauris pellentesque pulvinar pellentesque habitant. Varius duis at consectetur lorem donec massa. Enim diam vulputate ut pharetra sit amet aliquam. Non nisi est sit amet facilisis magna etiam tempor. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. A erat nam at lectus urna duis convallis convallis. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Aliquam id diam maecenas ultricies. Purus semper eget duis at tellus at.')
    mm2 = Role(
        user_id=4,
        project_id=4,
        custom_name='2D Artist',
        type='Artist',
        quantity='3',
        description='Platea dictumst quisque sagittis purus. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Eget nunc lobortis mattis aliquam faucibus. Fames ac turpis egestas maecenas pharetra. Eros in cursus turpis massa. Enim ut sem viverra aliquet eget sit amet. Vitae suscipit tellus mauris a diam maecenas sed enim. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Cursus euismod quis viverra nibh cras pulvinar. Id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit ut aliquam. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. In mollis nunc sed id semper risus in hendrerit.')
    mm3 = Role(
        user_id=4,
        project_id=4,
        custom_name='Game Developer',
        type='Programmer',
        quantity='3',
        description='Vivamus at augue eget arcu dictum varius duis at consectetur. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Felis donec et odio pellentesque. Pellentesque dignissim enim sit amet venenatis. Faucibus interdum posuere lorem ipsum dolor sit. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Purus in mollis nunc sed id semper. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Fermentum odio eu feugiat pretium nibh ipsum consequat. Eu volutpat odio facilisis mauris sit amet massa vitae. Iaculis urna id volutpat lacus laoreet non curabitur. Praesent semper feugiat nibh sed pulvinar. Neque gravida in fermentum et sollicitudin ac orci. Lacus vel facilisis volutpat est velit egestas dui id ornare. Blandit massa enim nec dui nunc mattis enim ut.')
    mm4 = Role(
        user_id=4,
        project_id=4,
        custom_name='Route Writer',
        type='Writer',
        quantity='6',
        description='Tortor dignissim convallis aenean et tortor at risus viverra. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Vitae auctor eu augue ut lectus arcu bibendum at. Adipiscing tristique risus nec feugiat in fermentum posuere. Facilisis magna etiam tempor orci. Eget dolor morbi non arcu risus quis varius. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Ac turpis egestas integer eget aliquet nibh. Consequat nisl vel pretium lectus quam id leo. Suscipit tellus mauris a diam maecenas sed. Lacinia at quis risus sed vulputate odio. Diam vulputate ut pharetra sit. Mauris commodo quis imperdiet massa. Lectus urna duis convallis convallis tellus id. Tristique sollicitudin nibh sit amet. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.')
    mm5 = Role(
        user_id=4,
        project_id=4,
        custom_name='UI/UX Designer',
        type='Designer',
        quantity='2',
        description='Tempor commodo ullamcorper a lacus vestibulum sed. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Arcu felis bibendum ut tristique. Cras adipiscing enim eu turpis egestas. Malesuada proin libero nunc consequat interdum. Eget sit amet tellus cras adipiscing. Nisi lacus sed viverra tellus in hac habitasse platea. Sit amet consectetur adipiscing elit. Vitae congue eu consequat ac felis donec. Fusce ut placerat orci nulla pellentesque dignissim enim. At erat pellentesque adipiscing commodo elit at imperdiet dui. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Nibh tortor id aliquet lectus. Senectus et netus et malesuada fames.')
    sh1 = Role(
        user_id=5,
        project_id=5,
        custom_name='Scrum Master',
        type='Producer',
        quantity='1',
        description='Sed turpis tincidunt id aliquet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Nisl purus in mollis nunc. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Libero id faucibus nisl tincidunt eget. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Enim sit amet venenatis urna cursus eget nunc scelerisque. Nibh cras pulvinar mattis nunc sed blandit libero. Consequat semper viverra nam libero justo laoreet. Vulputate ut pharetra sit amet aliquam id.')
    sh2 = Role(
        user_id=5,
        project_id=5,
        custom_name='Game Developer',
        type='Programmer',
        quantity='1',
        description='Eleifend donec pretium vulputate sapien nec sagittis. Enim neque volutpat ac tincidunt vitae semper. A diam sollicitudin tempor id eu. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Libero justo laoreet sit amet. Elementum facilisis leo vel fringilla. Nunc faucibus a pellentesque sit amet porttitor eget. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Justo nec ultrices dui sapien eget mi proin sed libero.')
    sh3 = Role(
        user_id=5,
        project_id=5,
        custom_name='Game Mechanics Designer',
        type='Designer',
        quantity='1',
        description='Et leo duis ut diam quam nulla porttitor. Tellus id interdum velit laoreet id donec ultrices. Fermentum leo vel orci porta non pulvinar neque laoreet. Cursus euismod quis viverra nibh. Ut pharetra sit amet aliquam id diam maecenas. Ultrices sagittis orci a scelerisque purus semper eget. Morbi leo urna molestie at. Tincidunt vitae semper quis lectus. Elit scelerisque mauris pellentesque pulvinar. Fermentum dui faucibus in ornare quam viverra. Id velit ut tortor pretium viverra suspendisse potenti. Viverra adipiscing at in tellus integer feugiat scelerisque varius.')
    sh4 = Role(
        user_id=5,
        project_id=5,
        custom_name='Story Writer',
        type='Writer',
        quantity='1',
        description='Eu turpis egestas pretium aenean pharetra magna ac. Mi ipsum faucibus vitae aliquet. Ipsum faucibus vitae aliquet nec. Mauris sit amet massa vitae tortor condimentum. Lacus vestibulum sed arcu non odio euismod lacinia at. Adipiscing elit pellentesque habitant morbi. Leo vel orci porta non pulvinar. Amet consectetur adipiscing elit ut aliquam purus sit. Commodo nulla facilisi nullam vehicula. Tellus elementum sagittis vitae et. At urna condimentum mattis pellentesque id nibh tortor id. Adipiscing elit duis tristique sollicitudin nibh sit. Vitae auctor eu augue ut lectus arcu bibendum. Massa tincidunt dui ut ornare lectus sit amet est. Vel pharetra vel turpis nunc eget lorem dolor sed viverra.')
    sh5 = Role(
        user_id=5,
        project_id=5,
        custom_name='Pixel Artist',
        type='Artist',
        quantity='1',
        description='Velit sed ullamcorper morbi tincidunt ornare massa eget. Volutpat ac tincidunt vitae semper quis lectus nulla. Varius duis at consectetur lorem donec massa sapien. Quis eleifend quam adipiscing vitae proin sagittis. Sagittis nisl rhoncus mattis rhoncus urna. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Mi quis hendrerit dolor magna eget. Semper risus in hendrerit gravida rutrum quisque. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Venenatis lectus magna fringilla urna porttitor.')
    sh6 = Role(
        user_id=5,
        project_id=5,
        custom_name='Soundtrack Composer',
        type='Audio Technician',
        quantity='1',
        description='Enim nunc faucibus a pellentesque sit amet porttitor eget. Leo integer malesuada nunc vel risus commodo viverra. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Eleifend donec pretium vulputate sapien. Etiam non quam lacus suspendisse faucibus. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Sed odio morbi quis commodo odio aenean sed. Aliquet risus feugiat in ante metus dictum at. Est ante in nibh mauris cursus mattis molestie a.')
    bs1 = Role(
        user_id=6,
        project_id=6,
        custom_name='VR Programmer',
        type='Programmer',
        quantity='6',
        description='Scelerisque in dictum non consectetur a erat nam at lectus. Pharetra vel turpis nunc eget lorem dolor. Nec feugiat nisl pretium fusce. Adipiscing bibendum est ultricies integer quis auctor elit. Enim eu turpis egestas pretium aenean pharetra magna ac. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Est ullamcorper eget nulla facilisi. Curabitur gravida arcu ac tortor dignissim convallis. Odio eu feugiat pretium nibh ipsum consequat nisl. Luctus accumsan tortor posuere ac ut consequat semper. Natoque penatibus et magnis dis parturient montes nascetur. At ultrices mi tempus imperdiet nulla. Ornare suspendisse sed nisi lacus. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Nunc sed augue lacus viverra vitae congue eu.')
    bs2 = Role(
        user_id=6,
        project_id=6,
        custom_name='Game Mechanics Designer',
        type='Designer',
        quantity='3',
        description='Neque sodales ut etiam sit amet. Blandit massa enim nec dui nunc mattis. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Auctor eu augue ut lectus arcu bibendum at. Arcu vitae elementum curabitur vitae nunc. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Sit amet nisl suscipit adipiscing bibendum est. Nunc vel risus commodo viverra. Cursus turpis massa tincidunt dui. A diam sollicitudin tempor id. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Aliquet enim tortor at auctor urna nunc id cursus metus.')
    bs3 = Role(
        user_id=6,
        project_id=6,
        custom_name='3D Artist',
        type='Artist',
        quantity='1',
        description='Nec dui nunc mattis enim ut tellus elementum. Integer enim neque volutpat ac tincidunt vitae semper quis. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Sit amet consectetur adipiscing elit ut. Tortor id aliquet lectus proin. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Et magnis dis parturient montes nascetur ridiculus mus. In fermentum posuere urna nec. Semper auctor neque vitae tempus quam pellentesque. In egestas erat imperdiet sed. Sit amet justo donec enim diam. Duis convallis convallis tellus id interdum velit. Posuere sollicitudin aliquam ultrices sagittis orci.')
    v1 = Role(
        user_id=7,
        project_id=7,
        custom_name='3D Artist',
        type='Artist',
        quantity='3',
        description='Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Eget lorem dolor sed viverra ipsum nunc aliquet. Magna ac placerat vestibulum lectus mauris ultrices. Viverra tellus in hac habitasse. Mattis rhoncus urna neque viverra. Eleifend donec pretium vulputate sapien. Nibh cras pulvinar mattis nunc sed blandit. Quisque non tellus orci ac auctor augue mauris augue neque. Lectus proin nibh nisl condimentum id venenatis a condimentum. Rhoncus dolor purus non enim praesent. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Tellus cras adipiscing enim eu. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit.')
    i1 = Role(
        user_id=8,
        project_id=8,
        custom_name='Scrum Master',
        type='Producer',
        quantity='1',
        description='At consectetur lorem donec massa sapien faucibus et molestie. Dictum at tempor commodo ullamcorper. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. In hendrerit gravida rutrum quisque non tellus orci ac. Neque vitae tempus quam pellentesque nec nam aliquam. Dictumst quisque sagittis purus sit. Facilisis sed odio morbi quis. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Lobortis scelerisque fermentum dui faucibus in. Enim eu turpis egestas pretium aenean pharetra magna ac. Lacus viverra vitae congue eu consequat ac felis donec et. Netus et malesuada fames ac turpis egestas. Est ante in nibh mauris cursus mattis.')
    i2 = Role(
        user_id=8,
        project_id=8,
        custom_name='3D Artist',
        type='Artist',
        quantity='5',
        description='Posuere ac ut consequat semper viverra nam libero. Fames ac turpis egestas maecenas pharetra convallis. Neque gravida in fermentum et sollicitudin. Massa id neque aliquam vestibulum morbi blandit cursus. Maecenas sed enim ut sem. Vivamus at augue eget arcu. Vitae et leo duis ut diam quam. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Nibh venenatis cras sed felis eget velit aliquet. Neque vitae tempus quam pellentesque nec nam. Nunc sed augue lacus viverra. Non tellus orci ac auctor augue mauris augue. Sit amet mauris commodo quis imperdiet massa. Euismod nisi porta lorem mollis.')
    i3 = Role(
        user_id=8,
        project_id=8,
        custom_name='Concept Artist',
        type='Artist',
        quantity='1',
        description='Ac felis donec et odio pellentesque diam. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Accumsan lacus vel facilisis volutpat est velit egestas. Sagittis orci a scelerisque purus semper eget duis at. At in tellus integer feugiat. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Laoreet non curabitur gravida arcu ac tortor dignissim. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. A scelerisque purus semper eget duis at. Quis ipsum suspendisse ultrices gravida dictum. Dignissim convallis aenean et tortor at risus viverra. Risus quis varius quam quisque id diam vel quam elementum. Sed euismod nisi porta lorem mollis aliquam ut. In hac habitasse platea dictumst quisque sagittis purus sit amet.')
    i4 = Role(
        user_id=8,
        project_id=8,
        custom_name='Pixel Artist',
        type='Artist',
        quantity='3',
        description='Sed faucibus turpis in eu mi bibendum neque egestas congue. Mattis aliquam faucibus purus in massa. Purus semper eget duis at tellus at urna condimentum mattis. Morbi non arcu risus quis varius quam quisque. Platea dictumst quisque sagittis purus sit amet. Sit amet facilisis magna etiam tempor orci. Pellentesque sit amet porttitor eget. Netus et malesuada fames ac turpis egestas sed tempus urna.')
    i5 = Role(
        user_id=8,
        project_id=8,
        custom_name='SFX Artist',
        type='Audio Technician',
        quantity='1',
        description='Mauris pellentesque pulvinar pellentesque habitant. Facilisi etiam dignissim diam quis enim lobortis. Ornare aenean euismod elementum nisi quis. Leo in vitae turpis massa. Nunc lobortis mattis aliquam faucibus purus. Enim sit amet venenatis urna cursus. Tortor pretium viverra suspendisse potenti. Sit amet tellus cras adipiscing enim eu. Vulputate ut pharetra sit amet aliquam id diam. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Id cursus metus aliquam eleifend mi. Sed sed risus pretium quam vulputate. Ut ornare lectus sit amet est placerat in. Tincidunt tortor aliquam nulla facilisi. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Amet purus gravida quis blandit turpis.')
    i6 = Role(
        user_id=8,
        project_id=8,
        custom_name='Soundtrack Composer',
        type='Audio Technician',
        quantity='1',
        description='Libero nunc consequat interdum varius sit. Ut lectus arcu bibendum at varius vel pharetra. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Amet consectetur adipiscing elit ut. Placerat vestibulum lectus mauris ultrices. Turpis egestas maecenas pharetra convallis posuere morbi. At augue eget arcu dictum varius. Sit amet porttitor eget dolor morbi. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Dolor purus non enim praesent. Sagittis purus sit amet volutpat consequat mauris. Gravida cum sociis natoque penatibus. Condimentum lacinia quis vel eros donec ac odio tempor. Pulvinar sapien et ligula ullamcorper. Donec massa sapien faucibus et molestie ac feugiat. Volutpat blandit aliquam etiam erat velit.')
    i7 = Role(
        user_id=8,
        project_id=8,
        custom_name='Game Developer',
        type='Programmer',
        quantity='6',
        description='Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Turpis cursus in hac habitasse platea dictumst quisque. In nisl nisi scelerisque eu ultrices vitae auctor eu. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Volutpat ac tincidunt vitae semper quis lectus nulla. Id nibh tortor id aliquet lectus proin. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Dui accumsan sit amet nulla facilisi morbi. Sit amet tellus cras adipiscing enim eu turpis egestas. A lacus vestibulum sed arcu non. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Nibh tortor id aliquet lectus proin nibh nisl. Pulvinar neque laoreet suspendisse interdum. Quis blandit turpis cursus in hac habitasse. Arcu odio ut sem nulla pharetra diam sit. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Et ligula ullamcorper malesuada proin.')
    i8 = Role(
        user_id=8,
        project_id=8,
        custom_name='Card Game Designer',
        type='Designer',
        quantity='2',
        description='Quisque non tellus orci ac auctor. Elementum integer enim neque volutpat. Velit sed ullamcorper morbi tincidunt ornare. Cras fermentum odio eu feugiat pretium nibh. Velit egestas dui id ornare arcu odio ut sem. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Erat velit scelerisque in dictum non consectetur a erat. Elementum integer enim neque volutpat. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Mattis molestie a iaculis at erat.')
    i9 = Role(
        user_id=8,
        project_id=8,
        custom_name='Game Mechanics Designer',
        type='Designer',
        quantity='2',
        description='Aliquam purus sit amet luctus venenatis lectus magna. Porttitor leo a diam sollicitudin tempor. Dapibus ultrices in iaculis nunc sed augue. Sapien faucibus et molestie ac. Etiam erat velit scelerisque in dictum non. Euismod lacinia at quis risus sed. Scelerisque purus semper eget duis. Volutpat odio facilisis mauris sit amet.')
    au1 = Role(
        user_id=9,
        project_id=9,
        custom_name='2D Artist',
        type='Artist',
        quantity='3',
        description='Vulputate dignissim suspendisse in est ante in nibh mauris. Adipiscing vitae proin sagittis nisl. Suspendisse sed nisi lacus sed viverra tellus in hac. Penatibus et magnis dis parturient. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Aliquam etiam erat velit scelerisque. Elementum nibh tellus molestie nunc non blandit massa. Condimentum vitae sapien pellentesque habitant morbi tristique. Enim lobortis scelerisque fermentum dui faucibus in. Dolor sit amet consectetur adipiscing elit ut aliquam purus.')
    au2 = Role(
        user_id=9,
        project_id=9,
        custom_name='Game Developer',
        type='Programmer',
        quantity='5',
        description='Mi tempus imperdiet nulla malesuada pellentesque elit eget. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Sed faucibus turpis in eu mi bibendum. Magna eget est lorem ipsum dolor. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Eget dolor morbi non arcu risus quis varius. Lobortis feugiat vivamus at augue. Vel pretium lectus quam id leo in vitae. Justo nec ultrices dui sapien eget mi proin sed. Nibh nisl condimentum id venenatis.')
    sv1 = Role(
        user_id=10,
        project_id=10,
        custom_name='Pixel Artist',
        type='Artist',
        quantity='1',
        description='Tortor id aliquet lectus proin nibh nisl condimentum. At imperdiet dui accumsan sit. Dictum varius duis at consectetur lorem donec. Molestie nunc non blandit massa enim nec dui. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. At auctor urna nunc id cursus metus aliquam eleifend. Ut ornare lectus sit amet est placerat in egestas. Tempor orci dapibus ultrices in iaculis nunc sed. Faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet nibh praesent tristique magna sit amet purus. Viverra mauris in aliquam sem fringilla ut. Sit amet facilisis magna etiam. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Neque convallis a cras semper auctor neque. Neque gravida in fermentum et sollicitudin.')

    db.session.add(vgdl1)
    db.session.add(vgdl2)
    db.session.add(vgdl3)
    db.session.add(vgdl4)
    db.session.add(oc1)
    db.session.add(oc2)
    db.session.add(oc3)
    db.session.add(oc4)
    db.session.add(oc5)
    db.session.add(oc6)
    db.session.add(oc7)
    db.session.add(jb1)
    db.session.add(jb2)
    db.session.add(jb3)
    db.session.add(jb4)
    db.session.add(jb5)
    db.session.add(jb6)
    db.session.add(jb7)
    db.session.add(jb8)
    db.session.add(mm1)
    db.session.add(mm2)
    db.session.add(mm3)
    db.session.add(mm4)
    db.session.add(mm5)
    db.session.add(sh1)
    db.session.add(sh2)
    db.session.add(sh3)
    db.session.add(sh4)
    db.session.add(sh5)
    db.session.add(sh6)
    db.session.add(bs1)
    db.session.add(bs2)
    db.session.add(bs3)
    db.session.add(v1)
    db.session.add(i1)
    db.session.add(i2)
    db.session.add(i3)
    db.session.add(i4)
    db.session.add(i5)
    db.session.add(i6)
    db.session.add(i7)
    db.session.add(i8)
    db.session.add(i9)
    db.session.add(au1)
    db.session.add(au2)
    db.session.add(sv1)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_roles():
    db.session.execute('TRUNCATE roles RESTART IDENTITY CASCADE;')
    db.session.commit()
