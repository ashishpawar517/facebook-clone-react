import React from 'react';
import {Box} from "@mui/material";
import FacebookPost from "./FacebookPost";

function FacebookFeed() {
    return (
        <Box flex={4} p={{xs: 0, md: 2}}>
            <FacebookPost avtar_text={'A'}
                          title={'Whatever is good for your soul, do that.'}
                          descr={'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'}
                          date={'01-Feb-2022'}
                          link={'https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
            />
            <FacebookPost avtar_text={'X'}
                          title={'CyberPONk.'}
                          descr={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}
                          date={'01-March-2022'}
                          link={'https://images.pexels.com/photos/10446788/pexels-photo-10446788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
            /><FacebookPost avtar_text={'T'}
                            title={'Whatever is good for your soul, do that.'}
                            descr={'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '}
                            date={'27-Feb-2022'}
                            link={'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        />

        </Box>

    );
}

export default FacebookFeed;