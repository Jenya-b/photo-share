import { gql } from '@apollo/client';

export const ADD_FAKE_USERS = gql`
	mitation addFakeUsers($count: Int!) {
		addFakeUsers(count: $count) {
			githubLogin
 			name
 			avatar
		}
	}
 `;
