import React, { useState, useEffect, useCallback } from 'react';
import Spin from '@iso/ui/Antd/Spin/Spin';
import Modal from '@iso/ui/Antd/Modal/Modal';
import Container from '@iso/ui/UI/Container/Container';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import Posts from './Posts/Posts';
import Followers from './Followers/Followers';
import Following from './Following/Following';
import Wrapper, { Banner, Navigation, ContentWrapper } from './Profile.styles';
import { useSelector, useDispatch } from 'react-redux';
import profileActions from '@iso/redux/profile/actions';
import axios from 'axios';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import GoogleDrive from '@uppy/google-drive';
import Dropbox from '@uppy/dropbox';
import Instagram from '@uppy/instagram';
import { Dashboard } from '@uppy/react';
import AwsS3 from '@uppy/aws-s3';

const MyProfile = () => {
  const data = useSelector(state => state.profile.data);
  const loading = useSelector(state => state.profile.loading);
  const dispatch = useDispatch();
  const getProfile = useCallback(
    () => dispatch(profileActions.fetchProfileDataStart()),
    [dispatch]
  );

  // const postImage = () => {
  //     var albumBucketName = "BUCKET_NAME";
  //     var bucketRegion = "REGION";

  //     AWS.config.update({
  //       region: bucketRegion,
  //       credentials: new AWS.Credentials({
  //         accessKeyId: 'akid', secretAccessKey: 'secret',
  //       })
  //     });

  //     var upload = new AWS.S3.ManagedUpload({
  //       params: {
  //         Bucket: albumBucketName,
  //         Key: photoKey,
  //         Body: file
  //       }
  //     });

  //     var promise = upload.promise();

  //     promise.then(
  //       function(data) {
  //         alert("Successfully uploaded photo.");
  //         viewAlbum(albumName);
  //       },
  //       function(err) {
  //         return alert("There was an error uploading your photo: ", err.message);
  //       }
  //     );
  //   }

  const uppy = Uppy({
    debug: true,
    autoProceed: false,
    restrictions: {
      maxFileSize: 100000000000,
      maxNumberOfFiles: 10,
      minNumberOfFiles: 1,
      allowedFileTypes: ['image/*', 'video/*'],
    },
  });

  uppy.use(AwsS3, {
    // use the AwsS3 plugin
    fields: [], // empty array
    getUploadParameters(file) {
      // here we prepare our request to the server for the upload URL
      return fetch(
        'https://04ie6y9uhl.execute-api.us-east-1.amazonaws.com/dev/client_upload',
        {
          // we'll send the info asynchronously via fetch to our nodejs server endpoint, '/uploader' in this case
          method: 'POST',
          mode: 'no-cors', // all the examples I found via the Uppy site used 'PUT' and did not work
          headers: {
            accept: '*/*',
            'content-type': '*/*',
            'x-amz-acl': 'public-read', // examples I found via the Uppy site used 'content-type': 'application/json' and did not work
          },
          body: file,
        }
      );
    },
  });
  uppy.on('complete', result => {
    console.log('successful files:', result.successful);
    console.log('failed files:', result.failed);
  });

  const [active, setActive] = useState('post');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const handleMenu = type => {
    if (type === 'post') {
      setActive(type);
    }
    if (type === 'upload_picture') {
      setActive(type);
      setVisible(true);
    }
    if (type === 'following') {
      setActive(type);
      setVisible(true);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setActive('post');
  };

  return (
    <Wrapper>
      {loading !== true ? (
        <>
          <Banner
            className="profile-banner"
            style={{ backgroundImage: `url(${data.profile_bg})` }}
          >
            <Container className="container">
              <AvatarCard
                avatar={data.avatar}
                name={data.name}
                username={data.username}
              />
            </Container>
          </Banner>

          <Navigation className="navigation">
            <Container className="container">
              <ul className="menu">
                <li
                  className={active === 'post' ? 'active' : ''}
                  onClick={() => handleMenu('post')}
                >
                  <strong>{data.post.length}</strong> Gallery
                </li>
                <li
                  className={active === 'upload_picture' ? 'active' : ''}
                  onClick={() => handleMenu('upload_picture')}
                >
                  <strong type="button" class="ant-btn ant-btn-primary">
                    {' '}
                    Upload Pictures
                  </strong>
                </li>
                <li
                  className={active === 'following' ? 'active' : ''}
                  onClick={() => handleMenu('following')}
                >
                  <strong>{data.following.length}</strong> Client List
                </li>
              </ul>
            </Container>
          </Navigation>

          <ContentWrapper>
            <Container className="container">
              <Posts
                avatar={data.avatar}
                username={data.username}
                data={data.post}
              />
              <Modal
                wrapClassName="follow-modal"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
              >
                {active === 'upload_picture' && (
                  <Dashboard
                    plugins={['GoogleDrive', 'Dropbox', 'Instagram']}
                    uppy={uppy}
                    inline={true}
                    target=".DashboardContainer"
                    replaceTargetContent={true}
                    showProgressDetails={true}
                    note=""
                    height={470}
                    width="100%"
                    metaFields={[
                      { id: 'name', name: 'Name', placeholder: 'file name' },
                      {
                        id: 'caption',
                        name: 'Caption',
                        placeholder: 'describe what the image is about',
                      },
                    ]}
                    browserBackButtonClose={true}
                  />
                )}
                {active === 'following' && <Following data={data.following} />}
              </Modal>
            </Container>
          </ContentWrapper>
        </>
      ) : (
        <div
          style={{
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spin />
        </div>
      )}
    </Wrapper>
  );
};

export default MyProfile;
