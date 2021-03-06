package com.cafein.dto.user.signin;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class OauthOutput {
    private SocialLoginType type;
    private String id;
    private String email;
    private String nickname;
    private String image;
}
